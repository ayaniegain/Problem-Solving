// lenier search, find index, max and min value ✅

let arr = [23, 1, 5, 67, 88, -10, 7];

// if (arr.length === 0) {
//   console.log("blank array");
//   return;
// }
// let val = arr[0];

// // Find the largest number in the array
// for (const i of arr) {
//   if (arr[0] < i) {
//     val = i;
//   }
// }

// Store the largest number found
//filter-out the "number" and "string"  from a array and return a new array.
// Find the index of the largest number in the original array✅
//Solve the maximum subarray sum problem using the Kadane's algorithm.
let arrval = [1, 2, 3, 4, 5];

for (let i = 0; i < arrval.length; i++) {
  let line = '';
  for (let index = i; index < arrval.length; index++) {
    for (let j = i; j <= index; j++) {

      line+= `${arrval[j]}`
    }
  }
  console.log(line);
}

