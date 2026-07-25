const categoryNav = document.getElementById("categoryNav");
const sortSelect = document.getElementById("sortSelect");

let currentCategory = "Tous";
let currentSearch = "";
let cart = JSON.parse(localStorage.getItem("cart")) || [];


const categories = ["Tous", ...new Set(products.map(p => p.category))];

categories.forEach(category => {

    const btn = document.createElement("button");

    btn.textContent = category;

    btn.className = "category-btn";

    btn.addEventListener("click", () => {

        currentCategory = category;

        updateProducts();

    });

    categoryNav.appendChild(btn);

});

function updateProducts(){

    let filtered = [...products];

    if(currentCategory !== "Tous"){

        filtered = filtered.filter(p => p.category === currentCategory);

    }

    currentSearch = searchInput.value.toLowerCase();

    if(currentSearch){

        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(currentSearch)
        );

    }

    if(sortSelect.value === "price-asc"){

        filtered.sort((a,b)=>a.price-b.price);

    }

    if(sortSelect.value === "price-desc"){

        filtered.sort((a,b)=>b.price-a.price);

    }

    displayProducts(filtered);

    addCartButtons();

}

sortSelect.addEventListener("change", updateProducts);

searchInput.addEventListener("input", updateProducts);

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const cartEmpty = document.getElementById("cartEmpty");

function addCartButtons(){

    document.querySelectorAll(".btn-add-cart").forEach(btn=>{

        btn.addEventListener("click",()=>{

            const id = Number(btn.dataset.id);

            const product = products.find(p=>p.id===id);

            const existing = cart.find(p=>p.id===id);

            if(existing){

                existing.quantity++;

            }else{

                cart.push({...product, quantity:1});

            }

            saveCart();

            renderCart();

        });

    });

}

function renderCart(){

    cartItems.innerHTML="";

    let total=0;
    let count=0;

    if(cart.length===0){

        cartEmpty.style.display="block";

    }else{

        cartEmpty.style.display="none";

    }

    cart.forEach(item=>{

        total += item.price*item.quantity;

        count += item.quantity;

        cartItems.innerHTML +=`

        <div class="cart-item">

            <h4>${item.name}</h4>

            <p>${item.quantity} × ${item.price.toFixed(2)} FCFA</p>

            <button onclick="removeFromCart(${item.id})">
            Supprimer
            </button>

        </div>

        `;

    });

    cartTotal.textContent = total.toFixed(2)+" FCFA";

    cartCount.textContent = count;

}

function removeFromCart(id){

    cart = cart.filter(item=>item.id!==id);

    saveCart();

    renderCart();

}

function saveCart(){

    localStorage.setItem("cart",JSON.stringify(cart));

}

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

document.getElementById("cartToggle").onclick=()=>{

    cartDrawer.classList.add("open");
    cartOverlay.classList.add("active");

}

document.getElementById("cartClose").onclick=closeCart;
cartOverlay.onclick=closeCart;

function closeCart(){

    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("active");

}

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const simulateOrder = document.getElementById("simulateOrder");

simulateOrder.addEventListener("click", () => {
    if(cart.length === 0){
        alert("votre panier est vide.");
        return;
    }
modalOverlay.classList.add("active")
cart = [];
saveCart();

renderCart();

});

modalClose.addEventListener("click",() =>{
modalOverlay.classList.remove("active")
});


renderCart();
updateProducts();
