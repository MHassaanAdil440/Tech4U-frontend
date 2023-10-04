import React from 'react';
import { Link } from 'react-router-dom';

function CategorySection() {
  return (
    <section className="bg-light py-3">
      <div className="container">
        <div className="text-center">
          <div className="row justify-content-center">
            <div className="col-md-2 col-sm-4 mb-3">
              <Link to="/new-laptops" className="text-decoration-none">
                <div className="p-3 bg-white rounded shadow">New Laptops</div>
              </Link>
            </div>
            <div className="col-md-2 col-sm-4 mb-3">
              <Link to="/used-laptops" className="text-decoration-none">
                <div className="p-3 bg-white rounded shadow">Used Laptops</div>
              </Link>
            </div>
            <div className="col-md-2 col-sm-4 mb-3">
              <Link to="/androids" className="text-decoration-none">
                <div className="p-3 bg-white rounded shadow">Androids</div>
              </Link>
            </div>
            <div className="col-md-2 col-sm-4 mb-3">
              <Link to="/iphones" className="text-decoration-none">
                <div className="p-3 bg-white rounded shadow">iPhones</div>
              </Link>
            </div>
            <div className="col-md-2 col-sm-4 mb-3">
              <Link to="/smart-watches" className="text-decoration-none">
                <div className="p-3 bg-white rounded shadow">Smart Watches</div>
              </Link>
            </div>
            <div className="col-md-2 col-sm-4 mb-3">
              <Link to="/airpods" className="text-decoration-none">
                <div className="p-3 bg-white rounded shadow">Airpods</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
