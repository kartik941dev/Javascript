// datatypes: primitive

//7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let useEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
//const bigNumber = 3456543576654365494n


// reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman", "Naagraj","Doga"]
let myObj = {
    name:"Kartik",
    age: 22,
}
const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
//Output = js
// false
// bigint 
