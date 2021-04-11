import React, { Component } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Contacts from './components/Contacts';
import About from "./components/About";



import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
      <Contacts/>
      <About ></About>
      </div>
    )
  }
}
export default App;
