// 1
// let arr= new Array(23,45,2,68,66,5)

// console.log(arr)

// 2

// let arr = new Array(3);

// console.log(arr);

//3
// let myArray = [1, 2, 3, 4, 5, 6]

// console.log(myArray.length-3)
// 4
// let myArray = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < myArray.length; i++) {
//   if (i % 2 !== 0) {
//       console.log(i);
//   }
// }

// 5

// let myArray = [1, 2, 3, 4, 5, 6];

// let start = 12;
// let end=99

// function addelem(arr) {
//     for (let i = arr.length; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = start;
//   arr[arr.length] = end;

//   console.log(arr)
// }

// addelem(myArray);

// 6
// let myArray = [1, 2, 3, 4, 5, 6];


// function addelem(array) {
   
//     for (let i = 1; i < array.length-1; i++) {
//         const element = array[i];

//         console.log(element)
        
//     }

// }

// addelem(myArray);

// 7 //8

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let [,,,,g,...rest]=arr



// console.log(g)
// console.log(rest)

// 9 deepclone 

// let arr=[23,45,56,{a:45}]

// let newarry1=JSON.parse(JSON.stringify(arr))

// arr[3].a=99

// console.log(arr)
// console.log(newarry1)

let arr=[1,2,3,4,5,6,7,8,9,10];

let nw=arr.slice(2,7)

console.log(nw)
console.log(arr)

