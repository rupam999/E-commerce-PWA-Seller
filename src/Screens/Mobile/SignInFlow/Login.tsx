import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { MobileOutlined, LockOutlined } from '@ant-design/icons';
import Colors from '../../../utils/Colors';
import { HeaderWithTitleOnly } from '../Header';
import './css/SignInFlowStyle.css';

export const Login = () => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = values => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <HeaderWithTitleOnly title="E-commerce Seller" curve={true} />
            <div className="extraHeader" style={{backgroundColor: Colors.darkBlue()}}></div>
            <div className="mainContent" style={{backgroundColor: Colors.white()}}>
                <div className="loginHeading">
                    <h3>Login to get started</h3>
                    <p>Experience the new E-commerce</p>
                </div>
                <div>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{  }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        >
                        <Form.Item
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please enter your Phone Number!' }]}
                            >
                            <Input 
                                type='number'
                                size="large" 
                                placeholder="&nbsp;Phone Number" 
                                prefix={<MobileOutlined />} 
                                style={{width: '100%', borderRadius: 3}} 
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please enter your Password!' }]}
                            style={{marginTop: 5}}
                            >
                            <Input.Password
                                size="large" 
                                placeholder="&nbsp;Password" 
                                prefix={<LockOutlined />} 
                                style={{width: '100%', borderRadius: 3}} 
                            />
                        </Form.Item>

                        <Form.Item>
                            {true ?
                                <Button 
                                    type="primary"
                                    htmlType="submit" 
                                    className="submitBtn" 
                                    style={{backgroundColor: '#ff5800'}}
                                    >
                                    Login
                                </Button>
                            :
                                <Button 
                                    type="primary" 
                                    htmlType="submit" 
                                    className="submitBtn"
                                    style={{backgroundColor: '#c2c2c2'}}
                                    >
                                    Login
                                </Button>
                            }
                        </Form.Item>
                    </Form>
                    {/* <div>
                        <p className="switchPageHeading">New to here ? Click on Register</p>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="submitBtn"
                            style={{backgroundColor: '#ff5800'}}
                            >
                            Register
                        </Button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}