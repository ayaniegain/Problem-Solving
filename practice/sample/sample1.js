// 1 Write a function to reverse a string.

// let str="hello world"

// let arryStr=str.split("")

// let revStr=""

// for (let i = arryStr.length-1; i >=0 ; i--) {

//      revStr+=arryStr[i]

//     }
//     console.log(revStr)

//2 Check if a string is a palindrome (ignoring case and spaces).

// function checkPallindrome(val) {
//   if (!val) {
//     console.log("should't empty");
//     return;
//   }

//   let revValue = val.split("").reverse().join("");

//   val === revValue
//     ? console.log("this is pallindridrome")
//     : console.log("not pallindrome");
// }

// checkPallindrome("illi");

// 3 Count the number of vowels and consonants in a string.

// let vowel = { a: 0, e: 0, i: 0, o: 0, u: 0 };

// let givenStr = "hi Ayan how are you?";

// let convertedStr = givenStr.split("");
// let sum = 0;

// for (const v in vowel) {
//   for (const s of convertedStr) {
//     if (v == s) {
//       vowel[v]++;
//       sum+=vowel[v]
//       sum++;

//     }
//   }
// }

// console.log(vowel);
// console.log(sum);

// 4 Remove the duplicate character from  string.
// let strtext="mmk"
// let arrstr=strtext.split("")
// let arrstr2=[...arrstr]

// let arr=[]
// let res=arrstr2.map((e,index)=>{
//     if (e !== " " && arrstr.indexOf(e) === index) {

//        return arr.push(e)

//     }

// })
// 4 Find the first non-repeating character in a string.
// let strtext="mmk"
// let arrstr=strtext.split("")
// let arrrval=[]

// arrstr.filter((e,i,arr)=>{
    // if (arr.indexOf(e)==arr.lastIndexOf(e)) {
//         arrrval.push(e)

//     }
// })

// console.log(arrrval[0])

// console.log(arr.join(""))

// let strtext = "hello how are you?";
// let arrstr = strtext.split("");  // Split string into array of characters
// let arrstr2 = [...arrstr];  // Copy the array (though unnecessary here)

// let res = [...new Set(arrstr)].map((e) => {  // Use Set to remove duplicates
//   console.log(e);
// });

// 5. Write a function to find the longest word in a given string.

// let word = "hello";

// let wordArry = word.trim().split(" ");

// let res = wordArry.filter((e, index, arr) => {
//   if (wordArry.length === 1) {
//     return e;
//   } else if (wordArry[0].length < wordArry[index].length) {
//     return e;
//   }
// });

// // console.log(res)
// 6. Replace all spaces in a string with a hyphen (`-`).

// let str = "hello world nice";

// let arryStr = str.split("");

// arryStr.map((e, i) => {
//   if (arryStr[i] == " ") {
//     arryStr[i] = "-";
//   }
// });

// console.log(arryStr.join(" "));

// 7 Convert a given string to Title Case.

// let str = "hello world nice";

// let arryStr = str.split(" ");

// let arrval=[]

// arryStr.map((e)=>{

//     let innerArray=e.split("")
//     innerArray[0]= innerArray[0].toLocaleUpperCase()

//     arrval.push(innerArray.join(""))

// })

// console.log(arrval.join(" "))

// let arr=[1,45,67,45,1,56]

// for (let i = 0; i <= arr.length-1; i++) {
//         if(arr[i]==1){
//             continue
//         }
//         console.log(arr[i])
// }

// 8. Find the frequency of a given character in a string.

// let str = "hello world";
// str = str.split("");

// let obj = {};

// for (const char of str) {
//   if (char !== " ") {
//     obj[char] = (obj[char] || 0) + 1;
//   }
// }
// console.log(obj);

// 9. Check if two strings are anagrams of each other.

// let str1 = "ere";
// let str2 = "ree";
// str1 = str1.split("").sort().join("");
// str2 = str2.split("").sort().join("");

// if (str1.length!==str2.length) {
//   console.log(false)
//   return false;
  
// }


// // let res=(str2.split("").every((e)=>str1.includes(e)))
// // console.log(res)

// let istrue=true;

// for (let i = 0; i <= str1.length - 1; i++) {
//     if (str1[i] != str2[i]) {

//       istrue = false;
//       break;
//     }
// }

// console.log(istrue)
// 10. Compress a string by replacing consecutive duplicate characters with their count (e.g., `"aaabbcc"` → `"a3b2c2"`).

// let str="aaabbcceeeuop"
// str = str.split("");

// let obj = {};


// for (const char of str) {
//   if (char !== " " &&(char==="a" ||char=== "e" ||char=== "i" ||char==="o"||char==="u")) {
//     obj[char] = (obj[char] || 0) + 1;
//   }
// }

// let res=""
// for (const i in obj) {
// res+=`${i}${obj[i]}`

// }
// console.log(res)