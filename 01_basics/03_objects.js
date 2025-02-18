//singleton
// object literals

//this is object literals


const mySym = Symbol("Key1")

const JsUser = { //key :value
    name : "Hitesh",
    "full name": "Kartik Patel", // now we dont have anymethod to access this value by using .(Dot).
    // so we will use square bracket method  to excess this value
    [mySym]: "mykey1", // if we want to excess symbol as a key then  write in a square bracket.
    age : 44,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoogedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym])

JsUser.email = "kartikchatgpt.com" // .freeze is used to lock the values it means no one can't change
//Object.freeze(JsUser) // I commented this freeze to learn more topics.

JsUser.email = "katrikgooglegpt.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello JS user");
}
//console.log(JsUser.greeting);


//(.greeting = is just used to property access.)
//const person = {
//     name: "Alice",
//     age: 30,
//     greeting: "Hello, my name is Alice!"
// };

// console.log(person.greeting); // Output: Hello, my name is Alice!

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



// mainly we access values by using .


