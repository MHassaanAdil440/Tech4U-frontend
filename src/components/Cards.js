import { Link } from "react-router-dom";
import React from "react";

function MyComponent(props) {
  return (
    <div className="card mt-3 mb-3" style={{ width: '18rem' }}>
      <img
        className="card-img-top w-100"
        src={props.img1}
        alt="Card image cap"
        style={{ height: '200px' }} // Adjust the height as per your requirement
      />
      <div className="card-body">
        <h5 className="card-title">{props.title1}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <Link to="#" className="btn btn-primary">
          Add to Cart
        </Link>
      </div>
    </div>
  );
}

export default MyComponent;
