import { getRequest } from './getRequest';

export const serverCheck = async () => {
    return await getRequest("/");
}