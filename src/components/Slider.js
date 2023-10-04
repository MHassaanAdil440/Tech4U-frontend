import React from 'react';
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_1280.jpg" className="d-block w-100" alt="Image 1" />
        </div>
        <div className="carousel-item active">
          <img src="https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg" className="d-block w-100" alt="Image 2" />
        </div>
      </div>
      <Link className="carousel-control-prev" to="#carouselExample" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </Link>
      <Link className="carousel-control-next" to="#carouselExample" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </Link>
    </div>
  );
}

export default Slider;
