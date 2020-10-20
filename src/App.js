import React from 'react';
import './App.css';

// router
import { Route, Switch } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component';


const HatsPage = (props) => {
  return <div> Hats page  </div>
}

function App() {
  return (
    <div className="e-com">
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/hats" component={HatsPage} exact />
        <Route path="*" component={() => "404 page found"} />
      </Switch>
    </div>
  );
}

export default App;
