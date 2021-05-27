import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Upload, message, Modal} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {BASE_URL, UPLOAD_IMAGE, UPLOAD_BACKEND_URL} from '../../../api/Config';
import './css/DesktopAddElectronicsStyle.css';
import { addNewProduct } from '../../../api/addNewProduct';

export const DesktopAddElectronics = () => {
    const [uploadedImageURL, setUploadedImageURL] = useState<String>('');

    const props = {
        name: 'productImage',
        action: `${BASE_URL}${UPLOAD_IMAGE}`,
        headers: {
          authorization: 'authorization-file',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                // console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
                //Storing the filename response from the backend to a state
                const fileName = info.file.response.fileName;
                const fullURL = `${UPLOAD_BACKEND_URL}${fileName}`;
                console.log(fullURL);
                setUploadedImageURL(fullURL);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const onFinishAddElectronics = async (values: any) => {
        values.url = uploadedImageURL;
        if(values.url) {
            const productResponse = await addNewProduct(values);
            if(productResponse !== -1) {
                if(productResponse.message === 'success') {
                    setUploadedImageURL('');
                    Modal.success({
                        title: 'Success',
                        content: 'Product added successfully!'
                    });
                } else {
                    Modal.error({
                        title: 'Error',
                        content: 'Internal Server Error, Please try again after sometime...',
                    });
                }
            } else {
                Modal.error({
                    title: 'Error',
                    content: 'Internal Server Error, Please try again after sometime...',
                });
            }
        } else {
            Modal.error({
                title: 'Error',
                content: 'Without product image you are not allowed to add a product'
            });
        }
    };
    
    const onFinishFailedToInsert = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div className="desktopAddElectronics">
            <h3>Add A Electronic Item</h3>
            <Form
                onFinish={onFinishAddElectronics}
                onFinishFailed={onFinishFailedToInsert}
                >
                <Row>
                    <Col span={12}>
                        <div className="leftSideElectronics">
                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: 'Please input product name!' }]}
                                >
                                <Input 
                                    placeholder="Product Name"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Upload 
                                    {...props}
                                    >
                                    <Button 
                                        icon={<UploadOutlined />}
                                        style={{width: '100%'}}
                                        >
                                        Click to Upload Product Image
                                    </Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item
                                name="brand"
                                rules={[{ required: true, message: 'Please input product brand!' }]}
                                >
                                <Input 
                                    placeholder="Brand Name"
                                />
                            </Form.Item>

                            <Form.Item 
                                name="description" 
                                rules={[{ required: true, message: 'Please input product description!' }]}
                                >
                                <Input.TextArea 
                                    rows={10}
                                    placeholder="Product Description"
                                />
                            </Form.Item>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="rightSideElectronics">
                            <Form.Item
                                name="mrp"
                                rules={[{ required: true, message: 'Please input product MRP!' }]}
                                >
                                <Input 
                                    placeholder="Product MRP"
                                />
                            </Form.Item>

                            <Form.Item
                                name="price"
                                rules={[{ required: true, message: 'Please input selling price!' }]}
                                >
                                <Input 
                                    placeholder="Product Selling Price"
                                />
                            </Form.Item>

                            <Form.Item
                                name="origin"
                                rules={[{ required: true, message: 'Please input country of Origin!' }]}
                                >
                                <Input 
                                    placeholder="Country of Origin"
                                />
                            </Form.Item>

                            <Form.Item 
                                name="manufacturer" 
                                rules={[{ required: true, message: 'Please input product manufacturer!' }]}
                                >
                                <Input.TextArea 
                                    rows={10}
                                    placeholder="Product Manufacturer Details"
                                />
                            </Form.Item>
                        </div>
                    </Col>
                </Row>
                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                        style={{width: '100%'}}
                        >
                        Add Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}