import React, { useState } from "react";
import { Drawer } from "antd-mobile";
import { HomeScreenHeader } from "../Header";
import WindowDimensions from "../../../components/WindowDimensions";
import DrawerContent from "./components/DrawerContent";
import OrdersIntro from "./components/OrdersIntro";

export const Orders = () => {
    const [menu, toggle] = useState(false);
    const { width } = WindowDimensions();

    const onOpenChange = () => {
        toggle(!menu);
    };

    const sidebar = (
        <div style={{ width: width * 0.75, maxWidth: 290 }}>
            <DrawerContent />
        </div>
    );

    return (
        <div
            style={{
                width: "100%",
                minHeight: "100%",
            }}
        >
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight }}
                enableDragHandle
                sidebar={sidebar}
                open={menu}
                onOpenChange={onOpenChange}
            >
                <HomeScreenHeader
                    menu={menu}
                    toggle={toggle}
                    pageHeading="Orders"
                />
                <div style={{ paddingTop: 45 }}>
                    <OrdersIntro />
                    <OrdersIntro />
                    <OrdersIntro />
                </div>
            </Drawer>
        </div>
    );
};
