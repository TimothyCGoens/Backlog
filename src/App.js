import React, {Component} from 'react';
import './App.css';
import {Menu} from './Components/BaseLayout'
import axios from 'axios'




class App extends Component {



  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}


export default App;
