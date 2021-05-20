import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AddItem = () => {
    return(
        <Router>
            <Route exact path="/add" component={null} />
            <Route exact path="/add/electronics" component={null} />
        </Router>
    );
}

export default AddItem;