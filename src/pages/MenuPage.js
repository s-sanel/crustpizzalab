import React from 'react';
import '../styles/pages/menu-page.scss';

import crustadillaCombo from '../images/menu/combo/crustadilla-combo.jpg'
import squareCombo from '../images/menu/combo/square-combo.jpg'
import originalCombo from '../images/menu/combo/original-combo.jpg'
import kidsCombo from '../images/menu/combo/kids-combo.jpg'

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
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                  <div class=" card h-100">
                    <img class="card-img-top" src={squareCombo} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Square Combo</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                  <div class=" card h-100">
                    <img class="card-img-top" src={crustadillaCombo} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Crustadilla Combo</h5>
                        <p class="card-text"></p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                  <div class=" card h-100">
                    <img class="card-img-top" src={kidsCombo} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Kids Combo</h5>
                        <p class="card-text">This is additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
                        <img class="card-img-top" src={originalCombo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Original Combo</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>

                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={squareCombo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Square Combo</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={crustadillaCombo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Crustadilla Combo</h5>
                            <p class="card-text"></p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 mb-4">
                    <div class=" card h-100">
                        <img class="card-img-top" src={kidsCombo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Kids Combo</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>

            </div>

      </div>
    );
}

export default MenuPage
