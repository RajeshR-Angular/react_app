import React from 'react';
import './App.css';

// router
import { Route, Switch } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component';
import ShopComponent from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeAuth = null;

  componentDidMount() {
    this.unSubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({
      //   currentUser: user
      // })
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state);
        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
      createUserProfileDocument(userAuth)
    })
  }
  componentWillUnmount() {
    this.unSubscribeAuth()
  }
  render() {
    const { displayName } = this.state;
    return (
      <div className="e-com">
        <h1>{displayName}</h1>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/shop" component={ShopComponent} exact />
          <Route path="/signin" component={SignInSignUp} exact />
          <Route path="*" component={() => "404 page found"} />
        </Switch>
      </div>
    );
  }
}

export default App;
