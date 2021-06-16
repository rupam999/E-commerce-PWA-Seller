import axios from 'axios';
export const BASE_URL =
	// "https://flipkart-clone-pwa-backend.herokuapp.com";
	'http://localhost:8000';
export const UPLOAD_BACKEND_URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;

export const LOGIN = '/api/user/login';
export const REGISTER = '/api/user/register';
export const ADD_PRODUCT_DETAILS = '/api/product/add/details';
export const GET_ALL_PRODUCT = '/api/product/find';

export const GET_CATEGORIES = '/api/categories';

export default axios.create({
	baseURL: BASE_URL,
});
