function toggleCartbar() {
    let popUp = document.getElementsByClassName("cartbar-links")[0]
    let body = document.getElementsByClassName("body")
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart == null) {
      console.log("empty cart");
    }
    else{
      if (popUp.classList.contains("active")){
        popUp.classList.toggle("active")
        body.style.overflowY = "scroll"
      }
      else {
        popUp.classList.toggle("active")
        popUp.style.overflowY = "scroll"
        body.style.overflowY = "hidden"
      }
    }
  }
  
  let cartProducts = [];
  cartProducts =  JSON.parse(localStorage.getItem('cart'));
  if (cartProducts == null) {
      console.log("cart is empty");
  }
  else{
      let conatiner = document.querySelector('.cart');
        console.log(cartProducts);
        cartProducts.forEach((products) => {
          conatiner.innerHTML += `
          <div >
              <h2 class="product_name items">${products[2]}</h2>
              <h3 class="product_price items">${products[3]}</h3>
              <button class=""btn onclick="removeFromCart(${products[0]})">Remove from cart</button>
          </div>
          `;
        });
  }
  
    function removeFromCart(id) {
        let newCart = [];
        let leftProducts = cartProducts.filter(product => product[0] != id)
        localStorage.setItem('cart', JSON.stringify(leftProducts))
        window.location.reload()
  }
  
  
  let productsAmount = JSON.parse(localStorage.getItem('cart')).length;
  let totalPrice = JSON.parse(localStorage.getItem('cart')).reduce((total, products) => total + parseInt(products[3]), 0)
  document.querySelector('.amount').innerHTML = `Amount of products: ${productsAmount}`;
  document.querySelector('.total').innerHTML = `Total price: R${totalPrice}`
  