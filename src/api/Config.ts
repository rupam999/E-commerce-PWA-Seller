import axios from "axios";
export const BASE_URL =
    "https://flipkart-clone-pwa-backend.herokuapp.com";
// "http://localhost:8000";
export const LOGIN = "/api/user/login";
export const REGISTER = '/api/user/register';




export const GET_CATEGORIES = "/api/categories";
export const ADD_PRODUCT = "/api/product/new";

export default axios.create({
    baseURL: BASE_URL,
});
