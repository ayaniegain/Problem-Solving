let productData = {
  products: [
    { id: 1, name: "Laptop", price: 1200, quantity: 2 },
    { id: 2, name: "Smartphone", price: 800, quantity: 3 },
    { id: 3, name: "Headphones", price: 1150, quantity: 4 },
  ],
  user: {
    id: 101,
    name: "John Doe",
    email: "john.doe@example.com",
  },
  cart: {
    totalAmount: 0,
    discount: 10,
    finalAmount: 0,
  },
};

// 1. Calculate Total Amount ✅

// let totalPrice = productData.products.reduce((acc, curr) => {
//   return acc + curr.price;
// }, 0);

//afterDiscountprice(totalPrice);
// console.log(totalPrice);

//2. Apply Discount ✅

// function afterDiscountprice(total) {
//   let discoundPrice = total - total * (productData.cart["discount"] / 100);
//   // console.log(discoundPrice);
// }
// // 3. Add a New Product ✅

// function addnewProduct(newProd) {
//   productData.products.push(newProd);
// }

// let newProd = { id: 4, name: "board", price: 1600, quantity: 4 };
// addnewProduct(newProd);

// console.log(productData);

// 4. Update Product Quantity ✅

// function updateProductQuantity(id, quantity) {
//   productData.products.find((e) => {
//     if (e.id == id) {
//       productData.products[id] = { ...productData.products[id], quantity };
//     }
//   });
// }
// updateProductQuantity((id = 2), (quantity = 39));

// console.log(productData);

// function updateProductQuantity(id, newQuantity) {
//   let product = productData.products.find(product => product.id === id);
//   if (product) {
//     product.quantity = newQuantity;
//   } else {
//     // console.log(`Product with id ${id} not found.`);
//   }
// }

// // Example usage:
// updateProductQuantity(2, 58);
// console.log(productData.products);

// 5. Remove a Product ✅

// function removeProduct(id) {

//   let res=productData.products.filter((e)=>e.id!==id)
//   productData.products=res
//   // console.log(res)

// }

// removeProduct(id=2)

// console.log(productData.products)
// 6. Sort Products✅

// let sortByPrice=productData.products.sort((a,b)=>a.price-b.price)

// console.log(sortByPrice)

// 7. Filter Products✅ //filter product 1000>price and quantity>2

// let filteredItem= productData.products.filter((item)=>{

//   if (item.price>1000 && item.quantity>2) {
//     return item
//   }

// })

// console.log(filteredItem)
// 8. Find Most Expensive Product ☑️

// let mostExpensiveProduct = productData.products.reduce((prev, curr) => {

//   console.log(prev)
//   return (prev.price > curr.price) ? prev : curr;
// }, {});

// console.log(mostExpensiveProduct);

// 9. Calculate Average Price✅

// let sum=productData.products.reduce((prev,curr)=>{
// return prev+curr.price/productData.products.length
// },0)

// console.log(sum)

// 10. 11 Convert to JSON String/parse ✅

// let strData=JSON.stringify(productData.products)
// let pasrseData=JSON.parse(strData)

// console.log(pasrseData)

// 12. Add User Shipping Address✅

// productData.user.address="kolkata"

// console.log(productData)

// 13. Check Stock Availability✅

// productData.checkStockAvalaibllity = function (id) {
//   let product = productData.products.find((prod) => prod.id == id);

//   if (product && product.quantity > 0) {
//     console.log(`stock is available`);
//   } else {
//     console.log(`stock is not available`);
//   }
// };

// productData.checkStockAvalaibllity((id = 2));

// console.log(productData);


// 14. Create Order Summary ✅


// let personName= productData.user.name;
// let totalItemsinCart= productData.products.length
// let amount= productData.products.reduce((prev,curr)=>prev+curr.price,0)
// let discount= productData.cart.discount
// let amountToPay= amount- (amount*(discount/100))


// console.log(`---SUMMERY OF AN ORDER----
//   Name: ${personName};
//   No of Items: ${totalItemsinCart};
//   Amount: ${amount};
//   Discount Apply : ${discount}%;
//   Amount to Pay: ${amountToPay}.
//             `)    

// 15. Save Data to Local Storage


// // 1
// let calculateTotalAmount = (products) => {
//   total = products.reduce((curr, all) => all.price * all.quantity + curr, 0);

//   productData.cart.totalAmount = total;

//   return total;
// };
// let totalAmount = calculateTotalAmount(productData.products);

// // 2
// function calculateFinalAmount(amount) {
//   let discountPercentage = (100 - this.cart.discount) / 100;

//   return amount * discountPercentage;
// }
// let finalAmount = calculateFinalAmount.call(productData, totalAmount);
// // console.log(finalAmount);

// // 3
// let name = "mouse";
// let price = 400;
// let quantity = 5;
// let id = productData.products.length + 1;

// function addNewProduct(name, price, quantity, id) {
//   let newProduct = { id, name, price, quantity };

//   productData.products.push(newProduct);
// }

// addNewProduct(name, price, quantity, id);

// // console.log(productData)

// // 4

// function updateProductQuantity(id, quantity) {
//   productData.products.find((item) => {
//     if (item.id == id) {
//       item.quantity = quantity;
//     }
//   });
// }
// updateProductQuantity((id = 3), (quantity = 6));

// // console.log(productData.products);

// // 5

// function removeProduct(id, product) {
//   let removeItem = product.filter((item) => item.id != id);

//   productData.products = removeItem;
// }

// removeProduct((id = 2), productData.products);
// // console.log(productData);

// // 6
// function sortProduct(val, product) {
//   function takeValueforSort(a, b) {
//     return a[val] - b[val];
//   }

//   productData.products = product.sort((a, b) => takeValueforSort(a, b));
// }

// sortProduct("price", productData.products);

// console.log(productData);
