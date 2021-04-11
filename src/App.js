import React, { Component } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Contacts from './components/Contacts';
import About from "./components/About";
import {BrowserRouter as Router} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'




import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (

      <Router>
      <Route path='/'> <Header/> </Route>
      <Route exact path='/'> <Home/>  </Route>
      <Route exact path='/about'> <About/>  </Route>
      <Route exact path='/contacts'> <Contacts/> </Route>

      </Router>
    
    )
  }
}
export default App;
