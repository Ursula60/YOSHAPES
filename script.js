// =========================
// CATALOGUE DES PRODUITS (images stables)
// =========================
const products = [
  { id: 1, name: 'Basket de sport ultra légère', category: 'Sport', price: 12500, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80' },
  { id: 2, name: 'Sac urban premium', category: 'Accessoires', price: 16500, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80' },
  { id: 3, name: 'Montre luxe élégante', category: 'Accessoires', price: 20000, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80' },
  { id: 4, name: 'Casque audio pro', category: 'Tech', price: 22000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80' },
  { id: 5, name: 'Robe femme élégante', category: 'Vêtements pour femmes', price: 19500, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80' },
  { id: 6, name: 'Chemise homme premium', category: 'Vêtements pour hommes', price: 25000, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80' },
  { id: 7, name: 'Ensemble enfant tendance', category: 'Vêtements pour enfants', price: 10000, image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80' },
  { id: 8, name: 'Canapé moderne cosy', category: 'Meubles', price: 350000, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80' },
  { id: 9, name: 'Boîte de rangement design', category: 'Rangement', price: 42000, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
  { id: 10, name: 'Set de cuisine élégance', category: 'Cuisine', price: 5600, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80' },
  { id: 11, name: 'Lunettes soleil mode', category: 'Accessoires', price: 3900, image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80' },
  { id: 12, name: 'Chaussures sport confort', category: 'Sport', price: 11000, image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80' },
  { id: 13, name: 'Blazer chic minimaliste', category: 'Vêtements pour Femmes', price: 28000, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60' },
    { id: 14, name: 'Pantalon chino élégant', category: 'Vêtements pour Hommes', price: 21000, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=60' },
    { id: 15, name: 'Sac à main en cuir souple', category: 'Accessoires', price: 24500, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60' },
    { id: 16, name: 'Manteau long automnal', category: 'Vêtements pour Femmes', price: 45000, image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60' },
    { id: 17, name: 'Sneakers urbaines tendance', category: 'Chaussures', price: 23000, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60' },
    { id: 18, name: 'Pull en maille douce', category: 'Vêtements pour Femmes', price: 17500, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60' },
    { id: 19, name: 'Chemisette estivale en lin', category: 'Vêtements pour Hommes', price: 16000, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60' },
    { id: 20, name: 'Ceinture en cuir véritable', category: 'Accessoires', price: 9500, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=60' },
    { id: 21, name: 'Mocassins classiques en cuir', category: 'Chaussures', price: 29000, image: 'https://images.unsplash.com/photo-1533867617858-e7d97e0afd8b?w=500&auto=format&fit=crop&q=60' },
    { id: 22, name: 'Veste en jean vintage', category: 'Vêtements pour Hommes', price: 27500, image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=60' },
    { id: 23, name: 'Robe de soirée fluide', category: 'Vêtements pour Femmes', price: 38000, image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop&q=60' },
    { id: 24, name: 'Lunettes de soleil rétro', category: 'Accessoires', price: 12500, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60' },
    { id: 25, name: 'Fauteuil lounge en velours', category: 'Meubles', price: 85000, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60' },
    { id: 26, name: 'Table basse design en bois', category: 'Meubles', price: 45000, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&auto=format&fit=crop&q=60' },
    { id: 27, name: 'Vase sculptural en céramique', category: 'Décoration', price: 14000, image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&auto=format&fit=crop&q=60' },
    { id: 28, name: 'Ensemble de coussins déco lin', category: 'Décoration', price: 12500, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=60' },
    { id: 29, name: 'Ensemble pyjama doux enfant', category: 'Enfants', price: 9000, image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60' },
    { id: 30, name: 'Jouet d\'éveil en bois naturel', category: 'Enfants', price: 11500, image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&auto=format&fit=crop&q=60' },
    { id: 31, name: 'Batterie de cuisine antiadhésive', category: 'Cuisine', price: 38000, image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60' },
    { id: 32, name: 'Set de couteaux de chef professionnels', category: 'Cuisine', price: 22000, image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&auto=format&fit=crop&q=60' },
    { id: 33, name: 'Ensemble tailleur oversize moderne', category: 'Vêtements pour Femmes', price: 42000, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80' },
    { id: 34, name: 'Chemise minimaliste en lin brut', category: 'Vêtements pour Hommes', price: 19500, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80' },
    { id: 35, name: 'Suspension lumineuse design scandinave', category: 'Décoration', price: 31000, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80' },
    { id: 36, name: 'Miroir organique mural asymétrique', category: 'Décoration', price: 39000, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80' },
    { id: 37, name: 'Bougie artisanale parfumée ambrée', category: 'Décoration', price: 8500, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=80' },
    { id: 38, name: 'Service de table minimaliste en grès', category: 'Cuisine', price: 29900, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&auto=format&fit=crop&q=80' },
    { id: 33, name: 'Ensemble tailleur oversize moderne', category: 'Vêtements pour Femmes', price: 42000, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80' },
    { id: 34, name: 'Chemise minimaliste en lin brut', category: 'Vêtements pour Hommes', price: 19500, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80' },
    { id: 35, name: 'Suspension lumineuse design scandinave', category: 'Décoration', price: 31000, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80' },
    { id: 36, name: 'Miroir organique mural asymétrique', category: 'Décoration', price: 39000, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80' },
    { id: 37, name: 'Bougie artisanale parfumée ambrée', category: 'Décoration', price: 8500, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=80' },
    { id: 38, name: 'Service de table minimaliste en grès', category: 'Cuisine', price: 29900, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&auto=format&fit=crop&q=80' }
    
];


const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");


function displayProducts(list){

productGrid.innerHTML="";

resultsCount.textContent =
list.length + " produit(s) trouvé(s)";

if(list.length===0){

noResults.hidden=false;
return;

}

noResults.hidden=true;

list.forEach(product=>{

productGrid.innerHTML +=`

<article class="product-card">

<img
src="${product.image}"
alt="${product.name}"
class="product-image">

<div class="product-info">

<h3 class="product-title">
${product.name}
</h3>

<p class="product-price">
${product.price.toFixed(2)} FCFA
</p>

<button class = "btn-add-cart" data-id ="${product.id}">
Ajouter au panier
</button>

</div>

</article>

`;

});


}

// =========================
// AFFICHAGE AU CHARGEMENT
// =========================

displayProducts(products);


// =========================
// RECHERCHE
// =========================

searchInput.addEventListener("input", function () {

    const keyword = this.value.toLowerCase().trim();

    const filteredProducts = products.filter(product =>

        product.name.toLowerCase().includes(keyword)

    );

    displayProducts(filteredProducts);

});

const categoryNav = document.getElementById("categoryNav");
const sortSelect = document.getElementById("sortSelect");

let currentCategory = "Tous";
let currentSearch = "";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Création des catégories
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