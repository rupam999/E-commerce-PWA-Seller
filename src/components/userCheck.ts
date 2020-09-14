import { getData } from '../localStorage/getData';

export const userCheck = (history) => {
    const user = getData('user');
    if(!user || !user.name) {
        history.replace('/login', 0)
        return false;
    }
    return true;
}