import React, { useContext, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useHistory, Switch, Route } from 'react-router-dom';
import { Store } from '../../../Context/Store';
import { DekstopDashboard, DesktopAddElectronics } from './';
import './css/DesktopSellerDashboardStyle.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const DesktopSellerHome = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
  const {user, setUser} = useContext(Store);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const sendDate = () => {
    return Date();
  }

  const logout = () => {
    localStorage.clear();
    setUser('');
    history.push('/');
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        {/* Logo Area */}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => history.push("/seller")}>
            Home
          </Menu.Item>
          <SubMenu key="sub1" icon={<PlusCircleOutlined />} title="Add New Item">
            <Menu.Item 
              key="3"
              onClick={() => history.push("/seller/electronics")}
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
          <Menu.Item 
            key="9" 
            icon={<UserOutlined />}
            onClick={logout}
            >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

       <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div 
            className="site-layout-background" 
            style={{marginTop: 10, minHeight: 500, background: '#fff'}}
            >
            <Switch>
              <Route 
                exact 
                path="/seller" 
                component={() => <DekstopDashboard />} 
                />
              
              <Route
                exact
                path="/seller/electronics"
                component={() => <DesktopAddElectronics />}
              />
              </Switch>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{sendDate().toString()}</Footer>
      </Layout>
    </Layout>
  );
}