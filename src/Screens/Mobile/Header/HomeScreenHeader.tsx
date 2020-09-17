import React from 'react';
import { NavBar } from 'antd-mobile';
import { MenuOutlined, OrderedListOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { pathCheck } from "../../Helpers/Utlities";
import Colors from '../../../utils/Colors';
import './css/HomeScreenHeaderStyle.css';

export const HomeScreenHeader = (props) => {
    const { menu, toggle, pageHeading, topPadding } = props;
    const history = useHistory();
    const onOpenChange = () => {
        toggle(!menu);
    }
    
    return (
        <div className="topFixedHeader">
            <NavBar
                mode="light"
                style={{backgroundColor: Colors.darkBlue()}}
                icon={
                    <MenuOutlined 
                        className="homeScreenIconStyle" 
                        style={{color: Colors.headerIconColor()}} 
                    />}
                onLeftClick={onOpenChange}
                rightContent={[
                    <OrderedListOutlined 
                        key="0" 
                        className="homeScreenIconStyle" 
                        onClick={() => {
                            if (pathCheck(history, "/seller/all-categories")) {
                                history.push("/seller/all-categories");
                            }
                        }}
                        style={{color: Colors.headerIconColor(), fontSize: 20}} 
                    />,
                ]}
                >
                {topPadding ?
                    <span style={{
                        color: Colors.white(), 
                        position: 'relative',
                        top: 3,
                        fontWeight: 600}}
                    >{pageHeading}</span>
                :
                    <span style={{
                        color: Colors.white(), 
                        fontWeight: 600,
                    }}>{pageHeading}</span>
                }
            </NavBar>
            
        </div>
    );
};
