const accountid = 1212; // it can not be changed
let accountEmail = "mamai.majumder2002@gmail.com"; 
var accountpassword = "12345";
accountCity = "Kalyani"
let accountState;
//accountid = 2; // not allowed
accountEmail = "abc@gmail.com";
accountpassword = "abc123";
accountCity = "kolkata";

//console.log(accountid);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountid,accountEmail,accountpassword,accountCity,accountState]);