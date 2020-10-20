import React from 'react';
import './App.css';

// router
import { Route, Switch } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component';
import ShopComponent from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return (
    <div className="e-com">
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/shop" component={ShopComponent} exact />
        <Route path="/signin" component={SignInSignUp} exact />
        <Route path="*" component={() => "404 page found"} />
      </Switch>
    </div>
  );
}

export default App;
