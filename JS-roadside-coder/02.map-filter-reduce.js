// //POLYFIll for MAP
//  Array.prototype.myMap=function(cb){

//     let temp=[]

//     for (let i = 0; i < this.length; i++) {
//        temp.push(cb(this[i],i,this))

//     }
//     return temp;
//  }

//  const nums=[1,2,3,4];

//  const multiplyThree=nums.myMap((num,i,arr)=>{
//     return num *3
//  })

//  console.log(multiplyThree)

//POLYFIll for FILTER

// Array.prototype.myFilter = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push((this[i]));
//     }
//   }
//   return temp;
// };

// const nums = [1, 2, 3, 4];

// const multiplyThree = nums.myFilter((num, i, arr) => {
//   return num > 3;
// });

// console.log(multiplyThree);

//POLYFIll for REDUCE

// Array.prototype.myReduce = function (cb, initialValue) {
//   let acc = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i], i, this) : this[i];
//   }

//   return acc;
// };

// let nums = [1, 2, 3, 4];

// let sum = nums.myReduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

// -----interview question----

const students = [
  { name: "Ayan Biswas", rollNo: 1, marks: 80 },
  { name: "Riya Sharma", rollNo: 2, marks: 69 },
  //   { name: "Rahul Verma", rollNo: 3, marks: 25 },
  { name: "Sneha Roy", rollNo: 4, marks: 35 },
  { name: "Arjun Kapoor", rollNo: 5, marks: 55 },
];

// console.log(students.map(std=>std.name.toUpperCase()))
// console.log(students.filter(std=>std.marks>80 && std.rollNo>3))

// console.log(students.reduce((acc,init)=>acc+init.marks,0));

// console.log(students.filter(std=>std.marks>80).map((e)=>e.name))

let stu = students
  .map((std) => {
    if (std.marks < 60) {
    std.marks += 20
    }
    return std;
  })
  .filter((std) => std.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(stu);
