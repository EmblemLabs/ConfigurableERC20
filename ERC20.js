let web3x = new Web3(web3.currentProvider);
let defaultAddress = location.hash? location.hash.replace("#","") : '0x83dd89b40636f946a08975e97aa7a36d12dae551'
const ETHERSCAN_API = 'GC2Q118AB2HIYZZFN25CQ956VEQUFVZIII'
window.defaultAddress = defaultAddress
web3x.eth.defaultAccount = web3x.eth.accounts[0];
var ERC20Contract
const ethEnabled = (cb) => {
  if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    window.ethereum.enable();
    web3.version.getNetwork((err, network)=>{
      window.chainId = Number(network)
      return cb(true)
    })    
  }
  return cb(false);
}
window.ethEnabled = ethEnabled;
function handleFunctionButtonClick(e) {
  let functionTarget = $($(e.target).parent().parent()[0]).attr('id')
  let functionPropertyTargets = $($(e.target).parent()[0]).siblings().find("input")
  let responseTarget = $($($(e.target).parents()[1]).siblings()[0]).find(".output")
  let functionMap = propertyIdToFunctionMap(functionTarget)
  responseTarget.text('Loading...')
  // console.log('function', functionMap.name)
  let properties = []
  functionPropertyTargets.each((index, target) => {
    let id = $(target).attr('id')
    let propertyMap = propertyIdToFunctionMap(id, false)
    propertyMap.value = $(target).val()
    properties.push(propertyMap.value)
    // console.log("propertyTarget", id, $(target).val())
  })
  let cb = (err, out) => {
    // console.log(out, typeof out)
    switch (typeof out) {
      case "boolean":
      case "string":
        break;
      case "object":
        if (out) {
          out = out.toJSON();
        }                  
        break;
    }
    let outputs = funcs.filter(func => { return func.name === functionMap.name })[functionMap.index].outputs
    responseTarget.text(err ? err.message : out)
    if (functionMap.name === "name") {
      $(".contractName").text(out)
    }
    // console.log(out, outputs)
  }
  properties.push(cb)
  contract[functionTarget].apply(contract[functionTarget], Array.prototype.slice.call(properties, 0))
  // window.cb = (err, out)=>{console.log('out', out, err)}
  // console.log("properties", properties)

}
window.handleFunctionButtonClick = handleFunctionButtonClick

function propertyIdToFunctionMap(target, includeIndex = true) {
  let _property = {}
  target.split('-').forEach(prop => {
    let props = prop.split('[')
    includeIndex ? _property.index = 0 : null
    _property.name = props[0]
    if (props.length > 1 && includeIndex) {
      _property.index = Number(props[1].replace(']', ''))
      //console.log("ADD INDEX", Number(props[1].replace(']','')))
    }
  })
  return _property
}
window.propertyIdToFunctionMap = propertyIdToFunctionMap

function autoExecViewFunctions() {
  $(".fun-btn").each((index, element) => {
    let buttonElement = $(element)
    let functionName = $(element).attr('id').replace('btn-', '')
    let filtered = funcs.filter(func => { return func.name === functionName })
    let isView = filtered[0].stateMutability === "view"
    if (isView && filtered[0].inputs.length === 0) {
      // console.log("Clicking", functionName, filtered[0].inputs.length)
      handleFunctionButtonClick({ target: $(buttonElement) })
    }
    // console.log(isView, functionName, buttonElement)
  })
}

function assignEvents(cb){
  $("body").off("click");
  $("body").on("click", ".fun-btn", handleFunctionButtonClick)
  $("body").on("click", "#load-button", changeContractContext)
  $("#contract-address").val(defaultAddress)
  return cb()
}
window.assignEvents = assignEvents
let workTimeout;

function handleWork() {
  if (!window.tokenAbi) {
    console.log("Loading ABI...")
    workTimeout = setTimeout(handleWork, 500)
    window.workTimeout = workTimeout
    return workTimeout
  }
  
  let funcs = window.tokenAbi.filter(item => { return item.type === "function" }).map(func => {
    func.formattedName = unCamelCase(func.name)
    let width
    switch (true) {
      case func.formattedName.length <= 7:
        width = 1
        break;
      case func.formattedName.length > 7 && func.formattedName.length <= 13:
        width = 2
        break;
      default:
        width = 3
        break;
    }
    func.formattedNameWidth = width
    // console.log(func.formattedNameWidth, func.formattedName)
    func.inputs = func.inputs.map(input => {
      input.width = Math.floor((12 - width) / func.inputs.length)
      return input
    })
    return func
  })
  funcs = funcs.map(_function => {
    let functions = funcs.filter(f => { return f.name === _function.name })
    if (functions.length > 1) {
      let filteredFunctionInputs = functions.map(f => { return JSON.stringify(f.inputs) })
      let currentInputsString = JSON.stringify(_function.inputs)
      let index = filteredFunctionInputs.indexOf(currentInputsString)
      // console.log('internal loop inputs', currentInputsString, index)
      // console.log('functions', filteredFunctionInputs)
      _function.index = index
    }
    return _function
  })
  var template = document.getElementById('function-list-template').innerHTML;
  var renderCats = Handlebars.compile(template);
  document.getElementById('function-list').innerHTML = renderCats({
    functions: funcs
  });
  window.funcs = funcs;
  setTimeout(()=>{
    assignEvents(()=>{
      autoExecViewFunctions()
    })    
  }, 500) 
  // ()

}
window.handleWork = handleWork

function loadContract(address, abi, cb){
  ERC20Contract = web3x.eth.contract(abi);
  var contract = ERC20Contract.at(address)
  window.tokenAbi = abi
  window.contract = contract
  return cb()
}

function changeContractContext() {
  let address = $("#contract-address").val()
  defaultAddress = address
  window.defaultAddress = defaultAddress
  let prefix = chainId === 1 ? '' : '-rinkeby'
  $.getJSON('https://api'+prefix+'.etherscan.io/api?module=contract&action=getabi&address='+ address + '&apikey='+ETHERSCAN_API, function (data) {
      var contractABI = "";
      if (data.status === "1") {
        contractABI = JSON.parse(data.result);
        if (contractABI != ''){
          loadContract(address, contractABI, ()=>{
            console.log("Re Initiating")
            assignEvents(()=>{
              handleWork()
            })            
          })
        } else {
            console.log("Error" );
        }
      } else {
        $("#function-list").text(data.result ? data.result : "Unknown error")
        clearTimeout(window.workTimeout)
        assignEvents(()=>{})
      }
                  
  });
}
window.changeContractContext = changeContractContext

window.loadContract = loadContract


async function getLocalAbi(location, cb) {
  let abi = await $.get(location)
  return cb(abi)
}

$("#contract-address").val(defaultAddress)
ethEnabled((enabled)=>{
  if (enabled) {
    changeContractContext()
  }
})