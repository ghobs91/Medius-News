import React, { Component } from 'react';
import NewsCard from './NewsCard';
import styled from 'styled-components'
import './../App.css';

const GridContainer = styled.section`
  @media (max-width: 650px) {
    with: 90%
  }

  @media (min-width: 651px) {
    width: 80%;
  }
  height: 95%;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;

`

const FAB = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  position: fixed;
  z-index: 1;
  bottom: 1.5rem;
  right:.5rem;
`
class NewsGrid extends Component {
  
  render() {
    return (
      <GridContainer>
        <ul className = "centered-ul">
          <Grid>
            {this.props.newscards.slice(0, 9).map(newscard => {
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

        <FAB onClick={() => window.location.href=window.location.href}>
          <img src="https://i.imgur.com/FtSBefU.png" height="100%" width="100%" alt=""/>
        </FAB>
      </GridContainer>
    );
  }
}

NewsCard.defaultProps = {
 newscards: [],
};

export default NewsGrid;