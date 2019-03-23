import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NewsGrid from './components/NewsGrid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>navbar</div>
        <NewsGrid/>
      </div>
    );
  }
}

export default App;
