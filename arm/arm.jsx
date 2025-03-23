import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

const Home = ({ history }) => {
    return (
        <div>
            <h1>ARM</h1>
            <button onClick={() => history.push('/login')}>Go to Login</button>
        </div>
    );
};

// Оборачиваем Home в withRouter, чтобы получить доступ к `history`
const HomeWithRouter = withRouter(Home);

const Login = () => (
    <div>
        <h1>Login Page</h1>
    </div>
);

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeWithRouter} />
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
);

render(
    <BrowserRouter basename="/arm">
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
