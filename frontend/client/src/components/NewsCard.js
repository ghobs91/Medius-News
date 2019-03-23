import React from 'react';

const NewsCard = props => {
  return (
    <div className="NewsCard">
      <a href = {props.url}>
        <h3>{props.title}</h3>
          {/* <div>{props.image}</div> */}
          <img src= {props.image} alt= ""></img>
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