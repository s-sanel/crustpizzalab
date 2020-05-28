import React from 'react';
import "../styles/article.css";

const Article = ({reorderForMedium}) => { 

    return (
        <div className="homepage-article row m-0" style={{ }}>
          
          <div
            className={`article-image col-md ml-0${reorderForMedium ?' order-md-12':''}`}
            style={{
              backgroundColor: "beige",
            }}>
            <h1>slika</h1>
          </div>

          <div
            className={`article-desription col-md ml-0${reorderForMedium ? ' order-md-1' : ''}`}
            style={{  }}>
            <h1>text</h1>
          </div>

        </div>
    );
}

export default Article
