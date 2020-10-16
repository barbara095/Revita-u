import React from "react";
import { Container } from '../Grid';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "../../assets/images/smart-swaps.jpg";
import Image2 from "../../assets/images/image1.png";
import Image3 from "../../assets/images/image2.png";
import Image4 from "../../assets/images/image3.png";
import "./style.css";

function CarouselHome() {
  return (
    <div className="carousel-container">
      <Container fluid>
        <Carousel style={{ overflow: 'hidden' }}>
          <Carousel.Item style={{ 'height': '100%' }}>
            <img style={{ 'height': '100%' }}
              className="d-block w-100"
              src={Image1}
              alt="First slide"
            />
            <Carousel.Caption className="caption">
              <h3>Make the Switch</h3>
              <p>Discover a healthier you</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ 'height': '100%' }}>
            <img style={{ 'height': '100%'}}
              className="d-block w-100"
              src={Image2}
              alt="Second slide"
            />

            <Carousel.Caption className="caption">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ 'height': '100%' }}>
            <img style={{ 'height': '100%' }}
              className="d-block w-100"
              src={Image3}
              alt="Third slide"
            />

            <Carousel.Caption className="caption">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ 'height': '100%' }}>
            <img style={{ 'height': '100%' }}
              className="d-block w-100"
              src={Image4}
              alt="Third slide"
            />

            <Carousel.Caption className="caption">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </Container>
    </div>
  )
};

export default CarouselHome;