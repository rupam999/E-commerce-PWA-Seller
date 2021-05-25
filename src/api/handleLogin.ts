import { LOGIN } from "./Config";
import { postRequest } from "./postRequest";

export const handleLogin = async (values: any) => {
    try {
        const res = await postRequest(LOGIN, values);
        return res.data;
    } catch (err) {
        console.log('Error at handlelogin', err);
        return -1;
    }
};
