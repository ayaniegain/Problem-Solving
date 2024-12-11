//1//☑️ function aply call
// var obj={name:"Piyush"};

// function sayHello(age,job) {
//     return "hello " + this.name + " age is " + age  + job
// }

// // console.log(sayHello.call(obj,23))
// // console.log(sayHello.apply(obj,[23,"SE"]))
// let bindfunc=sayHello.bind(obj)
// console.log(bindfunc(23,"SE"))
// // console.log(bindfunc(53,"SEe"))

//2//  using call replace the all person age value by 99 ☑️ (in methode calll use)

// const age = 10;

// var person = {
//   name: "Piyush1",
//   age: 20,
//   getAge: function (age) {
//     return this.age +" age "+ age  ;
//   },
// };
// var person2 = {
//   name: "Piyush2",
//   age: 22,
//   getAge: function (age) {
//     return this.age +" age "+ age  ;
//   },
// };
// var person3 = {
//   name: "Piyush3",
//   age: 23,
//   getAge: function (age) {
//     return this.age +" age "+ age  ;
//   },
// };

// let arr=[person,person2,person3]
// var replaceAge = { age: 99 };

// arr.map((user)=>{
// console.log(user.getAge.call(replaceAge,88)) // replaced by 99 age

// })

// console.log(person3.getAge())//unchanged

//4// guess the output

// var status = "outer";

// setTimeout(() => {
//   const status = "hello";

//   const data = {
//     status: "hi",
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);

//5//

// const animals=[
//     {species:"Lion",name:"King"},
//     {species:"Whale",name:"Queen"}
// ];

// function printAnimals(i) {

//     this.print= function(){

//         console.log(`${i} species- ${this.species} animals- ${this.name}`)
//     }
//     this.print()
// }

// animals.map((item,index)=>{
//     printAnimals.call(item,index);

// })

//6// push the element to rray

// let elm=["a","b"]
// let arr=[1,2,34,5]

// elm.push.apply(elm,arr)

// console.log(elm)

//7//

// let number=[3,45,2,5,7,]

// console.log(Math.max.apply(null,number))

// function f(){
//     console.log(this)
// }

// let user={
//     g: f.bind(null)
// };

// user.g()

// function checkPassword(success, failed) {
//   let password = "hllo";

//   if (password == "hello") success();
//   else failed();
// }

// let user = {
//   name: "Ayan Biswas",
//   loginSuccessfull() {
//     console.log(this.name, "logged in");
//   },
//   loginFailed() {
//     console.log(this.name, "logged failed");
//   },
// };

// checkPassword(user.loginSuccessfull.bind(user), user.loginFailed.bind(user));

//partial oth

// let user={
//     name:"ayan",
//     login(result){

//         console.log(result)
//         console.log(this.name +(result?" login success":" login failed"))

//     }
// }

// checkPassword(user.login.bind(user,true),user.login.bind(user,false))
//8//
function Parent() {
    this.age=300


let person = {
  age: 20,
  name: "ayan",
  getAGe: function () {
    console.log(this.age);
  },

  getArrowAge: () => {
    console.log(this.age);
  },
};

let person2 = {
  age: 99,
};
person.getAGe();
person.getArrowAge();

person.getAGe.call(person2);
person.getArrowAge.call(person2);

// function Parent() {
//     this.name = "Ayan";
  
//     let child = () => {
//       console.log(this.name);
//     };
  
//     child();
  }
  
  new Parent(); // "Ayan", `this` is inherited from Parent's context
  