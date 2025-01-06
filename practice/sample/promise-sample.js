// 1

// new Promise((res,rej)=>{

//     let isLoggin=true
// if (isLoggin) {

//     setTimeout(() => {
//         res("hello world")
//     }, 2000);
// }else{
//     rej("loggined failed!")
// }

// })
// .then((e)=>console.log(e)).catch((Error)=>console.log(Error))

// 2

// function fetchData() {
//   return new Promise((res, rej) => {
//     res("data fetched");
//   });
// }

// let res = fetchData();

// res
//   .then((e) => {
//     console.log(e);
//     console.log("procssing data ");
//     return "data processed";
//   })
//   .then((e) => {
//     console.log(e);
//   });

// 3

// function fetchData() {
//   return new Promise((res, rej) => {
//     let isLoggin = true;

//     if (isLoggin) {
//       res("get data from db");
//     } else {
//       rej("something went wrong");
//     }
//   });
// }

// let res = fetchData();

// res.then((e) => console.log(e)).catch((e) => console.log(e));

// 4
// function resolverdAllPromises() {
//     const promise1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(1);
//         }, 1000);
//     });
//     const promise2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2);
//         }, 1000);
//     });
//     const promise3 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(3);
//         }, 1000);
//     });

//     return Promise.all([promise1, promise2, promise3]).then((e) => {
//         return e;
//     });
// }

// let res = resolverdAllPromises();

// res.then((e) => {
//     console.log(e); // [1, 2, 3]
// });

// 5

function getUserData(id) {

  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id, name: "User" + id });
    }, 1000);
  });
}



let ids = [1, 2, 3, 4];

Promise.all(ids.map((e) => getUserData(e))).then((e) => {
  console.log(e);
});
