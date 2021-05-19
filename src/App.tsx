import React from 'react';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WindowDimensions from './components/WindowDimensions';
import { StoreProvider } from './Context/Store';
import { Login } from './Screens/Mobile/SignInFlow';
import { MainNavigation } from './Screens/Mobile/Navigation';
import { DesktopLogin } from './Screens/Desktop/SignInFlow';

const App = () => {
  const {width} = WindowDimensions();
  if(width > 900){
    return (
      <StoreProvider>
        <Router>
          <Route exact path="/" component={DesktopLogin} />
          <Route exact path="/desktopLogin" component={DesktopLogin} />
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
