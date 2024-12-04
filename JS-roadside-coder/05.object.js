// let property = "first-name";
// const user = {
//   name: "ayan biswas",
//   age: 23,
//   "like this video": true,
//   [property]: "ayan",
// };

// console.log(user)
///////added key value in new array ☑️
// let key=[]
// let values=[]

// for(let i in user){

//     key.push(i)
//     values.push(user[i])
// }

// console.log(key)
// console.log(values)

// console.log(Object.keys(user))

// console.log(Object.entries(user))

//-- create a function which multiply all the numeric values of nums by 2 ☑️

// let nums = {
//   a: 100,
//   b: 200,
//   title: "my nums",
// };

// nums.multiply=function(){
//     console.log((this.a*this.b)/2)
// }

// nums.multiply()

// function multiplyVlue(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyVlue(nums);

// console.log(nums);
// -----------find the output ☑️
// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };

// a[b] = 99;
// a[c] = 199;

// console.log(a[b]);

// ---------convert obj to string and pass data which needed☑️

// const user = {
//     name: "ayan biswas",
//     age: 23,
//     "like this video": true,
//   };

//   let newObj= JSON.stringify(user,["age","name"])

//   console.log(newObj)

// -----output based question ☑️

// this.redius=50

// let obj = {
//   redius: 10,
//   parameter: function () {
//     return `parameter of ${this.redius}`;
//   },
//   diameter: () => {
//     return `diameter of ${this.redius}`;
//   },
// };

// let p = obj.parameter();
// let d = obj.diameter();

// console.log(p, d);

// object destructing☑️

// const user = {
//   name: "ayan biswas1",
//   age: 23,
//   "like this video": true,
//   user1: {
//     name: "ayan biswas2",
//     age: 24,
//     "like this video": true,
//     user2: {
//       name: "ayan biswas3",
//       age: 25,
//       "like this video": true,
//     },
//   },
// };

// let {
//   name,
//   age,
//   user1: {
//     name: name1,
//     age: age1,
//     user2: { name: name3, age: age3 },
//   },
// } = user;

// console.log(age3);

//object referencing //IMP ☑️

// let person = { name: "lynda" };

// let members = [person];

// person = null;

// console.log(members);

// const value={num:10};

// const multiply=(x={...value})=>{

//     console.log(x.num*=2)

// }

// multiply()
// multiply()
// multiply(value)
// multiply(value)
// multiply(value)

// -------output☑️

// let perosn={}

// function xx(perosn){

//  perosn.f="fall"

//     perosn={"d":3}
//     return perosn
// }

// console.log(perosn)

// console.log(xx(perosn))

// shallowcopy and deepcopy☑️

// let shallowcopy = {
//     a: 123,
//     b: "abc",
//     c: {
//       ab: 999,
//     },
//   };
  //shallow copy
  // let copy={...shallowcopy}
  // let copy= Object.assign({},shallowcopy)
  
  //deep copy
  // let copy = JSON.parse(JSON.stringify(shallowcopy));
  // let copy = structuredClone(shallowcopy);
  
  // shallowcopy.c.ab = "xyz";
  // shallowcopy.b = 100;
  
  // console.log(shallowcopy);
  // console.log(copy);
  
  // ---------Practice☑️