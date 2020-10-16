let web3x = new Web3(web3.currentProvider);
// let Utils = require('web3-utils');

    web3x.eth.defaultAccount = web3x.eth.accounts[0];
    let handlerAbi = [{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"address","name":"_paymentAddress","type":"address"},{"internalType":"address","name":"_recipientAddress","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerSet","type":"event"},{"inputs":[{"internalType":"address","name":"_for","type":"address"},{"internalType":"string","name":"_payload","type":"string"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"preImage","type":"bytes32"}],"name":"addPreMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"preImage","type":"bytes32"}],"name":"addPreTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"image","type":"string"}],"name":"buyWithPaymentOnly","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_bytes32","type":"bytes32"}],"name":"bytes32ToStr","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"coupon","type":"address"}],"name":"changeCoupon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"changeMetadataBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"name":"changeName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"changeNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"payment","type":"address"}],"name":"changePayment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"changePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"}],"name":"changeRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"image","type":"string"},{"internalType":"bytes32","name":"preImage","type":"bytes32"}],"name":"checkPreMintImage","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"image","type":"string"},{"internalType":"bytes32","name":"preImage","type":"bytes32"}],"name":"checkPreTransferImage","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"couponAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_for","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"deletePreMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"deletePreTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPaymentDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_for","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getPreMint","outputs":[{"components":[{"internalType":"string","name":"payload","type":"string"},{"internalType":"bytes32","name":"preImage","type":"bytes32"}],"internalType":"struct VaultHandlerV4.PreMint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_for","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getPreMintByIndex","outputs":[{"components":[{"internalType":"string","name":"payload","type":"string"},{"internalType":"bytes32","name":"preImage","type":"bytes32"}],"internalType":"struct VaultHandlerV4.PreMint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_for","type":"address"}],"name":"getPreMintCount","outputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getPreTransfer","outputs":[{"components":[{"internalType":"string","name":"payload","type":"string"},{"internalType":"bytes32","name":"preImage","type":"bytes32"},{"internalType":"address","name":"_from","type":"address"}],"internalType":"struct VaultHandlerV4.PreTransfer","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getPreTransferByIndex","outputs":[{"components":[{"internalType":"string","name":"payload","type":"string"},{"internalType":"bytes32","name":"preImage","type":"bytes32"},{"internalType":"address","name":"_from","type":"address"}],"internalType":"struct VaultHandlerV4.PreTransfer","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getPreTransferCount","outputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadataBaseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"_uri","type":"string"},{"internalType":"string","name":"_payload","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recipientAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"internalType":"bytes32","name":"result","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferNftOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"code","type":"string"}],"name":"transferWithCode","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"_uri","type":"string"}],"name":"updateTokenUri","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    var tokenAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"addMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_viewer","type":"address"}],"name":"addViewer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"allowPrivateTransactions","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blockNumberLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blocksTillUnlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"name":"changeContractDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockForever","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockTemporarily","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"lockTemporarilyTillBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"locked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockedPermenantly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"removeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_viewer","type":"address"}],"name":"removeViewer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleBurnable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePrivateTransferability","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleTransferable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleVisibility","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"_private","type":"bool"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"_private","type":"bool"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"viewers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"visible","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"visibleOrAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
    var ERC20Contract = web3x.eth.contract(tokenAbi);
    var contract = ERC20Contract.at('0x83dd89b40636f946a08975e97aa7a36d12dae551');
    window.tokenAbi = tokenAbi
    window.contract = contract
function getBalance() {
    var walletaddress = document.getElementById("walletaddress").value;
    contract.balanceOf(walletaddress, function(error, result){
    if(!error) {
      document.getElementById("walletaddressbalance").innerHTML = 'Balance ' + result.toNumber();
      console.log(result);
    } else
      console.log(error);
    });
}
window.getBalance = getBalance;

function getTotalSupply() {
    contract.decimals((err, tokenDecimals)=>{
        contract.totalSupply( function(error, result){
            if(!error) {
              document.getElementById("totalsupply").innerHTML = 'Supply ' + result.toNumber() / Math.pow(10, tokenDecimals.toNumber());
              console.log(result);
            } else
              console.log(error);
            });
    })
    
}
window.getTotalSupply = getTotalSupply;

function transfer() {
    var numbertokens = document.getElementById("numbertokens").value;
    var receivingwalletaddress = document.getElementById("receivingwalletaddress").value;

    contract.transfer( receivingwalletaddress, numbertokens, function(error, result){
    if(!error) {
      console.log(result);
    } else
      console.log(error);
    });
}
window.transfer = transfer;

function transferFrom() {
    var numbertokensFrom = document.getElementById("numbertokensFrom").value;
    var sendingwalletaddressFrom = document.getElementById("sendingwalletaddressFrom").value;
    var receivingwalletaddressFrom = document.getElementById("receivingwalletaddressFrom").value;

    contract.transferFrom( sendingwalletaddressFrom,receivingwalletaddressFrom , numbertokensFrom, function(error, result){
    if(!error) {
      document.getElementById("totalsupply").innerHTML = 'Supply ' + result;
      console.log(result);
    } else
      console.log(error);
    });
}
window.transferFrom = transferFrom;

function approve() {
    var numbertokensApprove = document.getElementById("numbertokensApprove").value;
    var spendingwalletaddress = document.getElementById("spendingwalletaddress").value;

    contract.approve( spendingwalletaddress,
           numbertokensApprove, function(error, result){
    if(!error) {
      console.log(result);
    } else
      console.log(error);
    });
}
window.approve = approve;

function allowance() {
    var ownerwalletaddressAllowance = document.getElementById("ownerwalletaddressAllowance").value;
    var spendingwalletaddressAllowance = document.getElementById("spendingwalletaddressAllowance").value;

    contract.allowance( ownerwalletaddressAllowance,
             spendingwalletaddressAllowance, function(error, result){
    if(!error) {
      document.getElementById("allowance").innerHTML = 'Allowance ' + result;
      console.log(result);
    } else
      console.log(error);
    });
}
window.allowance = allowance;

const ethEnabled = () => {
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      return true;
    }
    return false;
  }
window.ethEnabled = ethEnabled;
ethEnabled()