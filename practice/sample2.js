// Array-Based Problems ✅

// let arr = [1, 2, 7, -4, 3, 2, -10, 9, 1]

// let filteredArry=[...new Set(arr)]
// console.log(filteredArry)

// let sum=filteredArry.reduce((acc,curr)=>{
//         return acc+ curr
// },0)


// console.log(sum)


// 2 ✅
// Rotate an array by k steps to the right.


let arr=[12,45,68,90,55] // [90,55,12,45,68]
let n=2

temp=[]

for (let i = 0; i < arr.length; i++) {

        arr[(i+n)%arr.length]=arr[i]

        
}

console.log(arr)