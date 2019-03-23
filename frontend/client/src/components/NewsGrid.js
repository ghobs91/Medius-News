import React, { Component } from 'react';
import NewsCard from './NewsCard';
class NewsGrid extends Component {
  
  render() {
    return (
      <div className="NewsGrid">
        <h1>The News</h1>
        <ul>
          {this.props.newscards.map(newscard => {
            return (
              <NewsCard
                title={newscard.title}
                image={newscard.urlToImage}
                subtitle={newscard.description}
                url={newscard.url}
                key={newscard.url}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

NewsCard.defaultProps = {
 newscards: [],
};

export default NewsGrid;