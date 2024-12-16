// using callback

// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (e) {
//   processToPayment(orderId);

//   console.log(e)
// });



 function namefunc() {
    return new Promise((res,rej)=>{
    
console.log("start")
setTimeout(() => {
    console.log("process data")
            res("ExIT")
            
            console.log("end of process..")
        }, 1000);
    })

}
// namefunc().then((e)=> console.log(e))


async function main() {
    console.log("Calling namefunc...");
    let result = await namefunc();
    console.log(result);
    console.log("Completed.");
}

main()