import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products/`;

// Config for axios requests with token
const getConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Create New Product
const createProduct = async (formData, token) => {
  const config = {
    ...getConfig(token),
    'Content-Type': 'multipart/form-data',
  };

  const response = await axios.post(API_URL, formData, config);
  return response.data;
};

// Get all products
const getProducts = async (token) => {
  const response = await axios.get(API_URL, getConfig(token));
  return response.data;
};

// Delete a Product
const deleteProduct = async (id, token) => {
  const response = await axios.delete(`${API_URL}${id}`, getConfig(token));
  return response.data;
};

// Get a Product
const getProduct = async (id, token) => {
  const response = await axios.get(`${API_URL}${id}`, getConfig(token));
  return response.data;
};

// Update Product
const updateProduct = async (id, formData, token) => {
  const config = {
    ...getConfig(token),
    'Content-Type': 'multipart/form-data',
  };

  const response = await axios.patch(`${API_URL}${id}`, formData, config);
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productService;