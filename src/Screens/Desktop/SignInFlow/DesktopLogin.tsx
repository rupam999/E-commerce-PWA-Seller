import React, {useState} from 'react';
import { Row, Col, Form, Input, Button, Modal  } from 'antd';
import { useHistory } from 'react-router-dom';
import DesktopCreateAccountForm from './components/DesktopCreateAccountForm';
import IMG from '../../../assets/Desktop3Image.png';
import './css/DesktopLoginStyle.css';

export const DesktopLogin = () => {
    const history = useHistory();
    const [createAccountModal, setCreateAccountModal] = useState(false);

    const showCreateAccountModal = () => {
        setCreateAccountModal(true);
    };

    const onFinishLogin = (values: any) => {
        console.log('Success:', values);
        history.push("/seller");
    };
    
    const onFinishFailedLogin = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="desktopLoginScreen">
            <Row>
                <Col span={12}>
                    <div className="loginContent">
                        <h3>Sell to crores of customers on Ecommerce, right from your doorstep!</h3>
                        <div className="loginFaq">
                            <img src={IMG} style={{marginBottom: 10}} />
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
                        <h3>Login to your Seller Account</h3>
                        <Form
                            onFinish={onFinishLogin}
                            onFinishFailed={onFinishFailedLogin}
                            >
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your E-mail!' }]}
                            >
                                <Input
                                    type="email" 
                                    placeholder="E-mail Id"
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password 
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button 
                                    type="primary" 
                                    htmlType="submit" 
                                    className="desktopLoginBtn"
                                    >
                                    SIGN IN
                                </Button>
                            </Form.Item>
                        </Form>
                        <p className="createAccountQuestion">
                            Want to create an account? &nbsp;
                            <span onClick={showCreateAccountModal}>Click Here</span>
                        </p>
                    </div>
                </Col>
            </Row>
            {/* Create New Account */}
            <DesktopCreateAccountForm 
                createAccountModal={createAccountModal}
                setCreateAccountModal={setCreateAccountModal}
            />
        </div>
    );
}