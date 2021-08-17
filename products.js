fetch("http://127.0.0.1:5000/get-products/")
  .then((response) => response.json())
  .then((json) => {
    console.log(json.data);
    json.data.forEach((item) => {
      console.log(item);
      console.log(item[1]);
    });
    renderproducts(json.data);
  });

function renderproducts(products) {
  let productContainer = document.querySelector("#container");
  productContainer.innerHTML = "";

  products.forEach((products) => {
    productContainer.innerHTML += `
    
      <div class="products">
        <h3 class="product-name items">${products[1]}</h3>
        <h3 class="product-price items">${products[2]}</h3>
        <h3 class="product-amount items">${products[3]}</h3>
        <div class="btn">
        <button class="add-btn">Add to cart</button>
        </div>



    `;
  });
}
