import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer py-5">

      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1">
              <i className="fas fa-map-marker-alt  me-2"></i>
              SWASTRISHIRI APT FL-13,<br />
              NEW SANGAVI PUNE 411061
            </p>
            <p className="mb-1">
              <i className="fas fa-phone-alt  me-2"></i> +91 - 9422333387<br />

            </p>
            <p className="mb-1">
              <i className="fas fa-envelope  me-2"></i> mittikerangfoundation@gmail.com
            </p>
          </div>

          {/* Mission and Vision Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold ">Our Mission</h5>
            <p>To make citizens aware about the need of trees for our survival and protect natural resources for generations to come.</p>
            <h5 className="fw-bold mt-4">Our Vision</h5>
            <p>To create forests and save water bodies for generations to come.</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 text-md-center mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <p>
              <Link href="#" className="text-decoration-none text-dark">Privacy Policy</Link>
            </p>
            <p>
              <Link href="#" className="text-decoration-none text-dark">Terms and Conditions</Link>
            </p>
            <p>
              <Link href="#" className="text-decoration-none text-dark">Contact Us</Link>
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="container">
        <div className="row align-items-center">


          <div className="col-md-6 text-center text-md-start mb-1 mb-md-0">
            <p className="mb-0">&copy; 2024 Your MITTI KE RANG. All rights reserved.</p>
          </div>


          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              Follow us on:
              <a href="#" className="text-dark mx-2">
                <FaFacebook /> Facebook
              </a> |
              <a href="#" className="text-dark mx-2">
                <FaTwitter /> Twitter
              </a> |
              <a href="#" className="text-dark mx-2">
                <FaInstagram /> Instagram
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

