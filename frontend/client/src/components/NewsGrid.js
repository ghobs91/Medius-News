import React, { Component } from 'react';
import NewsCard from './NewsCard'

class NewsGrid extends Component {
  render() {
    return (
      <div className="news-grid">
        <div>Here be the NewsCards:</div>
        <NewsCard></NewsCard>
      </div>
    );
  }
}

export default NewsGrid;