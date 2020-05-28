import React from 'react';
import "../styles/article.css";

const Article = ({ reorderForMedium, title, description, buttonText, buttonUrl, children}) => { 
    return (
        <div className="homepage-article row m-0" style={{ }}>
          
          <div className={`article-image col-md ml-0${reorderForMedium ?' order-md-12':''}`} style={{ backgroundColor: "beige" }}>
            
          </div>

          <div className={`article-description col-md py-5 ml-0${reorderForMedium ? ' order-md-1' : ''} `}>
            <h3>{title}</h3>
            <div className="article-description-text">
                {children}
            </div>
            <a href={buttonUrl} className="btn btn-danger article-action-btn">{buttonText}</a>
          </div>

        </div>
    );
}

export default Article
