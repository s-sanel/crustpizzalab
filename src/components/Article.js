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
            className={`article-description col-md ml-0${reorderForMedium ? ' order-md-1' : ''} `}
            style={{  }}>
            <h3>VÅRA CRUST PIZZALABS</h3>
            <div>
                <p>
                    Du hittar oss i Malmö, mitt i centrum vid Hansa Companiet. <br/>
                    Vårt mål är mer krispig pizza åt folket, så vi kommer öppna fler Labs framöver. <br/>
                    Kanske öppnar vi ett Lab nära dig? Följ oss på Facebook o Instagram.
                </p>
            </div>
            <a href="#" className="btn btn-danger article-action-btn">VISA KARTA</a>
          </div>

        </div>
    );
}

export default Article
