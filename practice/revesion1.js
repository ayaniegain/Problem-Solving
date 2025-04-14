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

// -------------revesion 2
// let age=20
// let count = 1;
// if(age>18){
//  let count = 2;
//    console.log(count)
// }

// let words= "hello world"

// // console.log(words.split("e"))
// console.log(words.split("o").join("").replace(" ",""))

// a=10
// b=8

// console.log(a%b)

// function sum(a,b) {

//   return a+b

// }

// console.log(sum(12,23))

// let a=["ab","bc"]
// let b=["xy","az"]

// console.log(a.concat(b))

// for (let i=0; i<=10;i++){
//   console.log(i)
// }

// function one(val,cb) {
//   let b=val
//   cb(b)

// }

// function sum(b) {
//   let a= 1

//   console.log(a+b)

// }

// one(2,sum)

// hello()

// function hello(){
//   console.log("hello")
// }

// obj={
//   name:"ayan",
//   age:27,
//   run:20,
//   runSpeed:function () {
//     console.log(`running ${this.run}km/hr`)
//   }
// }
// obj.address="kolkata"
// obj.hobbies=["cooking"]
// obj.expences= function () {

//   console.log(` ${this.name} expences is 100rs`)

// }
// obj.runSpeed()
// obj.expences()
// console.log(obj)

// abx()

// function abx() {
//   console.log("first")
// }

// var xx= ()=>{
//   console.log("xx")
// }
// xx()

// let person1= {
//   name:"ayan",
//   greeting:function (greeting) {
//     console.log(greeting, this.name)
//   }
// }

// let person2={
//   name:"rohit"
// }

// person1.greeting.call(person2,"hello")

// var person = {
//   name : "abhishek",
//   age :30 ,
//   address : "street 10",
//   phone:8888888888
// }

// let person2={}

// person2={...person}

// person2.job ="done"

// console.log(person)

// ------tapas script------✅

// function calculateThis(a, b, ...rest) {
//   let res = 0;

//   function sum(val) {
//     val.forEach((e) => (res += e));
//   }
//   sum(rest);

//   return a + b + res;
// }

// ---closure
// console.log(calculateThis(12, 34, 21, 45));

// function Outer() {
//   console.log("outer");

//   return function Innner() {
//     return "Inner";
//   };
// }

// let res = Outer();

// console.log(res());

// ---callback
// let logIn = false;

// function main(cb) {
//   let user = "Ayan";

//   logIn ? cb(user) : console.log(` Hello user log in `);
// }

// function cb(user) {
//   console.log(` Hello ${user} log in `);
// }

// main(cb);

//---pure function

// when a function produced same output for the same input its called pure function ,
// and if the function influence by   any external varibale or any other condition then this function make as impure .

// let cc="hello"

// function PURE (a,b){

//     return a+ cc+ b

// }

// console.log(PURE(3,5))
// -//callStack f-s-t
// function first() {
//     console.log("First");
//     second();
//   }
//   function second() {
//     console.log("Second");
//   }
//   first();
//   console.log("Third");


// function foo(i) {

    
//     if (i==0) {
//         console.log("foo")

//         return;

        
//     }
    
//     foo(i-1)
// }

// foo(5)


// -------LOOP----

