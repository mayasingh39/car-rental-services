import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import CustomerForm from './components/CustomerForm';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/customer-form" component={CustomerForm} />
            </Switch>
        </Router>
    );
}

export default App;
