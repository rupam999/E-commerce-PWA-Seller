import { postRequest } from './postRequest';
import { REGISTER } from './Config';

export const handleSignUp = async (values) => {
    try {
        const res = await postRequest(REGISTER, values);
        return res.data;
    } catch (error) {
        console.log('ERROR at handleSignUp', error);
        return -1;
    }
}