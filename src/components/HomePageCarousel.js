import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/homepage-carousel.css";
import slide0 from "../images/slide/Slide0.jpg";
import slide1 from "../images/slide/Slide1.jpg";
import slide2 from "../images/slide/Slide2.jpg";


const HomePageCarousel = () => {
    return (
        <Carousel className="test">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide0}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomePageCarousel
