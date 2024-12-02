//5*5 print
// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 1; j <= 5; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// sum of no div by 3
// let givenNnumber = 9;
// let sum = 0;
// for (let i = 0; i <= givenNnumber; i++) {
//   if (i % 3 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);

// factorial of no
// let givenNo = 60; //1,2,3,4,5 (n*n-1)

// function fact(n) {
//   if (n == 0) {
//     return 1;
//   }
//   return n * fact(n - 1);
// }

// console.log(fact(givenNo));

// let givenFactN = 5;
// let sum = 1;

// if (givenFactN == 0) {
//   return 1;
// }

// for (let i = 1; i <= givenFactN; i++) {
//   sum *= i;
// }

// console.log(sum);
// -----A*B-----
// let n = 3;
// let num=65
// for (let i = 1; i <= n; i++) {
//   let line ="";
//   for (let j = 1; j <= n; j++) {
//       line += String.fromCharCode(num);

//       num++
//     }

//   console.log(line);
// }

// -------1to9-----
// let n = 3;
// let num=1
// for (let i = 1; i <= n; i++) {
//   let line ="";
//   for (let j = 1; j <= n; j++) {
//       line += (num);
//       num++
//     }

//   console.log(line);
// }

// print A BB CCC & 1 22 333 & * ** ***---------

// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line +=String.fromCharCode(i+64);
//   }

//   console.log(line);
// }

// //--
// 1
// 12
// 123
// 1234
// --//

// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }

//   console.log(line);
// }

// //
// 1
// 21
// 321
// 4321
// //

// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = i; j >= 1; j--) {
//     line += j;
//   }

//   console.log(line);
// }

// Floy'ds Triangle Pattern
// 1
// 23
// 456
// 78910

// let n=4;
// let no=1

// for (let i = 1; i <= n; i++) {
//     let line=""
// for (let j = 1; j <= i; j++) {

//     line+=no
//     no++
// }

//  console.log(line)

// }

// A
// BA
// CBA
// DCBA
// let n=4;
// for (let i = 1; i <=n; i++) {

//     let line=''

//     for (let j = i; j >=1 ; j--) {

//         line+=String.fromCharCode(j+64)

//     }

//     console.log(line)

// }


// let n=4

// for (let i = 1; i <=n; i++) {

// }

// function handleClick() {
//   let newstring = document.getElementById("text").value;

//   if (!newstring && newstring === "") {
//     document.getElementById("show").innerText = "should't empty input";
//     return;
//   }

//   let hiiPresentasStr = newstring.slice(0, 4);

//   if (hiiPresentasStr == "hii!") {
//     document.getElementById("show").innerText = newstring;

//     return;
//   }

//   let strArry = newstring.toLowerCase().split(" ");

//   if (strArry[0] == "hii!") {
//     newstring.replace("hii!", newstring);
//     document.getElementById("show").innerText = newstring;

//     console.log(newstring);
//   } else {
//     strArry.unshift("hii!");
//     console.log(strArry.join(" "));
//     document.getElementById("show").innerText = strArry.join(" ");
//   }
// }

// let strArry= newstring.toLowerCase().split(" ")
// strArry[0]=="hii!" ? strArry.join(" ") : strArry.unshift("hii!")
// console.log(strArry.join(" "))


// function addHiiPrefix(str) {
//     const prefix = "hii!";
    
//     // Check if the string already starts with "hii!"
//     if (str.startsWith(prefix)) {
//         return str; // Return the original string
//     }
    
//     // Add "hii!" to the beginning of the string
//     return prefix + " " + str;
// }

// // Example usage
// console.log(addHiiPrefix("hii!Howareyou?")); // Outputs: "hii! How are you?"
// console.log(addHiiPrefix("Howareyou?"));      // Outputs: "hii! How are you?"



// 1111
//  222
//   33
//    4

// let n=4
// for (let i = 0; i <n; i++) {
//         let line=""
//     for (let j = 0; j <= i; j++) {
//         line+=""
//     }
//     for (let j = 0; j < n-1; j++) {
//         line+=i+1
//     }
//     console.log(line)
// }

//  --------PRAC 2---------

// for (let i = 0; i <=3; i++) {
//     let line=''
//     for (let j = 10; j <= 15 ; j++) {
//         line+=`${j} `
        
//     }
    
//     console.log(line)
// }


// for (let i = 0; i <4; i++) {
//         for (let j = 0; j < 3; j++) {
//             document.write(`${("* ")}`)            
//         }    

//         document.write("<br>")
// }



// for (let i = 0; i < 4; i++) {
//     let line=""
//     for (let j = 0; j <= i; j++) {
//         line+="*"
//     }

//     console.log(line)
// }

// 1
// 2 4
// 3 6 9
// 4 8 12 16


// for (let i = 1; i <= 4; i++) {
//     let line=""
//     for (let j = 1; j <= i; j++) {

//         line+=`${j*i} `
        
//     }

//     console.log(line)
// }

