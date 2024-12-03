// let arr= ["Apple", "Banana"];

// console.log(arr.at(1))

// let xx="hello "

// // let xp=(Array.from(xx))
// let xp=(Array.from(arr,(x)=>x.toLocaleUpperCase()))

// console.log(xp)

// Array.fill

// let arr=[2,3,5,67,85,3,[7,9]]

// let cx=(arr.fill(44,1,4))

// console.log(cx)

// console.log(arr.filter((e)=>e>10))
// console.log(arr)

// console.log(arr.findLastIndex((e)=>e===3))

// console.log(arr.flat())

// const array1 = [{'a':1}, {'b':2}, {'c':3}];

// let arr=[]

// for (const i of array1) {

//    let xx= Object.keys(i)

//    arr.push(...xx)

// }

// console.log(arr)

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// // let xx=animals.reverse()
// let xx1=animals.toReversed()

// // console.log(xx)
// console.log(xx1)
// console.log(animals)
// // console.log(animals)

// console.log(animals)

// console.log(animals.some((e)=>e==="bison"))
// let x=animals.toSpliced(0,2)
// console.log(x)
// console.log(animals)

// not muteted origainal array

// --toSorted()
// --toSpliced()
// --toReversed()

// let dd=[2,3,45,67,1]

// console.log(dd.toSorted())

// console.log(dd)

//STATIC-METHOD☑️


//AT☑️
//  let first=[1,2,3]
//  let second=[6,26,37]
//  let third=[66,4,7]

//  const merged= [].concat(first,second,third)

//  console.log(merged)

// join

// console.log(typeof[].join()) // "" no value alwes return ""

//fill

// const colors=["red","blue","black"];
// console.log(colors.fill("pink",1,colors.length))

// sort
// const colors=["red","blue","black"];
// let arrr=[45,2,6,1,55,77]

// // colors.sort((a,b)=>b-a)
// arrr.sort((a,b)=>b-a)
// arrr.sort((a,b)=>a-b)

// // console.log(colors)
// console.log(arrr)

// splice()☑️ //it's  return removed elem

// let arr=[23,45,66,32]

// let nwarry=arr.splice(2,1,"carry")

// console.log(arr)
// console.log(nwarry)

//type of empty arry☑️
// let arr=[23,45,66,32]
// --
// arr.length=0
// --
// arr=[]

// --
// while (arr.length>0) {

//     arr.pop()

// }

// console.log(arr)
// --

// arr.splice(0,arr.length)

// console.log(arr)

// FLAT ☑️

// let arr = [23, 45, 35, [34, 78, [23, 89]]];

// let newarry = arr.flat(Infinity);

// console.log(newarry);

//copyWithIn☑️

// let arry=[1,2,3,4,5,6,7]

// arry.copyWithin(2,4,6)


// console.log(arry)

//WITH☑️ //value put index// replace //work with negative index also

// const numbers=[45,66,345,22]

// let newarry=numbers.with(2,99)


// console.log(numbers)
// console.log(newarry)

