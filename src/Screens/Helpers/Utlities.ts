import { getData } from "../../localStorage/getData";

export const pathCheck = (history: any, path: string) => {
    if (history.location.pathname !== path) {
        return true;
    }
    return false;
};

export const checkUser = async () => {
    try{
        const userInfo = await getData('user');
        if(userInfo && userInfo.id && userInfo.token) {
            return 1;
        } else {
            return 0;
        }
    } catch(error) {
        console.log('Error at check user', error);
        return -1; 
    }
}