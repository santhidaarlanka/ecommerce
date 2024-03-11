document.addEventListener("DOMContentLoaded", function() {
    // Sample products
    const products = [
        { name: "Product 1", price: 19.99, image: "product1.jpg" },
        { name: "Product 2", price: 29.99, image: "product2.jpg" },
        { name: "Product 3", price: 39.99, image: "product3.jpg" },
        { name: "Product 4", price: 49.99, image: "product4.jpg" }
    ];

    const productList = document.getElementById("product-list");

    // Populate products
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = product.name;

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = "$" + product.price.toFixed(2);

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);

        productList.appendChild(productDiv);
    });
});
