import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Classes from './css/SingleLineProductStyle.module.css';

const SingleLineProduct = (props) => {
	const { product } = props;
	const [modalVisibility, setEditModalVisibility] = useState<boolean>(false);

	const confirmModal = (deleteInfo) => {
		Modal.confirm({
			title: 'Are You Sure Want to Delete ?',
			onOk() {
				console.log('Item Deleted');
			},
		});
	};

	const editModal = () => setEditModalVisibility(true);

	return (
		<div className={Classes.main}>
			<div className={Classes.product}>
				<div className={Classes.image}>
					<img alt={product.name} src={product.url} />
				</div>
				<div className={Classes.description}>
					<h3>{product.name}</h3>
					<h4>
						Price: &#8377;<span>{product.price}</span>
						&nbsp; &nbsp; &nbsp; &nbsp; MRP: &#8377;{product.mrp}
					</h4>
				</div>
				<div className={Classes.edit}>
					<Button type="primary" onClick={editModal}>
						<EditOutlined />
					</Button>
				</div>
				<div className={Classes.delete}>
					<Button type="primary" danger onClick={confirmModal}>
						<DeleteOutlined />
					</Button>
				</div>
			</div>
			<Modal
				title="Edit Product"
				footer={false}
				onCancel={() => setEditModalVisibility(false)}
				visible={modalVisibility}
				width={'80%'}
			>
				<p>hjhkh</p>
			</Modal>
		</div>
	);
};

export default SingleLineProduct;
