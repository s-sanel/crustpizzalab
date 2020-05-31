import React from 'react';
import '../styles/pages/menu-page.scss';

import crustadillaCombo from '../images/menu/combo/crustadilla-combo.jpg'
import squareCombo from '../images/menu/combo/square-combo.jpg'
import originalCombo from '../images/menu/combo/original-combo.jpg'
import kidsCombo from '../images/menu/combo/kids-combo.jpg'
import piriPiri from '../images/menu/original/Original_Piri-Piri.jpg'
import theMexican from '../images/menu/original/Original_The_Mexican.jpg'
import chassyChickCaesar from '../images/menu/original/Origininal_Chassy_Chick_Caesar.jpg'
import helloHawaii from '../images/menu/original/Origininal_Hello_Hawaii.jpg'
import holyGuacamole from '../images/menu/original/Origininal_Holy_Guacamole.jpg'
import mrBurns from '../images/menu/original/Origininal_Mr._Burns.jpg'
import theSignature from '../images/menu/original/Origininal_The_Signature.jpg'
import truepizza from '../images/menu/original/Origininal_Truepizza.jpg'
import truffelHeaven from '../images/menu/original/Origininal_Truffel_Heaven.jpg'

const MenuPage = () => {
    return (
      <div className="menu-page">
        <div className="menu-page-banner mb-5">
            <div className="menu-page-banner-content">
                <h1>MENU</h1>
                <p>WELCOME TO THE NEXT LEVEL OF PIZZA</p>
            </div>
        </div>
        <div className="row mx-0 mb-5">
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <div class="card-body section-title">
                            <h2 class="card-title text-uppercase">Combos</h2>
                        </div>
                    </div>
                </div>
        
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                  <div class=" card h-100">
                    <img class="card-img-top" src={originalCombo} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Original Combo</h5>
                            <p class="card-text">Välj pizza, side och dryck.</p>
                        
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                  <div class=" card h-100">
                    <img class="card-img-top" src={squareCombo} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Square Combo</h5>
                            <p class="card-text">Välj pizza, side och dryck.</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                  <div class=" card h-100">
                    <img class="card-img-top" src={crustadillaCombo} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Crustadilla Combo</h5>
                        <p class="card-text">Välj pizza, side och dryck/</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                  <div class=" card h-100">
                    <img class="card-img-top" src={kidsCombo} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Kids Combo</h5>
                        <p class="card-text">Square quarter cheese & tomato, side och dryck.</p>
                    </div>
                  </div>
                </div>

        </div>





            <div className="row mx-0 mb-5">
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <div class="card-body section-title">
                            <h2 class="card-title text-uppercase">Original Pizzas</h2>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={truepizza} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">True Pizza</h5>
                            <p class="card-text">Marinerad tomatsås, mozzarella twist. toppad med baby tomater och färsk ekologisk basilika.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={truffelHeaven} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Truffle Heaven</h5>
                            <p class="card-text">Sour creme, mozzarella twist, färska ekologiska champinjoner. toppad med tryffelolja och rostade pinjenötter.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={mrBurns} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Mr Burns (It ́s hot)</h5>
                            <p class="card-text">Marinerad tomatsås, mozzarella twist, fänkålssalami. toppad med picklad rödlök och hackad chili.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={helloHawaii} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Hello Hawaii</h5>
                            <p class="card-text">Marinerad tomatsås, mozzarella twist, kallrökt skinka, färsk ananas. toppad med färsk ekologisk persilja.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={chassyChickCaesar} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Chassy Chick Caesar</h5>
                            <p class="card-text">Sour creme, mozzarella twist, bakad skånsk gårdskyckling, kalkonbacon toppad med grönkålsmix, hyvlad parmesan och crust ́s caesardressing.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={theSignature} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">The Signature</h5>
                            <p class="card-text">Marinerad tomatsås, mozzarella twist, svensk långbakad högrev toppad med spetskålmix, picklad rödlök, cheddarsås, sour cream.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={theMexican} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">The Mexican</h5>
                            <p class="card-text">Salsa verde, mozzarella twist, pulled pork, tortilla chips, jalapeno toppad med husets coleslaw, svart ekologiskt råris, sour cream.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={holyGuacamole} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Holy Guacamole</h5>
                            <p class="card-text">Chipotle salsa, mozzarella twist, pulled oumph. toppad med sesampicklade grönsaker, babyspenat och guacamolekräm.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={piriPiri} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Piri-Piri</h5>
                            <p class="card-text">Skånsk chipotle salsa, mozzarella twist och handskalade räkor (msc) toppad med spetskålmix, chili- och vitlöksolja och färsk ekologisk persilja.</p>
                        </div>
                    </div>
                </div>

            </div>

      </div>
    );
}

export default MenuPage
