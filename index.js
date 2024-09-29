const productsContainer = document.querySelector('[data-list="ProductsData"]');
const productsHtml = Products.map(({ img, Title, Rate, Price }) => `
  <div data-role="card-container" class="d-flex align-items-center mb-3">
    <div class="me-3" style="margin-inline-end:20px"> 
        <img src="${img}" alt="${Title}" class="img-fluid" style="width: 110px; height: auto;">
    </div>
    <div data-role="Product-details-container">
        <h5>${Title}</h5> 
        <p><span class="stars">${generateStars(Rate)}</span></p>   
        <p><strong>${Price}</strong></p>   
    </div>
</div>

`).join('');

const ReviewsContainer = document.querySelector('[data-list="ReviewsData"]');
const ReviewsHtml = Reviews.map(({ img, Title, Rate, Price, Description }) => `
    <div data-role="product-container" style="display: flex; align-items: center; margin-bottom: 20px;">
        <img src="${img}" alt="${Title}" style="width: 90px; height: 90px; border-radius: 100%; object-fit: fill">
        <div data-role="product-info">
            <div data-role="Product-details-container" style="min-width:250px">
                <h5>${Title}<br></h5>
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
