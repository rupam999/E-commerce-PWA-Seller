import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { TabBar } from 'antd-mobile';
import { HomeOutlined, PlusOutlined, ShoppingOutlined, EditOutlined } from '@ant-design/icons';
import { userCheck } from '../../../components/userCheck';
import { Store } from '../../../Context/Store';
import { getData } from '../../../localStorage/getData';
import { HomeScreen, AddNewProduct, Orders, EditProduct } from '../Content';
import { Logout } from '../SignInFlow';
import Loader from '../../../components/mobileLoader';
import Colors from '../../../utils/Colors';
import './BottomTabStyle.css';

export const BottomTabBar = () => {
    const [selectedTab, setSelectedTab] = useState('homeTab');
    const [loading, setLoading] = useState(true);
    const { setUser } = useContext(Store);
    const loggedUser = getData('user');
    const history = useHistory();
    useEffect(() => {
      if(userCheck(history)){
        setUser(loggedUser);
        setLoading(false);
      }
    }, []);
    // <p onClick={() => Logout(history)}>kjhkj</p>

    if(!loggedUser) {
      return( <Loader /> )
    }

    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        {loading ? <Loader /> :
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={false}
          prerenderingSiblingsNumber={0}
        >
            
            <TabBar.Item
                icon={<HomeOutlined className="bottomTabIcon" />}
                selectedIcon={<HomeOutlined className="bottomTabIcon" twoToneColor={Colors.darkBlue()} />}
                title="Home"
                key="home"
                selected={selectedTab === 'homeTab'}
                onPress={() => {
                setSelectedTab('homeTab');
                }}
                >
                <AddNewProduct />
            </TabBar.Item>

            <TabBar.Item
                icon={<PlusOutlined className="bottomTabIcon" />}
                selectedIcon={<PlusOutlined className="bottomTabIcon" twoToneColor={Colors.darkBlue()} />}
                title="Add Product"
                key="add_product"
                selected={selectedTab === 'addNewProductTab'}
                onPress={() => {
                setSelectedTab('addNewProductTab');
                }}
                >
                <AddNewProduct />
            </TabBar.Item>
            
            <TabBar.Item 
                icon={<ShoppingOutlined className="bottomTabIcon" />}
                selectedIcon={<ShoppingOutlined className="bottomTabIcon" twoToneColor={Colors.darkBlue()} />}
                title="Orders"
                key="orders"
                selected={selectedTab === 'orderTab'}
                onPress={() => {
                setSelectedTab('orderTab');
                }}
                >
                <Orders />
            </TabBar.Item>

            <TabBar.Item
                icon={<EditOutlined className="bottomTabIcon" />}
                selectedIcon={<EditOutlined className="bottomTabIcon" twoToneColor={Colors.darkBlue()} />}
                title="Edit Product"
                key="edit_product"
                selected={selectedTab === 'editProductTab'}
                onPress={() => {
                setSelectedTab('editProductTab');
                }}
                >
                <EditProduct />
            </TabBar.Item>
        </TabBar>
        }
      </div>
    );
}