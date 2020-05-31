import React from 'react';
import '../styles/pages/our-pizza-page.scss';

const OurPizzaPage = () => {
    return (
      <div className="our-pizza-page">
        <div className="our-pizza-page-banner mb-5">
          <div className="our-pizza-banner-content">
            <h1>OUR PIZZA</h1>
            <p>WELCOME TO THE NEXT LEVEL OF PIZZA</p>
          </div>
        </div>
        <div className="our-pizza-content mb-5 row mx-0">
            <div className="col-sm-12 col-lg-8">
                <h2 className="mb-5">PIZZA FÖR DINA 5 SINNEN</h2>
                <div>
                  <p className="mb-4">Vi vet och håller med om att det är så mycket mer än bara smaken som urskiljer en god pizza. Vi använder alla våra sinnen när vi äter och det är något vi har med oss när vi tar fram våra pizzor. Vi kallar våra Pizzor för ”5ense-Pizzor” just för att varje sinne upplever något ut över det vanliga. </p>
                  <p className="mb-4">Du kommer höra ljudet av en krispig Crust. </p>
                  <p className="mb-4">Smaka en fulländande smakvariation. </p>
                  <p className="mb-4">Se den snyggaste pizzan du skådat. </p>
                  <p className="mb-4">Dofta den härliga lukten av hembakat bröd. </p>
                  <p className="mb-4">Känna känslan av varierande texturer. </p>
                  <p>När du äter någon av våra pizzor, ta en bild och ladda upp på instagram med #crustpizzalab. Vi är övertygade om att det kommer bli en riktig like-raket!</p>
                </div>
            </div>
        </div>
      </div>
    );
}

export default OurPizzaPage
