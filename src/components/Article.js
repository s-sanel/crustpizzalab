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
            <button href={buttonUrl} className="btn btn-danger article-action-btn py-3 px-5">
                <span class="align-middle">{buttonText}</span>
            </button>
          </div>

        </div>
    );
}

export default Article
