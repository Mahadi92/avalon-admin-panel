import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const Index = () => {

    let { path, url } = useRouteMatch();

    return (
        <section className="flex">
            <div className="w-1/12 lg:w-2/12 bg-green-300 h-screen">
                <div className="sidebar">
                    <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="sidebar">
                    <Link to={`${url}/page-1`}>Page 1</Link>
                </div>
                <div className="sidebar">
                    <Link to={`${url}/page-2`}>Page 2</Link>
                </div>
            </div>
            <div className="w-11/12 lg:w-10/12 bg-purple-200 px-10 h-screen">
                <Switch>
                    <Route exact path="/pp" component={Page1} />
                    <Route exact path={`${path}/page-1`} component={Page1} />
                    <Route exact path={`${path}/page-2`} component={Page2} />
                </Switch>
            </div>

        </section>
    );
};

export default Index;