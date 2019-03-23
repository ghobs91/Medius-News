import React, { Component } from 'react';

class NewsCard extends Component {
  render() {
    return (
      <div className="news-card">
        <div>Image</div>
        <div>Headline</div>
        <div>Subtitle</div>        
      </div>
    );
  }
}

export default NewsCard;