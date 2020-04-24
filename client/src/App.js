import React from "react";
import 'bootswatch/dist/lumen/bootstrap.min.css'; 
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Profile from "./pages/profile";
import Landing from "./pages/landing";
import store from "./store";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import { Provider } from 'react-redux';

//import { fetchUserAction } from './actions/authActions';
import "./App.css";

class App extends React.Component {

  render() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
        <Nav />
        <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/user" component={Profile} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
      </div>
      </div>
    </Router>
    </Provider>
  );
  }
}


export default App;