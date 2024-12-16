// syncronous and asyncronous code
// 1

// console.log("start");
// setTimeout(() => {
//   console.log("this is under setTime out");
// }, 100);
// console.log("end");

// 2 callback function and cal back hell

// console.log("start");

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`subs to ${username}`);
//   }, 1000);
// }

// function liketheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`like the video ${video}`);
//   }, 200);
// }

// function sharethisvideo(share, cb) {
//   setTimeout(() => {
//     cb(`like the share ${share}`);
//   }, 300);
// }

// importantAction("ayan biswas", (message) => {
//   console.log(message);

//   liketheVideo("MAD MAX", (video) => {
//     console.log(video);
//   });

//   sharethisvideo("share videos", (share) => {
//     console.log(share);
//   });
// });
// console.log("stop");

//3 Promises

// function importantAction(username) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`action to ${username}`);
//     }, 2000);
//   });
// }

// function liketheVideo(like) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`like video  ${like}`);
//     }, 100);
//   });
// }

// function sharethisvideo(video) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`share to ${video}`);
//     }, 1000);
//   });
// }

//1//
// importantAction("ayan ")
//   .then((e) => {
//     console.log(e);
//     return liketheVideo("👍 ");
//   })

//   .then((e) => {
//     console.log(e);
//     return sharethisvideo("Marvel ");
//   })

//   .then((e) => {
//     console.log(e);
//   });

//2//

// Promise.all([
//   importantAction("ayan "),
//   liketheVideo("👍 "),
//   sharethisvideo("Marvel "),
// ])
//   .then((val) => console.log(val))
//   .catch((e) => console.log(e));

// Promise.race([
//   importantAction("ayan "),
//   liketheVideo("👍 "),
//   sharethisvideo("Marvel "),
// ])
//   .then((val) => console.log(val))
//   .catch((e) => console.log(e));
// Promise.reject
// Promise.allSettled

//async

// async function importantAction(action) {
//   return setTimeout(() => {
//     console.log("imp  ", action);
//   }, 1000);
// }

// async function liketheVideo(like) {
//   return setTimeout(() => {
//     console.log("video  ", like);
//   }, 2000);
// }

// async function sharethisvideo(video) {
//   return setTimeout(() => {
//     console.log("share  ", video);
//   }, 100);
// }
// main//

// async function main() {
//   sharethisvideo("MERVEL");
//   liketheVideo("YOUTUBE");
//   importantAction("AYAN");

//   //   let share = await sharethisvideo("MERVEL");
//   //   let video = await liketheVideo("YOUTUBE");
//   //   let imp = await   importantAction("AYAN");

//   //   console.log(share);
//   //   console.log(video);
//   //   console.log(imp);
// }

// main();

// OUTPUT BASED 1 👍

// console.log("start")

// const promise1= new Promise((resolved,reject)=>{
//     console.log("1")
//     resolved(2)
// })
// .then((e)=>{
//     console.log(e)
// })
// console.log("end")
// output- start,1,end,2

// console.log("start")

// OUTPUT BASED 2 👍
// console.log("start");
// const promise1 = new Promise((resolved, reject) => {
//   console.log("1");
//   resolved(2);
//   console.log("3");
// }).then((e) => {
//   console.log(e);
// });
// console.log("end");
// output- start,1,3 end,2

// OUTPUT BASED 3 👍

// console.log("start");
// const fn=()=>new Promise((res,rej)=>{
//     console.log(1)
//     res("success")
// })

// console.log("middle")

// fn().then((e)=>{
//     console.log(e)
// }
// )

// console.log("end"); 
//OUTPUT- start,middle,1,success

///write it in async await👍

// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {
//     return await response.json();
//   }
// }
// (async()=>{

//     let res=await loadJson("https://jsonplaceholder.typicode.com/posts")
//     console.log( res)
// }
// )()
