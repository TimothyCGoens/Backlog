import React, {Component} from 'react';
import './App.css';
import {Menu} from './Components/BaseLayout'
import axios from 'axios'




class App extends Component {

  // componentDidMount() {

  //   ('https://www.giantbomb.com/api/games/?api_key=f194765e78f8558180a48f79cbb6b02fe6f9bca2')
  //     .then(response => {
  //       console.log(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  //   }


  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}


export default App;
