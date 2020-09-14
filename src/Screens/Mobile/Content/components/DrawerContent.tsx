import React from 'react';
import { List } from 'antd-mobile';
import DrawerTopSection from './DrawerTopSection';
import DrawerSeperateLink from './DrawerSeperateLink';
import './css/DrawerMainMenuStyle.css';

const DrawerContent = () => {
    return(
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
                    <DrawerSeperateLink fieldName="My Cart" callBack="/user/cart" />
                    <DrawerSeperateLink fieldName="My Wishlist" />
                    <DrawerSeperateLink fieldName="My Account" />
                    <DrawerSeperateLink fieldName="Choose Language" />
                </List>
                <List>
                    <DrawerSeperateLink fieldName="Report Bug" />
                    <DrawerSeperateLink fieldName="Logout" />
                </List>
            </div>
        </React.Fragment>
    );
}

export default DrawerContent;