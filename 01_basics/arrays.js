const myArr = [0,1,2,3,4]
//const myhero = ["A","B","C","D"]
//const myarr2 = new Array(1,2,3,4)
//console.log(myarr[1]);

// myArr.unshift(8) // It is good but only for small arrays because it shifts all the indexes of array.
// console.log(myarr); 
//Output: [ 8, 0, 1, 2, 3, 4 ]


// myArr.shift() // it removes the first value
// console.log(myArr);

//console.log(myArr.includes(8));
//console.log(myArr);

// const newArr = myArr.join() // join converts array into string
// console.log(myArr);
// console.log(newArr);
console.log("A",myArr);

const myn1 = myArr.slice (1,3)

console.log(myn1);

const myn2 = myArr.splice(1,3)

console.log(myn2);


/// difference between splice and slice
// slice only print the array from the range but splice delete  the arrray but range not included eg; 
// limit is (1,3) in arr = [0,1,2,3,4,5]
// it will print [0,4,5]