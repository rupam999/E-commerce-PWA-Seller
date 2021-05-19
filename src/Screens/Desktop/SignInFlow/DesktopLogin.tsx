import React, {useState} from 'react';
import { Row, Col, Form, Input, Button, Modal  } from 'antd';
import { BankOutlined, FileTextOutlined, BookOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import './css/DesktopLoginStyle.css';


export const DesktopLogin = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modal, contextHolder] = Modal.useModal();

    const history = useHistory();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
        history.push("/seller");
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    function info() {
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {},
        });
    }
      

    return (
        <div className="desktopLoginScreen">
            <Row>
                <Col span={12}>
                    <div className="loginContent">
                        <h3>Sell to crores of customers on Ecommerce, right from your doorstep!</h3>
                        <div className="loginFaq">
                            <div className="border"></div>
                            <div className="loginFaqContent">
                                <h4>How will this information be used?</h4>
                                <p>Your email address will be the 'Username' to login to your Ecommerce Seller Account.</p>
                                <p>
                                    Please note, the 'Username' and 'Password' used here are only to access your Ecommerce 
                                    Seller Account and can’t be used on Ecommerce shopping destination.
                                </p>
                            </div>
                            <div className="border"></div>
                        </div>
                    </div>
                </Col>
                <Col span={12} className="loginForm">
                    <div>
                        <Form
                            name="basic"
                            initialValues={{  }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        <p>
                            Want to create an account? &nbsp;
                            <span onClick={showModal}>Click Here</span>
                        </p>
                    </div>
                </Col>
            </Row>
            <Modal title="Create New Account" footer={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Button onClick={() => {
                    setIsModalVisible(false)
                    info()
          }}>klklklkl</Button>
            </Modal>
        </div>
    );
}