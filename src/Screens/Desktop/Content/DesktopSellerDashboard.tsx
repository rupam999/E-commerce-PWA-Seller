import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import './css/DesktopSellerDashboardStyle.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const DesktopSellerDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const history = useHistory();

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
      };

    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<PlusCircleOutlined />} title="Add New Item">
                <Menu.Item 
                    key="3"
                    onClick={() => history.push("/add/electronics")}
                    >
                    Electronics
                </Menu.Item>
                <Menu.Item 
                    key="4"
                    >
                    Fashion
                </Menu.Item>
                <Menu.Item 
                    key="5"
                    >
                    Grocery
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<UserOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>ghgjh</Footer>
        </Layout>
      </Layout>
    );
}