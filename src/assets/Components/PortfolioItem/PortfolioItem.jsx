import React from 'react'
import Button from '../../Components/Button/Button';
import './PortfolioItem.css'

const PortfolioItem = ({imgSrc, title, description, className}) => {
    return (
      <div className={className}>
        <div className='imageContainer'>
        <div className="siteWrapper">
          <img className="wave" src={imgSrc} alt={title}></img>
        </div>
        
        <div className="line"></div>
        </div>
        <div className='contentContainer'>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button text='view project' className='navBtn view' />
        <div className="line"></div>
        </div>
      </div>
    );
  };
  
  export default PortfolioItem;
