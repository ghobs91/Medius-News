
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NewsGrid from './components/NewsGrid';
import NavBar from './components/NavBar';
// import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newscards: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://newsapi.org/v2/top-headlines?sources=reuters,associated-press&apiKey=f31036fe7b5e4137bb084f9428a35784')
      .then(response => {
        console.log ("this is the response:", response.data.articles);

        this.setState({newscards: response.data.articles });

        console.log("the state: " + this.state.newscards[0].title)

      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <NewsGrid newscards={this.state.newscards} />
      </div>
    );
  }
}

export default App;