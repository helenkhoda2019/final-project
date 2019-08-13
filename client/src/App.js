import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Dress from './components/Dress';
// import Profile from "./component/Cart";


function App() {
  return ( <Router>

    <Navbar />

    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/dress" component={Dress} />
    </Switch>
    

  </Router>    
  );
}

export default App;