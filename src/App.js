import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

// Provider
import Provider from './Context/Provider';
// Pages
import {
  Login,
  Register,
  Admin,
  Cliente,
  Profile,
  Checkout,
  Orders,
  OrderDetails,
  ProfileAdmin,
  AdminOrdersDetails } from './pages';
// CSS
import './App.css';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/admin/Profile" component={ ProfileAdmin } />
          <Route exact path="/admin/orders" component={ Admin } />
          <Route exact path="/products" component={ Cliente } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/orders" component={ Orders } />
          <Route exact path="/orders/:id" component={ OrderDetails } />
          <Route exact path="/admin/orders/:id" component={ AdminOrdersDetails } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
