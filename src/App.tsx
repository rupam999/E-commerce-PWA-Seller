import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import { Modal } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WindowDimensions from './components/WindowDimensions';
import { StoreProvider } from './Context/Store';
import { Login } from './Screens/Mobile/SignInFlow';
import { MainNavigation } from './Screens/Mobile/Navigation';
import { DesktopLogin } from './Screens/Desktop/SignInFlow';
import { DesktopSellerHome } from './Screens/Desktop/Content';
import { serverCheck } from './api/serverCheck';
import Loading from './Screens/Desktop/components/Loading';

const App = () => {
	const {width} = WindowDimensions();
	const [loading, setLoading] = useState<Boolean>(false);

	const checkUserAndServer = async () => {
		try {
			const res = await serverCheck();
			if(res.data.msg === 'sever running') {
				setLoading(false);
			} else {
				setLoading(false);
				Modal.error({
					title: 'Error',
					content: 'Server Down, Please check after sometime',
				});
			}
		} catch(error) {
			console.log('App.tsx', error);
			Modal.error({
                title: 'Error',
                content: 'Internal Server Error, Please check after sometime',
            });
		}
	}

	useEffect(() => {
        setLoading(true);
        checkUserAndServer();
    }, []);

	if(loading) {
		return (
			<Loading title='Loading...' />
		);
	}

	if(width > 900){
		return (
			<StoreProvider>
				<Router>
					<Route exact path="/" component={DesktopLogin} />
					<Route exact path="/desktopLogin" component={DesktopLogin} />
					<Route path="/desktopSeller" component={DesktopSellerHome} />
				</Router>
			</StoreProvider>
		);
	} else {
		{/* Mobile Device Screen */}
		return (
			<StoreProvider>
				<Router>
					<Route exact path="/" component={Login} />
					<Route exact path="/login" component={Login} />
					<Route path="/seller" component={MainNavigation} />
				</Router>
			</StoreProvider>
		);
	}
}

export default App;
