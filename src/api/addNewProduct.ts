import { ADD_PRODUCT_DETAILS } from "./Config";
import { postRequest } from "./postRequest";

export const addNewProduct = async (values) => {
    try {
        const response = await postRequest(ADD_PRODUCT_DETAILS, values);
        return response.data;
    } catch {
        return -1;
    }
};
