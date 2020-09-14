import { LOGIN } from './Config';
import { postRequest } from './postRequest';
import { storeData } from '../localStorage/storeData';

export const handleLogin = async (values: any) => {
    try{
        const res = await postRequest( LOGIN ,values);
        console.log(res.data)
        if(res.data.error === 1) {
            return 1;
        } else if(res.data.error === 2) {
            return 2;
        }
        storeData("user", res.data);
        return res.data;
    } catch(err) {
        console.log(err)
        return -1;
    }
}