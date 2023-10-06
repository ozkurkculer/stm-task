import axios from "axios";

const API_URL = "https://dummyjson.com";
const PRODUCTS_URL = API_URL + "/products";

const getAllProducts = async () => {
  const data = await axios.get(PRODUCTS_URL).then((res) => {
    localStorage.setItem('products', JSON.stringify(res.data.products))
    return res.data;
  });
  return data;
};

const getProductDetail = async (id) => {
  const data = await axios.get(PRODUCTS_URL + "/" + id).then((res) => {
    return res.data
  })
  return data
}

const apiService = {
  getAllProducts,
  getProductDetail,
};

export default apiService;
