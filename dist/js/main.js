// fetch('https://fakestoreapi.com/products')
//     .then((res) => res.json())
//     .then((json) => console.log(json));

const menuButton = document.querySelector('.menu-bar');
const items = document.querySelector('.items');

menuButton.addEventListener('click', function () {
    items.classList.toggle('active');
});
