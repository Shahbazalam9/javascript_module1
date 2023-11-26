const accountId  = 12345
let emailId = "Shahbazgoogle.com";
var password = "Alam@9"
accountCity = "Delhi"; // not prefer but we can 
console.log(typeof(accountCity))
let bankAccount;
// console.table([accountId,emailId,password,accountCity,bankAccount])

// accountId = 89089 not allowed for const to change the value
emailId = "shahbazapple.com"
password = "Appple@9"
accountCity = "Jaipur"
// console.table([accountId,emailId,password,accountCity,bankAccount])

/*
NOTES
----------
1.
prefer not used VAR 
because of block scope & function scope
2.
not allowed for const to change the value
*/