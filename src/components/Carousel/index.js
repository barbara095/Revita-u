import React from "react";
import "./style.css";

function Carousel() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src=".../public/assets/images/image1.jpg" className="d-block w-100" alt="image1"></img>
        </div>
        <div className="carousel-item">
          <img src=".../public/assets/images/image2.jpg" className="d-block w-100" alt="image2"></img>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..."></img>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    )
};

export default Carousel;