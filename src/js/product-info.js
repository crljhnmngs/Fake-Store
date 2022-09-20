const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

const card = document.querySelector('.card');

const urlValues = window.location.search;
const urlParam = new URLSearchParams(urlValues);
const id = urlParam.get('id');
if (id === null || id == '') {
    location.href = 'product.html';
}

async function getProductInfo() {
    await fetch(PRODUCT_API_URL.concat('/').concat(id))
        .then((response) => response.json())
        .then((reponseJson) => {
            let data = '';

            data = `  <div class="image">
            <img src="${reponseJson.image}" alt="" />
        </div>
        <div class="info">
            <div class="title">
                <h1>
                    ${reponseJson.title}
                </h1>
                <div class="back">
                <a href="product.html"
                    ><i class="fa-solid fa-arrow-left"></i
                ></a>
            </div>
            </div>
            <div class="badge">
                <p class="category">
                ${reponseJson.category}
                </p>
            </div>
            <div class="description">
                <p>
                    ${reponseJson.description}
                </p>
            </div>
            <div class="price">
                <div class="productprice">
                    <p>
                    $${parseFloat(reponseJson.price).toFixed(2)}
                    </p>
                </div>
                <div class="rating">
                    <div class="stars-outer">
                        <div class="stars-inner" style="width:${getRating(
                            reponseJson.rating.rate
                        )};"></div>
                    </div>
                    <div class="line"></div>
                    <div class="reviews"><p>
                ${reponseJson.rating.count} Reviews</p>
                    </div>
                </div>
            </div>
            <div class="button">
                <button type="submit">
                    <i class="fa-regular fa-cart-shopping"></i>ADD TO
                    CART
                </button>
            </div>
        </div>`;

            card.innerHTML = data;
        })
        .catch((err) => {
            console.log(err);
        });
}
getProductInfo();

function getRating(rating) {
    const starsTotal = 5;
    const starsPercentage = (rating / starsTotal) * 100;
    const starsPercentageRounded = `${Math.round(starsPercentage / 10) * 10}%`;
    return starsPercentageRounded;
}
