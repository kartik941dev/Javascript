const accountId = 44553
let accountemail = "Kartik@google.com"
var accountPassword = "12345"
accountcity = "Jaipur"

//accountId = 2 not allowed 
accountemail = "hc@hc.com"
accountPassword = "21211"
accountcity = "Agra"
let accountState;

console.log(accountId);
console.table([accountId,accountemail,accountPassword,accountcity, accountState])
/*
prefer not to use var
because of issue in block scope and functional
*/