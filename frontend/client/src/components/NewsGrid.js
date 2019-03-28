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
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5rem;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2.5rem;

`

const FAB = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  position: fixed;
  z-index: 1;
  bottom: 1.5rem;
  right:.5rem;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 708px){
    border: 1px lightgray solid;
  }
`

const SectionHeaderElement = styled.div`
  margin-left: .5rem;
  margin-right: .5rem;
`
class NewsGrid extends Component {
  
  render() {
    return (
      <GridContainer>
        
        <ul className = "centered-ul">

          <SectionHeader>
            <SectionHeaderElement>
              <img src="https://i.imgur.com/UgUAt1o.png" width = "32px" height = "32px" alt=""></img>
            </SectionHeaderElement>
            <SectionHeaderElement>
              <h2>Top News</h2>
              </SectionHeaderElement>
          </SectionHeader>

          <Grid>
            {this.props.topNewsCards.slice(0,6).map(newscard => {
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

        <ul className = "centered-ul">

          <SectionHeader>
              <SectionHeaderElement>
                <img src="https://i.imgur.com/vwv4ptv.png" width = "32px" height = "32px" alt=""></img>
              </SectionHeaderElement>
              <SectionHeaderElement>
                <h2>Business</h2>
                </SectionHeaderElement>
            </SectionHeader>

          <Grid>
            {this.props.bizNewsCards.slice(0,6).map(newscard => {
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

        <ul className = "centered-ul">
          
          <SectionHeader>
            <SectionHeaderElement>
              <img src="https://i.imgur.com/nPS4lgw.png" width = "32px" height = "32px" alt=""></img>
            </SectionHeaderElement>
            <SectionHeaderElement>
              <h2>Sports</h2>
            </SectionHeaderElement>
          </SectionHeader>

          <Grid>
            {this.props.sportsNewsCards.slice(0,6).map(newscard => {
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

        <ul className = "centered-ul">
          
          <SectionHeader>
            <SectionHeaderElement>
              <img src="https://i.imgur.com/EydCPiJ.png" width = "32px" height = "32px" alt=""></img>
            </SectionHeaderElement>
            <SectionHeaderElement>
              <h2>Health</h2>
            </SectionHeaderElement>
          </SectionHeader>

          <Grid>
            {this.props.healthNewsCards.slice(0,6).map(newscard => {
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
  topNewsCards: [],
  bizNewsCards: [],
  sportsNewsCards: [],
  healthNewsCards: []
};

export default NewsGrid;