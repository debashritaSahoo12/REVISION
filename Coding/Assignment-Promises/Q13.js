let products = [
  { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
  { id: 2, name: "Shoes", price: 2000, category: "Fashion" },
  { id: 3, name: "Phone", price: 40000, category: "Electronics" },
];

const [first,second]=products;

console.log("Destructured Array:");
console.log(first);
console.log(second);

function addProduct(name, price, category) {
    const newProduct = { id: products.length + 1, name, price, category };
    products=[...products, newProduct];
    return newProduct;
}

function getProductsByCategory(...categories) {
 return products.filter(product => categories.includes(product.category));
}

function productSummary(productList){
    productList.forEach(product => {
        console.log(`Product: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
    });
}

addProduct("Watch", 5000, "Accessories");
const filterProducts = getProductsByCategory("Electronics", "fashions");
productSummary(products);
productSummary(filterProducts)

// Output:
// Destructured Array:
// { id: 1, name: 'Laptop', price: 60000, category: 'Electronics' }
// { id: 2, name: 'Shoes', price: 2000, category: 'Fashion' }
// Product: Laptop, Price: 60000, Category: Electronics
// Product: Shoes, Price: 2000, Category: Fashion
// Product: Phone, Price: 40000, Category: Electronics
// Product: Watch, Price: 5000, Category: Accessories
// Product: Laptop, Price: 60000, Category: Electronics
// Product: Phone, Price: 40000, Category: Electronics

