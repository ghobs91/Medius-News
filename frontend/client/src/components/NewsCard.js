import React from 'react';

const NewsCard = props => {
  return (
    <div className="NewsCard">
      <a href = {props.url}>
        <img src= {props.image} alt= ""></img>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </a>    
    </div>
  );
};

NewsCard.defaultProps = {
  title: '',
  image: '',
  subtitle: '',
  url: ''
};

export default NewsCard;