import apiService from "./api.service";

const takeProducts = async () => {
    const data = await apiService.getAllProducts();
    return data.products
}

const takeProductDetail = async (id) => {
    const data = await apiService.getProductDetail(id);
    return data
}

const productUIService = {
    takeProducts,
    takeProductDetail,
}

export default productUIService