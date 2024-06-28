document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    const tiles = document.querySelectorAll('.menu-item');

    tiles.forEach(tile => {
        tile.addEventListener('click', function(event) {
            const button = event.target.closest('.add-to-cart-button');
            if (button) {
                const productId = button.getAttribute('data-product-id');
                const modal = document.getElementById(`${productId}-modal`);
                if (modal) {
                    modal.style.display = 'block';
                }
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
