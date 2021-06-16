import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { getAllProduct } from '../../../api/getAllProduct';
import Classes from './css/DesktopEditProductStyle.module.css';
import SingleLineProduct from '../components/SingleLineProduct';
import Loading from '../components/Loading';

export const DesktopEditProductHome = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [allProduct, setAllProduct] = useState([]);

	const getProduct = async (search?) => {
		try {
			const response = await getAllProduct(search);
			if (response !== -1) {
				setAllProduct(response);
				setLoading(false);
			} else {
				setLoading(false);
				Modal.error({
					title: 'Error',
					content: 'Server Issue try again after sometime...',
				});
			}
		} catch (error) {
			console.log('Error @ DesktopEditProductHome', error);
			setLoading(false);
			Modal.error({
				title: 'Error',
				content: 'Internal Server Issue try again after sometime...',
			});
		}
	};

	useEffect(() => {
		setLoading(true);
		getProduct();
	}, []);

	const failedSubmitForm = () => {
		Modal.error({
			title: 'Error',
			content: 'Server Issue try again after sometime...',
		});
	};

	return (
		<div className={Classes.main}>
			<h3>Edit Product</h3>
			<Form
				onFinish={getProduct}
				onFinishFailed={failedSubmitForm}
				className={Classes.form}
			>
				<Form.Item name="search" className={Classes.inputType}>
					<Input required placeholder="Search for an Item" />
				</Form.Item>

				<Button htmlType="submit" type="primary">
					Search
				</Button>
			</Form>
			{loading ? (
				<Loading title="Loading" />
			) : allProduct.length > 0 ? (
				allProduct.map((product) => (
					<SingleLineProduct key={product._id} product={product} />
				))
			) : (
				<div className={Classes.noProductFound}>
					<h3>No Product Found! Try Something else...</h3>
				</div>
			)}
		</div>
	);
};
