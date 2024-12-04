// const obj = { a: 1, b: 2, c: 3 };

// 1 How to iterate over a JavaScript object
// for (const [key,value] of Object.entries(obj)) {

//     console.log(key,value)

// }

//2 Find the length of a JavaScript object
// let count=0
// for (const element in obj) {

//     count++
// }

// console.log(Object.keys(obj).length)

// 3 How to remove a key from a JavaScript object

// delete obj.b

// console.log(obj)

// 4 How to add an object to an array in JavaScript

// obj.d=4

// console.log(obj)

// 5 same //How to remove a property from a JavaScript object

//6 How to create an object from the given key-value pairs using JavaScript
// const keys = ["name", "age"];
// const values = ["Alice", 25];

// // output:{ name: "Alice", age: 25 }

// let newobj = {};

// function addObj(key, value) {
//   for (let i = 0; i < key.length; i++) {
//     newobj[key[i]] = value[i];
//   }
// }

// addObj(keys, values);

// console.log(newobj);

// 7 How to add a key-value pair to a JavaScript object
// const obj2 = { a: 1 };
// const newKey = "b";
// const newValue = 2;

// Object.assign(obj2,{[newKey]:newValue})
// obj2[newKey]=newValue
// console.log(obj2)

// 8 How to rename an object key in JavaScript

// let obj3 = { a: 1, b: 2 };
// const oldKey = "a";
// const newKey = "x";

// let emntries=Object.entries(obj3)

// emntries[0][0]=newKey

// let xx=Object.fromEntries(emntries)

// obj3=xx

// console.log(obj3)
// --alternative
// const { a: x, ...rest } = obj3;

// let ne = { x, ...rest };

// console.log(ne);

// 9 How to convert a JavaScript object to a JSON string and return last properties

const user = {
    name: "ayan biswas",
    age: 23,
    "like this video": true,
  };

  let val= JSON.stringify(user,["name","age"])


  console.log(val)