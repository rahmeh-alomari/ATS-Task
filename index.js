const productsContainer = document.querySelector('[data-list="ProductsData"]');
const productsHtml = Products.map(({ img, Title, Rate, Price }) => `
    <div data-role="card-container">
        <img src="${img}" alt="${Title}" style="width: 100px; height: auto; padding-inline-end: 20px">
        <div data-role="Product-details-container">
            <h3>${Title}<br></h3> 
            <p><span class="stars">${generateStars(Rate)}</span><br></p>   
            <p><strong>${Price}</strong></p>   
        </div>
    </div>
`).join('');

const ReviewsContainer = document.querySelector('[data-list="ReviewsData"]');
const ReviewsHtml = Reviews.map(({ img, Title, Rate, Price, Description }) => `
    <div data-role="product-container" style="display: flex; align-items: center; margin-bottom: 20px;">
        <img src="${img}" alt="${Title}" style="width: 70px; height: 70px; border-radius: 100%; object-fit: fill">
        <div data-role="product-info">
            <div data-role="Product-details-container">
                <h3>${Title}<br></h3>
                <p><span class="stars">${generateStars(Rate)}</span><br></p>   
                <p><strong>${Price}</strong></p>   
            </div>
        </div>
        <div class="product-description">
            <p data-role="Product-description" data-Review="Review-description">Description for ${Description}. Here you can provide more information about the product.</p>
        </div>
    </div>
`).join('');

const rating = 7;
const starsHTML = generateStars(rating);
document.querySelector('[data-item="stars-container"]').innerHTML = starsHTML;
productsContainer.innerHTML = productsHtml;
ReviewsContainer.innerHTML = ReviewsHtml;
