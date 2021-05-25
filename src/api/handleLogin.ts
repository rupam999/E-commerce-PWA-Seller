import { LOGIN } from "./Config";
import { postRequest } from "./postRequest";

export const handleLogin = async (values: any) => {
    try {
        const res = await postRequest(LOGIN, values);
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
        return -1;
    }
};
