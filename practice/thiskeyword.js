// NOTE: this keyword in global refers Window , in function in non strict mode its refer also Window . But in "use strict " mode its refer "undefined"

// console.log(this);

// function name() {
//   console.log(this);
// }
// name();

//   let obj = {
//     name: "ayan",
//     fullname: function () {
//       console.log(this);
//     },
//   };

//   obj.fullnam
// function call☑️

// let sum = 0;

// function showMessage() {
//   sum++;
//   console.log("type of function call", sum);
// }

// const obj1 = {
//   showMessage,
// };

// showMessage();

// let obj = new showMessage;


// showMessage.call();

// obj1.showMessage();



function showMessege(){
    console.log(this.message)
}

let ss={}
ss.message="hello"

showMessege.call(ss)