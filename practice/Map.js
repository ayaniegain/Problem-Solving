const myMap= new Map();
myMap.set("a",123)
myMap.set("b","ayan")

let xx=myMap.get("a")

console.log(xx)

console.log(myMap)
console.log(myMap.size)

let obj={}
obj.k=12
myMap.set(obj,"obj is")

console.log(myMap.get(obj))

for (const data of myMap) {

    console.log(data)
    
}

console.log(Array.from(myMap.keys()))