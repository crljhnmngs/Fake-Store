const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

const cards = document.querySelector('.cards');

async function getProduct() {
    await fetch(PRODUCT_API_URL)
        .then((response) => response.json())
        .then((responseJson) => {
            let data = '';

            for (let products of responseJson) {
                data += `
                <a class="card-link" href="product-info.html?id=${
                    products.id
                }" style="text-decoration: none;">
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
                        $${parseFloat(products.price).toFixed(2)}
                        </h3>
                    </div>
                    <div class="stars-outer">
                        <div class="stars-inner" style="width:${getRating(
                            products.rating.rate
                        )};">
                        </div>
                    </div>
                </div>
            </div>
            </a>`;
            }
            cards.innerHTML = data;
        })
        .catch((err) => {
            console.log(err);
        });
}

getProduct();

function getRating(rating) {
    const starsTotal = 5;
    const starsPercentage = (rating / starsTotal) * 100;
    const starsPercentageRounded = `${Math.round(starsPercentage / 10) * 10}%`;
    return starsPercentageRounded;
}
