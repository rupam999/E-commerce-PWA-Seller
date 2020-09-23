import React from "react";
import { NavBar } from "antd-mobile";
import Colors from "../../../utils/Colors";
import "./css/HomeScreenHeaderStyle.css";

export const HeaderWithTitleOnly = (props) => {
    const { title, curve } = props;

    return (
        <div className="topFixedHeader">
            <NavBar mode="light" style={{ backgroundColor: Colors.darkBlue() }}>
                {curve ? (
                    <span
                        style={{
                            color: Colors.white(),
                            fontWeight: 600,
                            position: "relative",
                            top: 3,
                        }}
                    >
                        {title}
                    </span>
                ) : (
                    <span
                        style={{
                            color: Colors.white(),
                            fontWeight: 600,
                        }}
                    >
                        {title}
                    </span>
                )}
            </NavBar>
        </div>
    );
};
