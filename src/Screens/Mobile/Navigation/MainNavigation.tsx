import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BottomTabBar } from '../Navigation';

export const MainNavigation = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route 
                    exact 
                    path="/seller" 
                    render={() => <BottomTabBar />} 
                />
            </Switch>
        </React.Fragment>
    );
}