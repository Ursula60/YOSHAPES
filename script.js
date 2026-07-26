document.addEventListener('DOMContentLoaded', () => {
    const openCartBtn = document.getElementById('openCartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const modalOverlay = document.getElementById('modalOverlay');
    const cartCount = document.getElementById('cartCount');
    const drawerCartCount = document.getElementById('drawerCartCount');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotal = document.getElementById('cartTotal');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const toast = document.getElementById('toast');
    const checkoutBtn = document.getElementById('checkoutBtn');

    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
    const paymentForm = document.getElementById('paymentForm');
    const modalTotal = document.getElementById('modalTotal');

    let cart = JSON.parse(localStorage.getItem('YOSHAPES_CART')) || [];

    updateCartUI();

    function toggleCart() {
        if (cartDrawer && modalOverlay) {
            cartDrawer.classList.toggle('open');
            modalOverlay.classList.toggle('active');
        }
    }

    function closeAllModals() {
        if (cartDrawer) cartDrawer.classList.remove('open');
        if (checkoutModal) checkoutModal.classList.remove('active');
        if (modalOverlay) modalOverlay.classList.remove('active');
    }

    if (openCartBtn) openCartBtn.addEventListener('click', toggleCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
    if (modalOverlay) modalOverlay.addEventListener('click', closeAllModals);
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeAllModals);

    addToCartBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            const btn = e.currentTarget;
            const id = btn.dataset.id;
            const name = btn.dataset.name;
            const price = parseFloat(btn.dataset.price);

            const existingProduct = cart.find(item => item.id === id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ id: id, name: name, price: price, quantity: 1 });
            }

            saveCart();
            updateCartUI();
            showToast(name + ' ajouté au panier !');
        });
    });

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    function saveCart() {
        localStorage.setItem('YOSHAPES_CART', JSON.stringify(cart));
    }

    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        if (cartCount) cartCount.textContent = totalItems;
        if (drawerCartCount) drawerCartCount.textContent = totalItems;

        if (!cartItemsContainer) return;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Votre panier est vide.</p>';
            if (cartTotal) cartTotal.textContent = '0 FCFA';
            return;
        }

        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const itemSubtotal = item.price * item.quantity;
            totalPrice += itemSubtotal;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = 
                '<div>' +
                    '<strong>' + item.name + '</strong><br>' +
                    '<small>' + item.price.toLocaleString('fr-FR') + ' FCFA x ' + item.quantity + '</small>' +
                '</div>' +
                '<div>' +
                    '<span style="font-weight:bold;">' + itemSubtotal.toLocaleString('fr-FR') + ' FCFA</span>' +
                '</div>';
            cartItemsContainer.appendChild(itemElement);
        });

        if (cartTotal) cartTotal.textContent = totalPrice.toLocaleString('fr-FR') + ' FCFA';
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Votre panier est vide !');
                return;
            }

            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            if (modalTotal) modalTotal.textContent = totalPrice.toLocaleString('fr-FR') + ' FCFA';

            if (cartDrawer) cartDrawer.classList.remove('open');
            if (checkoutModal) checkoutModal.classList.add('active');
        });
    }

    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('fullName');
            const name = nameInput ? nameInput.value : '';
            
            alert('Merci ' + name + ' ! Votre commande a bien été enregistrée !');

            cart = [];
            saveCart();
            updateCartUI();
            paymentForm.reset();
            closeAllModals();
        });
    }
});
  
