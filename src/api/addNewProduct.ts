import { ADD_PRODUCT } from './Config';
import { postRequest } from './postRequest';

export const addNewProduct = async (values) => {
    try {
        const response = await postRequest(ADD_PRODUCT, values);
        console.log(response.data)
        if(response.data.error === 0) {
            return 1;
        } else {
            return 0;
        }
    } catch {
        return 0;
    }
}