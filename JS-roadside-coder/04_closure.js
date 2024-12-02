// let x= "xy"
// function sum() {
//   var  x=88

//   console.log(x)
// }

// sum()

// console.log(x)

// let str = "hello 1234 hi";
// let arr = [...str]

// console.log(typeof arr);

// let myStr = [];
// let myNum = [];

// for (const i of arr) {

//     console.log(typeof i)
// //   if (Math.abs(i) === NaN) {
// //     myStr.push(i);
// //   } else if (typeof i !== NaN) {
// //     myNum.push(i);
// //   }
// }

// console.log(myNum);
// console.log(myStr);

//closure -
// function outer(x) {
//   let val = "mozilla";
//   function inner(y) {
//     return val +" "+ x+y;
//   }

//   return inner;
// }

// let res = outer(5);

// console.log(res(6));

// var count=0;

// (()=>{
//     if (count==0) {

//         let count=1;
//         console.log(count) //1

//     }

//     console.log(count)//0
// }

// )()

// function createBase(a) {
//   function sum(b) {
//     return a + b;
//   }

//   return sum;
// }

// let addSix = createBase(6);

// console.log(addSix(10));
// console.log(addSix(21));
// ---------------------------------

// function find() {
//   let a = [];

//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// }
// let cls = find();
// console.time("6");
// cls(6);
// console.timeEnd("6");
// console.time("12");
// cls(12);
// console.timeEnd("12");
// console.time("inf");
// cls(78765);
// console.timeEnd("inf");
// ---------------------------------- using var
// function a() {
//   for (var i = 0; i < 4; i++) {
//     ((i) => {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     })(i)
//   }
// }

// a()

// -----------------private counter// module patern

// let modulepattern = () => {
//   let count = 0;

//   function add() {
//    return "minus is"
//   }
//   function minus() {
//    return  add() + count--;
//   }

//   return {minus}
// };

// let res = modulepattern();

// console.log(res.add())
// console.log(res.minus())

// make it runs onces ☑️

// let view;
// function funcCalled() {
//   let count = 0;
  
//   return function () {
//     if (count > 0) {
//       console.log("you already subscribe");
//     } else {
//       view = "hello how are you? Please subscribe!";
//       console.log(view);
//       count++;
//     }
//   };

  
// }
// let res=funcCalled();
// res();
// res();
// res();


// memoization

