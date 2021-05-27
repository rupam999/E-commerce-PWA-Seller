import axios from "axios";
export const BASE_URL =
    // "https://flipkart-clone-pwa-backend.herokuapp.com";
"http://localhost:8000";
export const LOGIN = "/api/user/login";
export const REGISTER = '/api/user/register';
export const UPLOAD_IMAGE = '/api/product/add/image';
export const UPLOAD_BACKEND_URL = 'http://localhost:8000/uploads/';
export const ADD_PRODUCT_DETAILS = '/api/product/add/details';



export const GET_CATEGORIES = "/api/categories";

export default axios.create({
    baseURL: BASE_URL,
});
