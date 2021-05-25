import React, {useEffect, useState, useContext} from 'react';
import { Row, Col, Form, Input, Button, Modal  } from 'antd';
import { useHistory } from 'react-router-dom';
import { handleLogin } from '../../../api/handleLogin';
import { serverCheck } from '../../../api/serverCheck';
import { storeData } from '../../../localStorage/storeData';
import { Store } from '../../../Context/Store';
import { getData } from '../../../localStorage/getData';
import DesktopCreateAccountForm from './components/DesktopCreateAccountForm';
import IMG from '../../../assets/Desktop3Image.png';
import Loading from '../components/Loading';
import './css/DesktopLoginStyle.css';

export const DesktopLogin = () => {
    const history = useHistory();
    const {user, setUser} = useContext(Store);
    const [createAccountModal, setCreateAccountModal] = useState<Boolean>(false);
    const [loading, setLoading] = useState<Boolean>(false);

    const checkServer = async () => {
        const res = await serverCheck();
        if(res.data.msg === 'sever running') {
            const userInfo = await getData('user');
            if(userInfo && userInfo.id && userInfo.token) {
                setLoading(false);
                history.push('/seller');
            }
            setLoading(false);
        } else {
            setLoading(false);
            Modal.error({
                title: 'Error',
                content: 'Server Down, Please check after sometime',
            });
        }
    }

    useEffect(() => {
        setLoading(true);
        checkServer();
    }, []);

    const showCreateAccountModal = () => {
        setCreateAccountModal(true);
    };

    const onFinishLogin = async (values: any) => {
        setLoading(true);
        const loginResponse = await handleLogin(values);
        if(loginResponse !== -1) {
            setLoading(false);
            if(loginResponse.message === 'Account Not Approved') {
                Modal.info({
                    title: 'Info',
                    content: 'Your account has not been approved by Admin. Please check after sometime.',
                });
            } else if(loginResponse.message === 'Wrong Password') {
                Modal.warning({
                    title: 'Alert',
                    content: 'You have entered the wrong password.',
                });
            } else if(loginResponse.message === 'No User Found') {
                Modal.error({
                    title: 'Error',
                    content: `No user found with email id of ${values.email}`
                });
            } else if(loginResponse.message === 'success') {
                //After Login
                if(loginResponse.id) {
                    await storeData('user', loginResponse);
                    setUser(loginResponse);
                    history.push('/seller');
                } else {
                    Modal.info({
                        title: 'Info',
                        content: 'Internal Server Error, Limited information',
                    });
                }
            } else {
                Modal.error({
                    title: 'Error',
                    content: 'Internal Server Error, Please try again after sometime...',
                });
            }
        } else {
            setLoading(false);
            Modal.error({
                title: 'Error',
                content: 'Internal Server Error, Please try again after sometime...',
            });
        }
    };
    
    const onFinishFailedLogin = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        loading ?
            <Loading />
        :
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
                setLoading={setLoading}
            />
        </div>
    );
}