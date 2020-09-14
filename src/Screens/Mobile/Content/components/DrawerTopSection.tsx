import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { getData } from '../../../../localStorage/getData';
import Colors from '../../../../utils/Colors';
import './css/DrawerTopSectionStyle.css';

const DrawerTopSection = (props) => {
    const user = getData('user');
    return(
        <div 
            className="DrawerUserInfo"
            style={{backgroundColor: Colors.darkBlue()}}
            >
            <p className="topMainDetailsPara">
                <span><UserOutlined className="topMainDetailsIcon" /></span>
                <span>{user.name}</span>
            </p>
        </div>
    );
}

export default DrawerTopSection;