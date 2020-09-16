import { GET_CATEGORIES } from './Config';
import { getRequest } from './getRequest';

export const getCategories = async () => {
    try{
        const res = await getRequest(GET_CATEGORIES);
        if(res.data.error === 0){
            return res.data.result;
        } else {
            return 1;
        }
    } catch{
        return 1;
    }
}