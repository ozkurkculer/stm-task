import apiService from "./api.service";

const takeProducts = async () => {
    const data = await apiService.getAllProducts();
    return data.products
}

const takeProductDetail = async (id) => {
    const data = await apiService.getProductDetail(id);
    return data
}


const takeCartTotalCost = () => {

    if (!localStorage.getItem('cart-total-cost')) {
        localStorage.setItem('cart-total-cost', 0)
        return localStorage.getItem('cart-total-cost');
    }

    const data = localStorage.getItem('cart-total-cost');
    return data;
}

const takeCartSize = () => {
    if (!localStorage.getItem('cart-size')) {
        localStorage.setItem('cart-size', 0)
        return localStorage.getItem('cart-size');
    }

    const data = localStorage.getItem('cart-size');
    return data;
}

const takeCartProducts = () => {
    if (!localStorage.getItem('cart-products')) {
        localStorage.setItem('cart-products', JSON.stringify([]))
        return localStorage.getItem('cart-products');
    }
    const data = JSON.parse(localStorage.getItem('cart-products'));
    return data;
}

const addCartProduct = async (productID) => {
    console.log(productID);
    const data = JSON.parse(localStorage.getItem('cart-products'));
    data.push(productID);

    localStorage.setItem('cart-products', JSON.stringify(data));
    
    let size = localStorage.getItem('cart-size');
    localStorage.setItem('cart-size', +size + 1);
    
    let productPrice = await apiService.getProductDetail(productID.id);
    let totalCost = localStorage.getItem('cart-total-cost')
    localStorage.setItem('cart-total-cost', +totalCost + productPrice.price);

    return "success";
}

const productUIService = {
    takeProducts,
    takeProductDetail,
    takeCartTotalCost,
    takeCartSize,
    takeCartProducts,
    addCartProduct
}

export default productUIService