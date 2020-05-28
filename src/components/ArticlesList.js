import React from 'react'
import Article from './Article';

const ArticlesList = () => {
    return (
      <div style={{ backgroundColor: "#FAB500" }}>
        <Article
          reorderForMedium
          title="VÅRA CRUST PIZZALABS"
          buttonText="VISA KARTA"
          buttonUrl="#"
        >
          <p>
            Du hittar oss i Malmö, mitt i centrum vid Hansa Companiet. <br />
            Vårt mål är mer krispig pizza åt folket, så vi kommer öppna fler
            Labs framöver. <br />
            Kanske öppnar vi ett Lab nära dig? Följ oss på Facebook o Instagram.
          </p>
        </Article>
        
        <Article
            title="PIZZA FÖR DINA 5 SINNEN"
            buttonText="LÄS MER"
            buttonUrl="#"
        >
          <p>
            Det är ingen vanlig pizza du får när du beställer från vårt Pizza
            Lab. <br />
            Bakom pizzorna på vår meny ligger passion och kärlek till maten.{" "}
            <br />
            Vi är riktiga matälskare och vi utlovar en smaksensation och massor
            av krispig crust!
          </p>
        </Article>
        
        <Article 
            reorderForMedium
            title="JOBBA HOS OSS"
            buttonText="Kontakta oss"
            buttonUrl="#">
                <p>
                    Är du en matälskare, med extra försmak för Pizza?<br/> 
                    Lagar du mat med passion och brinner för god service och gott engagemang? <br/>
                    Då är du kanske den vi söker till vårt Pizza Lab Team! <br/>
                    Skicka in din ansökan här
                </p>   
        </Article>
      </div>
    );
}

export default ArticlesList


