import { LOGIN } from "./Config";
import { postRequest } from "./postRequest";
import { storeData } from "../localStorage/storeData";

export const handleLogin = async (values: any) => {
    try {
        const res = await postRequest(LOGIN, values);
        if (res.data.error === 1) {
            return 1;
        } else if (res.data.type === "Buyer") {
            return 2;
        }
        if (res.data.type === "Seller") {
            storeData("user", res.data);
            return res.data;
        } else {
            return -1;
        }
    } catch (err) {
        console.log(err);
        return -1;
    }
};
