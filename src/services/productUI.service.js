import apiService from "./api.service";

const takeProducts = async () => {
    const data = await apiService.getAllProducts();
    console.log(data);
}

const productUIService = {
    takeProducts,
}

export default productUIService