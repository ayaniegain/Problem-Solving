// 1

// function findLongestWord(sentence) {
//   let allWord = sentence.split(" ");

// //   let alllength = allWord.map((word) => word.length).sort();

// //   let len = alllength[alllength.length - 1];

// //   return allWord.find((wordlen) => wordlen.length == len);

//  return allWord.sort((a,b)=>b.length-a.length)[0]
// }

// let result = findLongestWord("The quick brown fox jumped over the lazy dog");

// console.log(result);

// 2

// function checkPalindrome(str) {
//   let newStr = str.split("").reverse().join("");
//   return str === newStr ? "true" : "false";
// }

// console.log(checkPalindrome("racecar"));

// 3

// let arr=[1, 2, 2, 3, 4, 4, 5]

// let duplicate= [...new Set(arr)]

// console.log(duplicate)

// function removeDuplicate() {

//  console.log(arr.filter((item,index)=>arr.indexOf(item)==index))
// }

// removeDuplicate()

// 4

// let rev="hello"

// function reservedString(array) {

//  for (let index = array.length-1; index >=0 ; index--) {
//   const element = array[index];

//   console.log(element)

//  }

// }

// (reservedString(rev))

// let arr=[
//   { name: "sai" },
//   { name: "Nang" },
//   { name: "sai" },
//   { name: "Nang" },
//   { name: "111111" },
// ];


// console.log(arr.filter((e)=> [...new Set(e.name)]))

// 1

// let strval="The quick brown fox jumped over the lazy dog";
// let arrVal=strval.split(" ");

// // console.log(arrVal)

// let res=arrVal.reduce((a,b)=>(a.length>b.length)? a :b ,"")

// console.log(res)

// 2 pallendrome

// let strpallen="racecar"

// let res= strpallen.split("").reverse().join("")

// console.log(res)

// 3. Remove duplicates from an array

// let arr=[1, 2, 2, 3, 4, 4, 5];

// console.log(arr.filter((item,i)=>arr.indexOf(item)==i))

// 4. Reverse a string without using built-in methods

// let arr="hello"

// for(i=arr.length-1;i>=0;i--){
//   console.log(arr[i])
// }

let arr=[1, 1, 0, 1, 1, 1, 0, 1].join("")

let xx=arr.split("0")

console.log(xx.length)





