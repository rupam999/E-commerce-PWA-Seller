import React, { useContext, useEffect, useState } from 'react';
import { Layout, Menu, Modal } from 'antd';
import { HomeOutlined, PlusCircleOutlined, UserOutlined, EditOutlined } from '@ant-design/icons';
import { useHistory, Switch, Route } from 'react-router-dom';
import { Store } from '../../../Context/Store';
import { DekstopDashboard, DesktopAddElectronics, DesktopEditProductHome } from './';
import { checkUser } from '../../Helpers/Utlities';
import './css/DesktopSellerDashboardStyle.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const DesktopSellerHome = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
  const {user, setUser} = useContext(Store);
  const [loading, setLoading] = useState<Boolean>(false);

  const checkIsLogin = async () => {
    try {
      const response = await checkUser();
      if(response === -1) {
        Modal.error({
          title: 'Error',
          content: 'Internal Server Error, Please check after sometime',
        });
      } else if(response === 0) {
        history.push('/');
      }
    } catch(error) {
      Modal.error({
        title: 'Error',
        content: 'Internal Server Error, Please check after sometime',
      });
    }
  }

  useEffect(() => {
    setLoading(true);
    checkIsLogin();
  }, []);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const logout = () => {
    localStorage.clear();
    setUser('');
    history.push('/');
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        {/* Logo Area */}
        <div className="desktopSellerLogoSection">
          <h3>Seller</h3>
        </div>
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          className="desktopSellerMenu"
          >

          <Menu.Item 
            key="1" 
            icon={<HomeOutlined />}  
            onClick={() => history.push("/desktopSeller")}
            >
            Home
          </Menu.Item>

          <SubMenu 
            key="sub1" 
            icon={<PlusCircleOutlined />} 
            title="Add New Item"
            >
            <Menu.Item 
              key="3"
              onClick={() => history.push("/desktopSeller/electronics")}
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
            icon={<EditOutlined />}
            onClick={() => history.push('/desktopSeller/editProduct')}
            key="6"
            >
            Edit Product
          </Menu.Item>

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
                path="/desktopSeller" 
                component={() => <DekstopDashboard />} 
              />
              
              <Route
                exact
                path="/desktopSeller/electronics"
                component={() => <DesktopAddElectronics />}
              />

              <Route 
                exact
                path="/desktopSeller/editProduct"
                component={() => <DesktopEditProductHome />}
              />
              </Switch>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>&copy; E-commerce</Footer>
      </Layout>
    </Layout>
  );
}