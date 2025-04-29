const axios = require('axios');

const BASE_URL = 'https://fakestoreapi.com/products';

exports.fetchAllProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

exports.fetchProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};
