import React, { Component } from 'react';
import NewsCard from './NewsCard';
import styled from 'styled-components'

const GridContainer = styled.section`
  height: 95%;
  width: 80%;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

`
class NewsGrid extends Component {
  
  render() {
    return (
      <GridContainer>
        <ul>
          <Grid>
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
          </Grid>
          
        </ul>
      </GridContainer>
    );
  }
}

NewsCard.defaultProps = {
 newscards: [],
};

export default NewsGrid;