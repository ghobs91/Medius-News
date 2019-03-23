import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NewsGrid from './components/NewsGrid'
import NavBar from './components/NavBar'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f31036fe7b5e4137bb084f9428a35784')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      console.log("NewsAPI data:" + this.data)
  }


  render() {
    return (
      <div className="App">
        <NavBar/>
        <NewsGrid/>
      </div>
    );
  }
}

export default App;
