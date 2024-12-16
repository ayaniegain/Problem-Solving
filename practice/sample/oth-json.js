let productData = {
  products: [
    { id: 1, name: "Laptop", price: 1200, quantity: 2 },
    { id: 2, name: "Smartphone", price: 800, quantity: 3 },
    { id: 3, name: "Headphones", price: 150, quantity: 4 },
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

// 1
let calculateTotalAmount = (products) => {
  total = products.reduce((curr, all) => all.price * all.quantity + curr, 0);

  productData.cart.totalAmount = total;

  return total;
};
let totalAmount = calculateTotalAmount(productData.products);

// 2
function calculateFinalAmount(amount) {
  let discountPercentage = (100 - this.cart.discount) / 100;

  return amount * discountPercentage;
}
let finalAmount = calculateFinalAmount.call(productData, totalAmount);
// console.log(finalAmount);

// 3
let name = "mouse";
let price = 400;
let quantity = 5;
let id = productData.products.length + 1;

function addNewProduct(name, price, quantity, id) {
  let newProduct = { id, name, price, quantity };

  productData.products.push(newProduct);
}

addNewProduct(name, price, quantity, id);

// console.log(productData)

// 4

function updateProductQuantity(id, quantity) {
  productData.products.find((item) => {
    if (item.id == id) {
      item.quantity = quantity;
    }
  });
}
updateProductQuantity((id = 3), (quantity = 6));

// console.log(productData.products);

// 5

function removeProduct(id, product) {
  let removeItem = product.filter((item) => item.id != id);

  productData.products = removeItem;
}

removeProduct((id = 2), productData.products);
// console.log(productData);

// 6
function sortProduct(val, product) {
  function takeValueforSort(a, b) {
    return a[val] - b[val];
  }

  productData.products = product.sort((a, b) => takeValueforSort(a, b));
}

sortProduct("price", productData.products);

console.log(productData);

// ### JSON Practice Tasks

// 1. **Calculate Total Amount**✅
//    Create a function that calculates the `totalAmount` by summing up the product of `price` and `quantity` for each item in the `products` array.

// 2. **Apply Discount**✅
//    Implement logic to apply a discount if the `totalAmount` exceeds a specific threshold (e.g., $1000). Update the `finalAmount` after applying the discount.

// 3. **Add a New Product**
//    Write a function to add a new product to the `products` array. The function should accept `id`, `name`, `price`, and `quantity` as parameters.

// 4. **Update Product Quantity**
//    Develop a function to update the `quantity` of a product in the `products` array, identified by its `id`.

// 5. **Remove a Product**
//    Create a function to remove a product from the `products` array by its `id`.

// 6. **Sort Products**
//    Add functionality to sort the `products` array either by `price` or `quantity`, depending on a parameter passed to the function.

// 7. **Filter Products**
//    Implement a function to filter products based on a price range or quantity threshold.

// 8. **Find Most Expensive Product**
//    Write a function to find the product with the highest `price` in the `products` array.

// 9. **Calculate Average Price**
//    Add functionality to calculate and return the average price of all products in the cart.

// 10. **Convert to JSON String**
//     Serialize the updated object to a JSON string with proper indentation for readability.

// 11. **Parse JSON String**
//     Parse a JSON string back into an object and verify its structure by logging it.

// 12. **Add User Shipping Address**
//     Extend the `user` object to include a `shippingAddress` field and populate it with a sample address.

// 13. **Check Stock Availability**
//     Add a function to check if a specific product by `id` is in stock (quantity > 0).

// 14. **Create Order Summary**
//     Generate a summary of the order, including the user name, total items, total amount, discount, and final amount.

// 15. **Save Data to Local Storage**
//     Save the serialized JSON string into local storage (if running in a browser environment).

// 16. **Load Data from Local Storage**
//     Write a function to load and parse the JSON data from local storage.

// 17. **Reset Cart**
//     Create a function to reset the cart, clearing all products and resetting the `totalAmount` and `finalAmount` to zero.

// ---

let myObj={

}


const obj={
  name:"xyz",
  job:"mern"
}
for (const [key, value] of Object.entries(obj)) {
  myObj[key] = value;
}

console.log(myObj);