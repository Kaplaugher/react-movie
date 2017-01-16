import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import Poster from './Poster';
import BootstrapNavbar from './BootstrapNavbar';



class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <BootstrapNavbar />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
