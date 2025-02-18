const marvel_heroes=["thor","iron man"]
const dc_heroes =  ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // array ke andar array aa gya
//OUTPUT: [ 'thor', 'iron man', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[2][1]);

//const heros = marvel_heroes.concat(dc_heroes)
//console.log(heros);
//output: [ 'thor', 'iron man', 'superman', 'flash', 'batman' ]
// it merges properly not adding an single elemnt in the array

// const all_spread_method = [...marvel_heroes,...dc_heroes]
// console.log(all_spread_method);

// !!!! spread method is good



// const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

//Output: [ 1, 2, 3, 4, 5, 6, 7, 6, undefined ]

// console.log(Array.isArray("hitesh")); // it used for check is array or not true/false
// console.log(Array.from("hitesh")); // from is used to convert to array. 
// console.log(Array.from({name: "hitesh"})) //@@ intresting // it cant converts directly we should mention that key should we in array or value otherwise it will return null [].

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


