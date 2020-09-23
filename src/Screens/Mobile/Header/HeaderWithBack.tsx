import React from "react";
import { NavBar, Icon } from "antd-mobile";
import { useHistory } from "react-router-dom";
import Colors from "../../../utils/Colors";
import "./css/HomeScreenHeaderStyle.css";

export const HeaderWithBack = (props) => {
    const { name, icon } = props;
    const history = useHistory();
    const onOpenChange = () => {
        history.goBack();
    };

    return (
        <div className="topFixedHeader">
            <NavBar
                mode="light"
                style={{ backgroundColor: Colors.darkBlue() }}
                icon={
                    <Icon
                        type={icon}
                        className="homeScreenIconStyle"
                        style={{ color: Colors.headerIconColor() }}
                    />
                }
                onLeftClick={onOpenChange}
            >
                <span style={{ color: Colors.white(), fontWeight: 600 }}>
                    {name}
                </span>
            </NavBar>
        </div>
    );
};
