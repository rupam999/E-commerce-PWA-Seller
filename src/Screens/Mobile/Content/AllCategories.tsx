import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from "react-router-dom";
import { Flex } from 'antd-mobile';
import { userCheck } from '../../../components/userCheck';
import { Store } from '../../../Context/Store';
import { getData } from '../../../localStorage/getData';
import Loader from '../../../components/mobileLoader';
import { HeaderWithBack } from '../Header/HeaderWithBack';

export const AllCategories = () => {
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
  return(
    <React.Fragment>
    {loading ? <Loader /> :
      <div>
        <HeaderWithBack name="All Categories" icon="left" />
        <div style={{ marginTop: 45 }}>
          <Flex>
            <Flex.Item>
              <p>Block Text</p>
            </Flex.Item>
            <Flex.Item>
              <p>Block Text</p>
            </Flex.Item>
            <Flex.Item>
              <p>Block Text</p>
            </Flex.Item>
          </Flex>
        </div>
      </div>
    }
    </React.Fragment>
  );
}