//fetching product catagory
const getProductCatagories = async (id) => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const value = await res.json();
    catagoryArray(value);
}
//fetching all products 
const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    productArray(data);
}
const productArray = (data) =>{
    const productContainer = document.getElementById('item-container');
    productContainer.textContent = '';
    data.forEach(element => {
        const productDiv = document.createElement('div');
        productDiv.classList = `card bg-base-100 shadow-xl`;
        productDiv.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${element.image}" class="rounded-xl h-52 object-contain" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="font-medium">${element.title}</h2>
                <h3 class="font-semibold">$<span>${element.price}</span></h3>
                <div class="flex items-center justify-between w-full">
                    <span><i class="fa-sharp fa-light fa-star"></i><span>${element.rating.rate}</span></span>
                    <button class="btn btn-ghost text-xl"><i class="fa-sharp fa-light fa-cart-plus"></i></button>
                </div>
            </div>
        `;
        productContainer.appendChild(productDiv);
    });
}

const catagoryArray = (catagory) => {
    const navContainer1 = document.getElementById('catagory-nav1');
    const navContainer2 = document.getElementById('catagory-nav2');
    catagory.forEach(element => {
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        // Manually escape single quotes in the element string
        const escapedElement = element.replace(/'/g, "\\'");
        li1.innerHTML = `<a onclick="loadProduct('${escapedElement}')" class="capitalize">${element}</a>`;
        li2.innerHTML = `<a onclick="loadProduct('${escapedElement}')" class="capitalize">${element}</a>`;
        navContainer1.appendChild(li1);
        navContainer2.appendChild(li2);
    });


}
const loadProduct = async (productName) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${productName}`);
    const data = await response.json();
    const productContainer = document.getElementById('item-container');
    productContainer.textContent = '';
    data.forEach(element => {
        const productDiv = document.createElement('div');
        productDiv.classList = `card bg-base-100 shadow-xl`;
        productDiv.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${element.image}" class="rounded-xl h-52 object-contain" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="font-medium">${element.title}</h2>
                <h3 class="font-semibold">$<span>${element.price}</span></h3>
                <div class="flex items-center justify-between w-full">
                    <span><i class="fa-sharp fa-light fa-star"></i><span>${element.rating.rate}</span></span>
                    <button class="btn btn-ghost text-xl"><i class="fa-sharp fa-light fa-cart-plus"></i></button>
                </div>
            </div>
        `;
        productContainer.appendChild(productDiv);
    });

}
getProductCatagories();
