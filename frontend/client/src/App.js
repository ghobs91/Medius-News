
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NewsGrid from './components/NewsGrid';
import NavBar from './components/NavBar';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topNewsCards: [],
      bizNewsCards: [],
      sportsNewsCards: [],
      healthNewsCards: []
    };
  }

  async componentDidMount() {
    // axios
    //   .get('https://newsapi.org/v2/top-headlines?sources=reuters,associated-press&apiKey=f31036fe7b5e4137bb084f9428a35784')
    //   .then(response => {
    //     console.log ("this is the response:", response.data.articles);    
    //     this.setState({topNewsCards: response.data.articles });
    //     console.log("the state: " + this.state.topNewsCards[0].title)
    //   })
    //   .catch(error => {
    //     console.error('Server Error', error);
    //   });

    const topNewsRequest = await axios.get('https://newsapi.org/v2/top-headlines?sources=reuters,associated-press,abc-news,cbs-news,nbc-news,usa-today&apiKey=f31036fe7b5e4137bb084f9428a35784');
    const bizNewsRequest = await axios.get('https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=f31036fe7b5e4137bb084f9428a35784');
    const sportsNewsRequest = await axios.get('https://newsapi.org/v2/top-headlines?sources=bleacher-report,espn&apiKey=f31036fe7b5e4137bb084f9428a35784');
    const healthNewsRequest = await axios.get('https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=f31036fe7b5e4137bb084f9428a35784');

    this.setState({
      topNewsCards: topNewsRequest.data.articles,
      bizNewsCards: bizNewsRequest.data.articles,
      sportsNewsCards: sportsNewsRequest.data.articles,
      healthNewsCards: healthNewsRequest.data.articles
    });

    console.log("biz news cards:" + this.state.bizNewsCards)

  }

  render() {
    return (
      <AppContainer>
        <NavBar/>
        <NewsGrid topNewsCards={this.state.topNewsCards} bizNewsCards={this.state.bizNewsCards} sportsNewsCards={this.state.sportsNewsCards} healthNewsCards= {this.state.healthNewsCards} />
      </AppContainer>
    );
  }
}

export default App;