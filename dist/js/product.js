const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

cards = document.querySelector('.cards');
//     .then((res) => res.json())
//     .then((json) => console.log(json));

async function getProduct() {
    await fetch(PRODUCT_API_URL)
        .then((response) => response.json())
        .then((responseJson) => {
            let data = '';

            for (let products of responseJson) {
                data += `
                <div class="card">
                <div class="image">
                    <img
                        src="${products.image}"
                        alt="Product Image"
                    />
                </div>
                <div class="info">
                    <div class="title">
                        <p>
                        ${products.title}
                        </p>
                    </div>
                    <div class="price">
                        <h3>
                        ${products.price}$
                        </h3>
                    </div>
                    <div class="rating">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                    </div>
                </div>
            </div>`;
            }
            cards.innerHTML = data;
        })
        .catch((err) => {
            console.log(err);
        });
}

getProduct();
