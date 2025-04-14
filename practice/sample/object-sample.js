// const obj = { a: 1, b: 2, c: 3 };

// 1 How to iterate over a JavaScript object
// for (const [key,value] of Object.entries(obj)) {

//     console.log(key,value)

// }

//2 Find the length of a JavaScript object
// let count=0
// for (const element in obj) {

//     count++
// }

// console.log(Object.keys(obj).length)

// 3 How to remove a key from a JavaScript object

// delete obj.b

// console.log(obj)

// 4 How to add an object to an array in JavaScript

// obj.d=4

// console.log(obj)

// 5 same //How to remove a property from a JavaScript object

//6 How to create an object from the given key-value pairs using JavaScript
// const keys = ["name", "age"];
// const values = ["Alice", 25];

// // output:{ name: "Alice", age: 25 }

// let newobj = {};

// function addObj(key, value) {
//   for (let i = 0; i < key.length; i++) {
//     newobj[key[i]] = value[i];
//   }
// }

// addObj(keys, values);

// console.log(newobj);

// 7 How to add a key-value pair to a JavaScript object
// const obj2 = { a: 1 };
// const newKey = "b";
// const newValue = 2;

// Object.assign(obj2,{[newKey]:newValue})
// obj2[newKey]=newValue
// console.log(obj2)

// 8 How to rename an object key in JavaScript

// let obj3 = { a: 1, b: 2 };
// const oldKey = "a";
// const newKey = "x";

// let emntries=Object.entries(obj3)

// emntries[0][0]=newKey

// let xx=Object.fromEntries(emntries)

// obj3=xx

// console.log(obj3)
// --alternative
// const { a: x, ...rest } = obj3;

// let ne = { x, ...rest };

// console.log(ne);

// 9 How to convert a JavaScript object to a JSON string and return last properties

// const user = {
//     name: "ayan biswas",
//     age: 23,
//     "like this video": true,
//   };

//   let val= JSON.stringify(user,["name","age"])


//   console.log(val)


const user = {
    name: "Ayan Biswas",
    age: 27,
    location: {
      city: "Dinhata",
      state: "West Bengal",
      country: "India"
    },
    skills: ["React.js", "Next.js", "JavaScript", "Node.js", "MongoDB"],
    experience: [
      {
        company: "Sicu Aura Pvt Ltd",
        role: "Full Stack Developer",
        duration: "March 2024 - Present"
      },
      {
        company: "Taylor and Francis",
        role: "Frontend Developer",
        duration: "April 2022 - August 2023"
      }
    ],
    isLookingForJob: true,
    greet: function() {
      console.log(`Hello, my name is ${this.name}!`);
    }
  };
// 1
//   console.log(user.experience[0].company)
// 2
// console.log(user.experience.length)
// 3
// delete user.location.state
// 4
// user.hobbies="cricket"

// let generarion="Zen-G" ;
// let value="90s"

// let gen= new Object()
// gen["generarion"]=value



// console.log(JSON.stringify(gen))

// const book = {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     yearPublished: 1988,
//     genre: "Fiction",
//     pages: 208,
//     publisher: "HarperCollins",
//     availableFormats: ["Hardcover", "Paperback", "E-book", "Audiobook"],
//     isBestSeller: true,
//     getSummary: function() {
//       return `${this.title} by ${this.author} is a ${this.genre} book published in ${this.yearPublished}.`;
//     }
//   };
// MED 1
//  console.log(Object.keys(book))

//  for(let key in book){

//     console.log(`${key}:${book[key]}`)


//  }

// 2

const books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      yearPublished: 1988,
      genre: "Fiction"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      yearPublished: 2018,
      genre: "Self-help"
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      yearPublished: 1997,
      genre: "Finance"
    },
    {
      title: "The Alchemist",
      author: "Kiyosaki",
      yearPublished: 2076,
      genre: "History"
    }
  ];

//   let book=books.find((book)=>book.title=== "Rich Dad Poor Dad")

//   book.yearPublished=2025

//   console.log(books)
// let book=books.map((book)=> (book.title=== "Rich Dad Poor Dad")?{...book,yearPublished:2025}:book)
        
// let updatedBooks = books.map(book => { 
//     if (book.title === "Rich Dad Poor Dad") {
//         return { ...book, yearPublished: 2026 }; // Update only this book
//     }
//     return book; // Keep other books unchanged
// });

// console.log(updatedBooks);

//   console.log(book)


let filteredValue= [...new Set(books.map((book)=>book.title))]


let z=books.map((book)=>{

 return   filteredValue.map((e)=>{
        if (book.title==e) {

            return book
    }})
})

console.log(z)
