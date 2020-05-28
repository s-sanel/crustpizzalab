import React from 'react';
import "../styles/business-hours.css";

const BusinessHours = () => {
    return (
      <div className='business-hours-container fluid-container p-5'>
        <div className="business-hours row justify-content-md-center" style={{}}>
        <div className="business-hours-content col-sm col-lg-8">
            <h2>ÖPPETTIDER</h2>
            <h4 className="text-uppercase">Mån - Fre: 11:00-21:00</h4>
            <h4 className="text-uppercase">Lör - Sön: 12:00-21:00</h4>
            <div className="business-hours-content-message my-4">
                Att beställa Pizza ska gå snabbt och enkelt, och det håller vi med
                om. Därför kan du enkelt beställa våra pizzor online. Just nu i
                rådande tider där vi måste ta lite extra hand om varandra uppmanar
                vi er att beställa hemleverans, annars går det också snabbt att
                komma och hämta din Pizza på vår Delivery Station.
            </div>
            <div className='greeting-message'>Välkomna till Cruzt Pizza Lab!</div>
        </div>
      </div>
      </div>
    );
}

export default BusinessHours