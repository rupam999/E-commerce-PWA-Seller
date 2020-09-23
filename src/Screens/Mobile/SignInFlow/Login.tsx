import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { MobileOutlined, LockOutlined } from "@ant-design/icons";
import { handleLogin } from "../../../api/handleLogin";
import { Store } from "../../../Context/Store";
import { getData } from "../../../localStorage/getData";
import { HeaderWithTitleOnly } from "../Header";
import Loader from "../../../components/mobileLoader";
import Colors from "../../../utils/Colors";
import "./css/SignInFlowStyle.css";

export const Login = () => {
    const [loader, setLoader] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { setUser } = useContext(Store);
    const history = useHistory();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = async (values) => {
        setLoader(true);
        const res = await handleLogin(values);
        setLoader(false);
        if (res === 1) {
            setError("Wrong Phone Number or Password!");
        } else if (res === -1) {
            setError("Internal Server Error!");
        } else if (res === 2) {
            setError("Wrong User Type");
        } else {
            setUser(res);
            history.push("/seller");
        }
    };

    const onFinishFailed = (errorInfo) => {
        setError("Internal Server Error!");
        console.log("Failed:", errorInfo);
    };

    useEffect(() => {
        const user = getData("user");
        if (user && user.uid) {
            history.push("/seller");
        } else {
            setLoading(false);
        }
    });

    return (
        <React.Fragment>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <HeaderWithTitleOnly
                        title="E-commerce Seller"
                        curve={true}
                    />
                    <div
                        className="extraHeader"
                        style={{ backgroundColor: Colors.darkBlue() }}
                    ></div>
                    <div
                        className="mainContent"
                        style={{ backgroundColor: Colors.white() }}
                    >
                        {loader ? (
                            <Loader />
                        ) : (
                            <React.Fragment>
                                <div className="loginHeading">
                                    <h3>Login to get started</h3>
                                    <p>Experience the new E-commerce</p>
                                    {error !== "" ? (
                                        <p
                                            style={{
                                                textAlign: "center",
                                                color: "#ff5800",
                                            }}
                                        >
                                            {error}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="loginForm">
                                    <Form
                                        {...layout}
                                        name="basic"
                                        initialValues={{}}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                    >
                                        <Form.Item
                                            name="phone"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter your Phone Number!",
                                                },
                                            ]}
                                        >
                                            <Input
                                                type="number"
                                                size="large"
                                                placeholder="&nbsp;Phone Number"
                                                prefix={<MobileOutlined />}
                                                style={{
                                                    width: "100%",
                                                    borderRadius: 3,
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter your Password!",
                                                },
                                            ]}
                                            style={{ marginTop: 5 }}
                                        >
                                            <Input.Password
                                                size="large"
                                                placeholder="&nbsp;Password"
                                                prefix={<LockOutlined />}
                                                style={{
                                                    width: "100%",
                                                    borderRadius: 3,
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            {true ? (
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    className="submitBtn"
                                                    style={{
                                                        backgroundColor: Colors.buttonRed(),
                                                    }}
                                                >
                                                    Login
                                                </Button>
                                            ) : (
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    className="submitBtn"
                                                    style={{
                                                        backgroundColor:
                                                            "#c2c2c2",
                                                    }}
                                                >
                                                    Login
                                                </Button>
                                            )}
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
                            </React.Fragment>
                        )}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};
