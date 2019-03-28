import React from 'react';
import styled from 'styled-components'

const Card = styled.div`

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (min-width: 708px) {
    width: 44%;
  }

  @media (min-width: 950px) {
    width: 29%;
  }

  display: flex;
  flex-direction: column;
  border: 1px lightgray solid;
  border-radius: 5px;
  margin: 1rem;
`;

const CardText = styled.div`
  padding: .7rem;

  font-family: 'Open Sans', sans-serif;
`

const ImageContainer = styled.img`
  border-radius: 5px 5px 0px 0px; 
`

const SubTitleContainer = styled.div`
  font-size: 12px;
`
const NewsCard = props => {
  return (
    <Card>
      <a href={props.url}>
        <ImageContainer src= {props.image} alt= "" width= "100%" height=""></ImageContainer>
      </a>
      <CardText>
        <h4>{props.title}</h4>
        <SubTitleContainer>
          <p>{props.subtitle}</p>
        </SubTitleContainer>
      </CardText>
    </Card>
  );
};

NewsCard.defaultProps = {
  title: '',
  image: 'https://i.imgur.com/JGeDBAm.png',
  subtitle: '',
  url: ''
};

export default NewsCard;