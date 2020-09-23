import axios from "./Config";

export const postRequest = (endPoint, params?) => {
    return axios.post(endPoint, params);
};
