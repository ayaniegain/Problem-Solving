// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(1)(3)(5));

// ---QS2

// function evaluate(action) {
//   let sym = {
//     sum: "+",
//     sub: "-",
//     mult: "*",
//     div: "/",
//   };

//   if (sym[action]) {
//     return function (a) {
//       return function (b) {
//         return eval(`${a} ${sym[action]} ${b}`);
//       };
//     };
//   } else {
//     return "Invalid operation";
//   }
// }

// console.log(evaluate("sub")(38)(4));

// function sum(a) {
//   return function (b) {
//     if (b) {
//       return sum(a * b);
//     }
//     return a;
//   };
// }

// console.log(sum(1)(2)(7)());
