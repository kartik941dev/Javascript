// this is object singleton
//const tinderUser = new Object() // singleton object

const tinderUser = {} // non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kartik",
            lastname: "Patel"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname);

//sometimes fullname? will used it means if fullname exists then do otherwise use if else   

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

//const obj3  = {obj1,obj2}
//const obj3 = Object.assign({}, obj1,obj2,obj4) //here {} empty object as a target and others as an source 

const obj3 = {...obj1,...obj2,...obj4} //spread method

//console.log(obj3);

const users = [
    {
        id: 1,
        email: "Kartikgoogle.com"
    },
    {
        id: 1,
        email: "Kartikgoogle.com"
    },
    {
        id: 1,
        email: "Kartikgoogle.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // output datatype is array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
