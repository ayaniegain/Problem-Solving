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
