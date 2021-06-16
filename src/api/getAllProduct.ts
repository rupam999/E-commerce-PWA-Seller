import { getRequest } from './getRequest';
import { GET_ALL_PRODUCT } from './Config';

export const getAllProduct = async (value?) => {
	try {
		const response = await getRequest(GET_ALL_PRODUCT, value);
		if (response.data.message === 'success') {
			return response.data.product;
		} else {
			return -1;
		}
	} catch (error) {
		console.log(error);
		return -1;
	}
};
