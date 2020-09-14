import axios from 'axios';
export const BASE_URL = 
    // "https://cors-anywhere.herokuapp.com/https://e-commerce-pwa-backend.herokuapp.com/";
    "http://localhost:8000";
export const LOGIN = "/api/user/login";

export default axios.create({
    baseURL: BASE_URL,
})