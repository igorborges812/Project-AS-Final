import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getProducts = () => api.get('/products');
export const getProductById = (id) => api.get(`/products/${id}`);
export const addProduct = (product) => api.post('/products', product);
export const updateProduct = (id, product) => api.put(`/products/${id}`, product);
export const editProduct = (id, product) => api.put(`/products/edit/${id}`, product); 
export const deleteProduct = (id) => api.delete(`/products/${id}`);

export default api;
