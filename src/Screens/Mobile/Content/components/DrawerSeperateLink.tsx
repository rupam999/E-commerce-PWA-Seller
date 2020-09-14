import React from 'react';
import { List } from 'antd-mobile';
import { 
    BugOutlined, HeartOutlined, ShoppingCartOutlined, UserOutlined, AppstoreOutlined, TagOutlined,
    GiftOutlined, PlusOutlined, FontSizeOutlined, LogoutOutlined
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { pathCheck } from '../../../Helpers/Utlities';

const Item = List.Item;

const DrawerSeperateLink = (props) => {
    const {fieldName, callBack} = props;
    const history = useHistory();
    const showIcon = (fieldName: String) => {
        if(fieldName === 'Report Bug') {
            return <BugOutlined />
        } else if(fieldName === 'My Account') {
            return <UserOutlined />;
        } else if(fieldName === 'My Wishlist') {
            return <HeartOutlined />;
        } else if(fieldName === 'My Cart') {
            return <ShoppingCartOutlined />;
        } else if(fieldName === 'All Categories') {
            return <AppstoreOutlined />;
        } else if(fieldName === 'Offer Zone') {
            return <TagOutlined />;
        } else if(fieldName === 'My Orders') {
            return <GiftOutlined />;
        } else if(fieldName === 'New Products') {
            return <PlusOutlined />;
        } else if(fieldName === 'Choose Language') {
            return <FontSizeOutlined />;
        } else if(fieldName === 'Logout') {
            return <LogoutOutlined />;
        }
    }
    return(
        <div className="linkDiv">
            <Item
                thumb={showIcon(fieldName)}
                arrow="empty"
                align="middle"
                onClick={() => {
                    if (pathCheck(history, callBack)) {
                        history.push(callBack);
                    }
                }}
                className="listItem"
                >
                <span className="filedNamePara">{fieldName}</span>
            </Item>
        </div>
    );
}

export default DrawerSeperateLink;