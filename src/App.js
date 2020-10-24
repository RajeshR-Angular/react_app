import React from 'react';
import './App.css';

// router
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Homepage from './pages/homepage/homepage.component';
import ShopComponent from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {

  unSubscribeAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({
      //   currentUser: user
      // })
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
      createUserProfileDocument(userAuth)
    })
  }
  componentWillUnmount() {
    this.unSubscribeAuth()
  }
  render() {
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
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
