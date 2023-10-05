import apiService from "./api.service";

const takeProducts = async () => {
    const data = await apiService.getAllProducts();
    return data.products
}

const productUIService = {
    takeProducts,
}

export default productUIService