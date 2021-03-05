import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginSignup } from './features/auth/LoginSignup';
import { Dashboard } from './features/dashboard/Dashboard';
import AuthRoute from './features/auth/AuthRoute';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginSignup />
        </Route>
        <AuthRoute path="/dashboard">
          <Dashboard />
        </AuthRoute>
      </Switch>
    </Router>
  );
}

export default App;
