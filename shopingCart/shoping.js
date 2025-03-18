document.addEventListener("DOMContentLoaded", ()=>{
 const products = [  
    {id : 1, name : "Product 1", price : 28.00},
    {id : 2, name : "Product 2", price : 18.70},
    {id : 3, name : "Product 3", price : 48.90}, 
    {id : 4, name : "Product 4", price : 58.90},
 ];
    
 const cart = [];  

 const productList = document.getElementById("product-list"); 
 const cartItems = document.getElementById("cart-items");
 const emptyCartMassage = document.getElementById("empty-cart");
 const cartTotalMassage = document.getElementById("cart-total");
 const totalPriceDisplay = document.getElementById("total-price");
 const checkOutbtn = document.getElementById("checkout-btn");

 products.forEach(product =>{
    const productDiv = document.createElement('div')
    productDiv.classList.add('product')

    productDiv.innerHTML = `
    <span> ${product.name} - $${product.price.toFixed(2)} </span>
    <button data-id="${product.id}">Add to cart </button>`

    productList.appendChild(productDiv)
 });

 productList.addEventListener("click" , (e) =>{
    // used when button click than add
    if(e.target.tagName === "BUTTON"){
      const productId = parseInt(e.target.getAttribute('data-id'));
      const product =  products.find(p => p.id === productId)
      addTocard(product)
      //console.log(product);

      
    }
    
 });
   function addTocard(product) {
    cart.push(product);
    console.log(cart);
    renderCart();
   }

   function renderCart() {
    cartItems.innerText = ""
    let totalPrice = 0;
    if(cart.length > 0){
       emptyCartMassage.classList.add("hidden");
       cartTotalMassage.classList.remove("hidden");

       cart.forEach((item, index) =>{
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} -$${item.price.toFixed(2)}`

        cartItems.appendChild(cartItem);

        totalPriceDisplay.textContent =`${totalPrice.toFixed(2)}`;
       })
       
    }else{

        emptyCartMassage.classList.remove("hidden");
        totalPriceDisplay.textContent =`$0.00`;
    }
   }
   
   checkOutbtn.addEventListener('click', () =>{
    cart.length = 0;
    alert("Chekout succesfull mahfooz...");
    renderCart();
   });
});
