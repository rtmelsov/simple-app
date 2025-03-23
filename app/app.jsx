import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

const Home = ({ history }) => {
    return (
        <div>
            <h1>APP</h1>
            <button onClick={() => history.push('/app/login')}>Go to Login</button>
        </div>
    );
};

const HomeWithRouter = withRouter(Home);

const Login = () => (
    <div>
        <h1>Login Page</h1>
    </div>
);

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/app" component={HomeWithRouter} />
            <Route path="/app/login" component={Login} />
        </Switch>
    </BrowserRouter>
);

render(
    <BrowserRouter basename="/app">
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
