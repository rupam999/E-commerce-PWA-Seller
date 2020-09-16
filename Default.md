import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from "react-router-dom";
import { userCheck } from '../../../components/userCheck';
import { Store } from '../../../Context/Store';
import { getData } from '../../../localStorage/getData';
import Loader from '../../../components/mobileLoader';

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
                
            </div>
        }
       </React.Fragment>
    );
}