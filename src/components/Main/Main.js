import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Portal from '../Portal/Portal';
import PostDetail from '../PostDetail/PostDetail';


const Main = () => {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Portal />
                    </Route>

                    <Route path="/portal">
                        <Portal />
                    </Route>

                    <Route path="/PostDetail/:postId">
                        <PostDetail />
                    </Route>

                    <Route path="*">
                        <NotFound />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
};

export default Main;