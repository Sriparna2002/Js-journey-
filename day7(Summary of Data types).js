// Primitive datatype (call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol(made for unique value), BigInt.

const name = 'abcd' // string type  
const score = 100 // number type
const scoreValue = 100.3 // number type
const isLoggedin = false // boolen type
const outsideTemp = null // null type (object)
let userEmail  // undefined
const Bignumber = 123456789123456789123456789123456789n // Bigint

const id = Symbol('123') //symbol type
const anotherId = Symbol('123')

console.log(id === anotherId); // output false

/*
   String = string
   Number = number
   Boolean = boolean
   null = object
   Undefined = undefined
   bigInt = bigint
   Symbol = symbol 
*/

// Non Primitive (Reference)
// Array, Objects, Functions 
const heros = ['Saktiman', 'naagraj', 'doga'] // Array
let muObj = {
    name2 : 'abc',
    age: 22 
} // object
const myFunction = function(){
    console.log("Hello World");
}

/* 
   Array = object
   Object = object
   function = function (actually object function)
*/

/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. You can assign different 
types of values to a variable during its lifetime.For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, 
and the type checking is done at compile-time, before the code is executed.
*/
