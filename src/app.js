import React from "react";
import Home from "./containers/home/home.component";
import {BrowserRouter as Router, Route} from "react-router-dom";

const PageRouter = () => (
    <Router>
        <div>
            <Route
                path="/"
                component={Home}
            />
        </div>
    </Router>
);

export default PageRouter;
