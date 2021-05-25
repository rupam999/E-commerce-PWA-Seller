import React from 'react';
import { Form, Input, Button, Modal  } from 'antd';
import { handleSignUp } from '../../../../api/handleSignUp';
import './css/DesktopCreateAccountFormStyle.css';

const DesktopCreateAccountForm = (props) => {
    const {createAccountModal, setCreateAccountModal, setLoading} = props;

    const onFinish = async (values: any) => {
        setLoading(true);
        values.userType = 'seller';
        const registerResponse = await handleSignUp(values);
        setCreateAccountModal(!createAccountModal);
        setLoading(false);
        
        if(registerResponse === -1) {
            Modal.error({
                title: 'Error',
                content: 'Internal Server Error, Please try again after sometime'
            });
        } else if(registerResponse.message === 'User Exists') {
            Modal.warning({
                title: 'Alert',
                content: `A Account exists with the mail id of ${values.email}`
            });
        } else if(registerResponse.message === 'Account Not Approved') {
            Modal.info({
                title: 'Alert',
                content: 'Your account has not been approved by Admin. Please check after sometime.'
            });
        } else if(registerResponse.message === 'success') {
            Modal.info({
                title: 'Message',
                content: (
                  <div className="desktopAccountCreationMessage">
                    <p>Your details has been submitted successfully!</p>
                    <p>Your account will be activated after 24Hrs.</p>
                  </div>
                ),
                onOk() {},
            });
        } else {
            Modal.error({
                title: 'Error',
                content: 'Internal Server Error, Please try again after sometime...',
            });
        }
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <Modal title="Create New Account" 
            className="desktopCreateAccount"
            footer={false} 
            visible={createAccountModal}
            onCancel={() => setCreateAccountModal(false)}
            >
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >

                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input 
                        placeholder="Full Name" 
                    />
                </Form.Item>

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
                        style={{width: '100%'}}
                        >
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </Modal>
    );
}

export default DesktopCreateAccountForm;