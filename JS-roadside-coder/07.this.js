// let obj = {
//   firstname: "ayan",
//   mynameFunc: function () {
//     let firstname = "martin";
//     return this.firstname;
//   },
// };
// console.log(obj.mynameFunc());

// let obj2 = {
//   firstname: "ayan",
//   secondfunc() {
//     return (mynameFunc = () => {
//       let firstname = "martin";
//       return this.firstname;
//     });
//   },
// };
// console.log(obj2.secondfunc()());

// calculator☑️

// let calculator = {
//   read(val1, val2) {
//     this.a = val1;
//     this.b = val2;
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read(4, 2);

// console.log(calculator.sum());
// console.log(calculator.mul());

// output☑️

// var length = 4;

// function callback() {
//   console.log(this.length); //4 and print windows
// }
// let obj = {
//   length: 5,

//   method(fn) {
//     fn();
//   },
// };

// obj.method(callback);

// output☑️

let calcx = {
  total: 0,

  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subs(a) {
    this.total -= a;
    return this;
  },
};

const result = calcx.add(10).multiply(5).subs(30);

console.log(result.total);
