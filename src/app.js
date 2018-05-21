import React from "react";
import Page from "./containers/page/page.component";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const PageRouter = () => (
    <Router>
        <div>
            <Route
                path="/:storeId"
                component={Page}
            />
        </div>
    </Router>
);

export default PageRouter;
