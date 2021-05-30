import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Button, message, Modal, Select} from 'antd';
import { addNewProduct } from '../../../api/addNewProduct';
import { handleUploadImage } from '../../../api/handleUploadImage';
import { getData } from '../../../localStorage/getData';
import Loading from '../components/Loading';
import './css/DesktopAddElectronicsStyle.css';

const { Option } = Select;

export const DesktopAddElectronics = () => {
    const [user, setUser] = useState<any>();
    const [uploadedImageURL, setUploadedImageURL] = useState<any>('');
    const [subCategory, setSubCategory] = useState<String>('');
    const [formLoading, setFormLoading] = useState<any>('');
    const [loadingTitle, setLoadingTitle] = useState('');

    const getUserData = async () => {
        const userInfo = await getData('user');
        setUser(userInfo);
    }

    useEffect(() => {
        setLoadingTitle('Loading...');
        setFormLoading(true);
        getUserData();
        setFormLoading(false);
    }, []);

    const uploadImage = async (image) => {
        setLoadingTitle('Uploading Image...');
        setFormLoading(true);
        const imageURL = await handleUploadImage(image);

        console.log(imageURL);
        setUploadedImageURL(imageURL);
        setFormLoading(false);

        if(imageURL) {
            message.success(`${image.name} uploaded successfully`);
        } else {
            Modal.error({
                title: 'Server Error',
                content: `Some error occurred while uploading the image '${image.name}'. 
                Please try after sometime`
            });
        }
    }

    const onFinishAddElectronics = async (values: any) => {
        values.url = uploadedImageURL;
        values.category = 'electronic';
        values.subCategory = subCategory;
        values.user = user.id;

        if(!values.subCategory) {
            Modal.warning({
                title: 'Warning',
                content: 'You need to fill a sub-category'
            });
            return;
        }

        if(values.url && values.subCategory) {
            setLoadingTitle('Adding Product...');
            setFormLoading(true);
            const productResponse = await addNewProduct(values);
            setFormLoading(false);
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
        Modal.error({
            title: 'Error',
            content: 'Internal Server Error, Please try again after sometime...',
        });
    };

    return(
        <div className="desktopAddElectronics">
            <h3>Add An Electronic Item</h3>
            {formLoading ?
            <Loading title={loadingTitle} />
            :
            <Form
                onFinish={onFinishAddElectronics}
                onFinishFailed={onFinishFailedToInsert}
                >
                <Row>
                    <Col span={12}>
                        <div className="leftSideElectronics">
                            {uploadedImageURL ? 
                                <Form.Item>
                                    <Input
                                        disabled={true}
                                        value="Image Uploaded Successfully!"
                                    />
                                </Form.Item>
                            :
                                <Form.Item>
                                    <Input type="file" onChange= {(e)=> {
                                        setFormLoading(true)
                                        uploadImage(e.target.files[0])
                                    }} />
                                </Form.Item>
                            }

                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: 'Please input product name!' }]}
                                >
                                <Input 
                                    placeholder="Product Name"
                                />
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
                                name="size"
                                >
                                <Input 
                                    placeholder="Size of the Product (Not Mandatory)"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Select 
                                    defaultValue={'Select a Sub-Category'}
                                    onChange={(value) => setSubCategory(value.toString())}
                                    >
                                    <Option value='ac'>Air Conditioner</Option>
                                    <Option value='tv'>Television</Option>
                                    <Option value='mobile'>Mobile</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item 
                                name="highlights" 
                                rules={[{ required: true, message: 'Please input product Highlights!' }]}
                                >
                                <Input.TextArea 
                                    rows={5}
                                    placeholder="Product Highlights"
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
                                    type='number'
                                    placeholder="Product MRP"
                                />
                            </Form.Item>

                            <Form.Item
                                name="price"
                                rules={[{ required: true, message: 'Please input selling price!' }]}
                                >
                                <Input 
                                    type='number'
                                    placeholder="Product Selling Price"
                                />
                            </Form.Item>

                            <Form.Item
                                name="countInStock"
                                rules={[{ required: true, message: 'Please input stock!' }]}
                                >
                                <Input 
                                    type='number'
                                    placeholder="Count in Stock"
                                />
                            </Form.Item>

                            <Form.Item
                                name="warranty"
                                >
                                <Input 
                                    placeholder="Warranty of the Product (Not Mandatory)"
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
                                name="specifications" 
                                rules={[{ required: true, message: 'Please input product Specifications!' }]}
                                >
                                <Input.TextArea 
                                    rows={10}
                                    placeholder="Product Specifications"
                                />
                            </Form.Item>

                            <Form.Item 
                                name="manufacturer" 
                                rules={[{ required: true, message: 'Please input product manufacturer!' }]}
                                >
                                <Input.TextArea 
                                    rows={5}
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
            }
        </div>
    );
}