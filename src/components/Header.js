import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import logo from "../images/Mitti Ke Rang Logo.png";

export const Header = () => {
  return (
    <>
      <div className="container-fluid p-0 header">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-center d-flex align-items-center py-3 py-lg-0 px-lg-5">
          <Link href="/" className="navbar-brand ml-lg-3">
            <img
              src={logo}
              alt="NGO Logo"
              className="img-fluid"
           
            />
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0 gap-3 ">
              <li>
              <Link to="/" class="nav-item nav-link fs-5">Home</Link>
              </li>
              <li className="nav-item dropdown dropdown-hover position-static">
                <Link data-mdb-dropdown-init class="nav-link dropdown-toggle active fs-5" to="/about" id="navbarDropdown" role="button"
                  data-mdb-toggle="dropdown" aria-expanded="false">
                  About Us
                </Link>
                <div className="dropdown-menu w-auto mt-0" aria-labelledby="navbarDropdown">
                  <div className="container">
                    <div className="row my-2">
                      <div className="col-md-12 mb-3 mb-lg-0">
                        <div className="list-group list-group-flush">
                          <Link to="/about" className="list-group-item list-group-item-action">About us</Link>
                          <Link to="/whoweare" className="list-group-item list-group-item-action">Who We Are?</Link>
                          <Link to="/vision" className="list-group-item list-group-item-action">Vision & Mission</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-hover position-static">
                <Link data-mdb-dropdown-init class="nav-link dropdown-toggle active fs-5" href="#" id="navbarDropdown" role="button"
                  data-mdb-toggle="dropdown" aria-expanded="false">
                  Initiatives
                </Link>
                <div className="dropdown-menu w-auto mt-0" aria-labelledby="navbarDropdown">
                  <div className="container">
                    <div className="row my-2">
                      <div className="col-md-12 mb-3 mb-lg-0">
                        <div className="list-group list-group-flush">
                          <Link to="/Initiatives1" className="list-group-item list-group-item-action">Empowering Farmers Through an Online Marketplace</Link>
                          <Link to="/Initiatives2" className="list-group-item list-group-item-action">Donate a Day at the Farm</Link>
                          <Link to="/Initiatives3" className="list-group-item list-group-item-action">Adopt a Farmer, Farm, or Trees</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
              <Link to="/gallary" className="nav-item fs-5 nav-link">Gallary</Link>
              </li>
              <li>
              <Link to="/contact" className="nav-item fs-5 nav-link">Contact</Link>
              </li>
            </div>
            <Link to="/donate" className="btn btn-success text-dark ms-3 py-2">
              Donate
            </Link>
          </div>
        </nav>
      </div>


    </>
  );
};
