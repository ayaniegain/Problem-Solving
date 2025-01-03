// (sum(3,4,5))

// function sum(a,b,c) {
// //  return a+b+c

//  console.log(a+b+c)
// }

// this.no=12

// let thisfn=()=>{
// console.log(this.no)
// }
// thisfn()

// let obj = {
//   name: "ayan",

//   function() {
//     console.log(this.name);
//   },
//   head1: function () {
//     console.log(this.name);
//   },
//   head2() {
//     console.log(this);
//   },

//   eye: () => {
//     console.log(this);
//   },
// };

// obj.head1();
// obj.head2();
// obj.eye();

//CALLBACK

// function talk(cb, talk) {
//  return cb(talk);
// }

// function sayHi(talk) {
//   return talk +" "+ "sayHi ";
// }

// console.log(talk(sayHi, "talk"));

// Closure

// function makeFunction() {
//   let name = "Mozilla";

//   return function () {
//     return name;
//   };
// }

// let res = makeFunction()();

// console.log(res);

// IIFE
// (function(){
//     console.log(this)
// })()

// ,(()=>{
//     console.log(this)
// })
// ()

// Object----------

// call

// function callmethode(run) {
//   let object1 = {
//     name: "Taban",
//     canRun: function () {

//       return `${this.name} can run ${run}km/hr`;
//     },
//   };
//   return object1.canRun.call(this, run);

// }

// object2 = {
//   name: "molly",
//   run: 20,
// };

// console.log(callmethode.call(object2, 30));

// bind

// function callmethode(run) {

//    let object1 = {
//         name: "Taban",
//         canRun: function () {
//             return (`${this.name} can run ${run}km/hr`);
//         },
//     };
//  return object1.canRun.call(this, run);
// }

// object2 = {
//   name: "molly",
//   run: 20,
// };

// let res=(callmethode.bind(object2, 30))

// console.log(res())
// console.log(res())
// console.log(res())

// let object1 = {
//   name: "Taban",
//   canRun: function (run) {
//     return `${this.name} can run ${run}km/hr`;
//   },
// };

// object2 = {
//   name: "molly",
//   run: 20,
// };

// console.log(object1.canRun.call(object2,30));

// arr=[6,11,34,90]

// // let res=arr.slice(1,3)
// let res=arr.splice(1,1,22)

// console.log(res)
// console.log(arr)

// console.log(arry.at(2))

// const products = [
//     { name: "Laptop", price: 100, category: "Electronics", inStock: true, rating: 4.5 },
//     { name: "Smartphone", price: 200, category: "Electronics", inStock: true, rating: 4.3 },
//     { name: "Headphones", price: 300, category: "Accessories", inStock: false, rating: 4.0 },
//     { name: "Smart Watch", price: 400, category: "Electronics", inStock: true, rating: 4.2 },
//     { name: "Office Chair", price: 550, category: "Furniture", inStock: true, rating: 4.7 },
//     { name: "Water Bottle", price: 650, category: "Kitchen", inStock: false, rating: 3.8 },
//     { name: "Backpack", price: 50, category: "Fashion", inStock: true, rating: 4.6 },
//     { name: "LED TV", price: 150, category: "Electronics", inStock: false, rating: 4.8 },
//     { name: "Running Shoes", price: 500, category: "Sports", inStock: true, rating: 4.4 },
//     { name: "Book", price: 100, category: "Education", inStock: true, rating: 4.9 }
//   ];

  
// let result=  products.reduce((acc,curr)=>{



//     return (curr.price+acc)


//   },0)

//   console.log(result)

