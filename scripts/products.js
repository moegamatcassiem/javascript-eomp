let localProducts = []

fetch("https://flaskeomp.herokuapp.com/get-products/")
  .then((response) => response.json())
  .then((json) => {
    localProducts = json.data
    renderproducts(localProducts);
  });

function renderproducts(products) {
  let productContainer = document.querySelector(".container");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    productContainer.innerHTML += `
      <div class="products">
        <h3 class="product-name items">${product[2]}</h3>
        <h4 class="product-price items">${product[3]}</h4>
        <div class="btn">
        <button onclick="addToCart(${product[0]})" class="add-btn">Add to cart</button>
        <button onclick="deleteProducts(${product[0]})" class="delete-btn">Delete</button></div>
      </div>
      
    `;
  });
}

//cart function
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  let fillUpCart = localProducts.find((product) => {
    return product[0] == id;
  });
    cart.push(fillUpCart);
    localStorage.setItem("cart", JSON.stringify(cart));
    let priceTotal = cart.reduce((total, product) => total + parseInt(product[3]), 0)
    console.log(priceTotal);
    alert("Product added successfully");
    window.location.reload()
}

function addProducts() {
  let productId = document.getElementById("productName").value;
  let productName = document.getElementById("productName").value;
  let productPrice = document.getElementById("productPrice").value;
  let productQuantity = document.getElementById("productQuantity").value;
  fetch("https://flaskeomp.herokuapp.com/products-create/", {
    method: "POST",
    body: JSON.stringify({
      product_id: productId,
      product_name: productName,
      product_quantity: productPrice,
      product_price: productQuantity,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.reload();
    });
}

function deleteProducts(product_id) {
  fetch(`https://flaskeomp.herokuapp.com/delete-product/${product_id}`)
    .then((res) => res.json())
    .then(data => {
      window.location.reload();
    });
}

fetch("https://flaskeomp.herokuapp.com/get-products/")
  .then((res) => res.json())
  .then((data) => {
    let filterProducts = data.data;
    let searchBar = document.getElementById("search");
    searchBar.addEventListener("keyup", (a) => {
      const searchText = a.target.value.toLowerCase();
      const filteredProducts = filterProducts.filter((data) => {
        return data[2].toLowerCase().includes(searchText);
      });
      renderproducts(filteredProducts);
    });
  });