const menuButton = document.querySelector('.menu-bar');
const items = document.querySelector('.items');

menuButton.addEventListener('click', function () {
    items.classList.toggle('active');
});
