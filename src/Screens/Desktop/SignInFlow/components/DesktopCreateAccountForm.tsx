import React from 'react';
import { Form, Input, Button, Modal  } from 'antd';
import './css/DesktopCreateAccountFormStyle.css';

const DesktopCreateAccountForm = (props) => {
    const {createAccountModal, setCreateAccountModal} = props;

    const showInformation = () => {
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
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
        setCreateAccountModal(!createAccountModal);
        showInformation();
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