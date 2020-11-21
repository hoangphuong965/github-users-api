import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import About from './components/page/About';
import Home from './components/page/Home';
import Error from './components/page/Error';
import Alert from './components/layout/Alert';
import GithubState from './components/context/github/GithubState';
import User from './components/users/User';
import AlertState from './components/context/alert/AlertState';


const App = () => {
    return (
        <>
            <GithubState>
                <AlertState>
                    <BrowserRouter>
                        <div className="ui container">
                            <Navbar />
                            <Alert />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/user/:login" component={User} />
                                <Route exact path="*" component={Error} />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </AlertState>
            </GithubState>
        </>
    );
};

export default App;
