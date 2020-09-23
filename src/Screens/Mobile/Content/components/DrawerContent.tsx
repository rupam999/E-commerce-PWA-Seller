import React from "react";
import { useHistory } from "react-router-dom";
import { List, Modal } from "antd-mobile";
import { LogoutOutlined } from "@ant-design/icons";
import { Logout } from "../../SignInFlow";
import DrawerTopSection from "./DrawerTopSection";
import DrawerSeperateLink from "./DrawerSeperateLink";
import "./css/DrawerMainMenuStyle.css";
const Item = List.Item;
const Alert = Modal.alert;

const DrawerContent = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <DrawerTopSection />
            <div className="drawerMainMenu">
                <List>
                    <DrawerSeperateLink fieldName="New Products" />
                    <DrawerSeperateLink fieldName="All Categories" />
                    <DrawerSeperateLink fieldName="Offer Zone" />
                </List>
                <List>
                    <DrawerSeperateLink fieldName="My Orders" />
                    <DrawerSeperateLink
                        fieldName="My Cart"
                        callBack="/user/cart"
                    />
                    <DrawerSeperateLink fieldName="My Wishlist" />
                    <DrawerSeperateLink fieldName="My Account" />
                    <DrawerSeperateLink fieldName="Choose Language" />
                </List>
                <List>
                    <DrawerSeperateLink fieldName="Report Bug" />
                    <div className="linkDiv">
                        <Item
                            thumb={<LogoutOutlined />}
                            arrow="empty"
                            align="middle"
                            onClick={() =>
                                Alert("Logout", "Are you sure?", [
                                    {
                                        text: "Cancel",
                                    },
                                    {
                                        text: "Ok",
                                        onPress: () => Logout(history),
                                    },
                                ])
                            }
                            className="listItem"
                        >
                            <span className="filedNamePara">Logout</span>
                        </Item>
                    </div>
                </List>
            </div>
        </React.Fragment>
    );
};

export default DrawerContent;
