import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { getAllProduct } from '../../../api/getAllProduct';
import Classes from './css/DesktopEditProductStyle.module.css';
import SingleLineProduct from '../components/SingleLineProduct';

export const DesktopEditProductHome = () => {
	const [allProduct, setAllProduct] = useState([]);
	const getProduct = async () => {
		try {
			const response = await getAllProduct();
			console.log(response);
			if (response !== -1) {
				setAllProduct(response);
			} else {
				Modal.error({
					title: 'Error',
					content: 'Server Issue try again after sometime...',
				});
			}
		} catch (error) {
			console.log('Error @ DesktopEditProductHome', error);
			Modal.error({
				title: 'Error',
				content: 'Internal Server Issue try again after sometime...',
			});
		}
	};

	useEffect(() => {
		getProduct();
	}, []);

	const submitForm = (values) => {
		console.log(values);
	};
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
				onFinish={submitForm}
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
			{allProduct.map((product) => (
				<SingleLineProduct key={product._id} product={product} />
			))}
		</div>
	);
};
