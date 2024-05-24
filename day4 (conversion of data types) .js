let score = "33abc";
console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" ==> 33
// "33abc" ==> NaN
// true ==>  1; false ==> 0
// string ==> NaN

let isloggedIn = 1
let booleanIsLoggedin = Boolean(isloggedIn)
console.log(booleanIsLoggedin);

// 1 ==> true 
// 0 ==> false
// "" ==> false
// "string" ==> false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);