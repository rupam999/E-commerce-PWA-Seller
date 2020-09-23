import React from "react";
import { Route, Switch } from "react-router-dom";
import { BottomTabBar } from "../Navigation";
import { AllCategories } from "../Content";

export const MainNavigation = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/seller" render={() => <BottomTabBar />} />
                <Route
                    exact
                    path="/seller/all-categories"
                    render={() => <AllCategories />}
                />
            </Switch>
        </React.Fragment>
    );
};
