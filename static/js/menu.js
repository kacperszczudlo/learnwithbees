document.addEventListener("DOMContentLoaded", function() {
    function addToCart(productId, button) {
        if (button.classList.contains('added')) {
            removeFromCart(productId, button);
            button.classList.remove('added');
            button.textContent = 'Dodaj do koszyka';
        } else {
            let cartCount = parseInt(sessionStorage.getItem('cartCount')) || 0;
            cartCount++;
            sessionStorage.setItem('cartCount', cartCount);
            sessionStorage.setItem(`product_${productId}_added`, 'true');

            button.classList.add('added');
            button.textContent = 'Produkt dodany!';
        }

        updateCartCount();
    }

    function removeFromCart(productId, button) {
        let cartCount = parseInt(sessionStorage.getItem('cartCount')) || 0;

        if (cartCount > 0) {
            cartCount--;
            sessionStorage.setItem('cartCount', cartCount);
            sessionStorage.removeItem(`product_${productId}_added`);
        }

        updateCartCount();
    }

    function updateCartCount() {
        let cartCount = parseInt(sessionStorage.getItem('cartCount')) || 0;
        document.getElementById('cart-count').innerText = cartCount;
    }

    updateCartCount();

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        const productId = button.getAttribute('data-product-id');
        
        button.addEventListener('click', function() {
            addToCart(productId, button);
        });

        if (sessionStorage.getItem(`product_${productId}_added`)) {
            button.classList.add('added');
            button.textContent = 'Produkt dodany!';
        }
    });

    document.querySelectorAll('nav.section-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
