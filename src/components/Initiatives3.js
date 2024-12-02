import React from 'react';
import image from "../images/image1.jpeg"; 

export const Initiatives3 = () => {
    return (
        <>
          
            <section
                className="initiative-section py-5"
                style={{ backgroundColor: "#f9f9f9", fontFamily: "'Roboto', sans-serif" }}
            >
                <div className="container">
                  
                    <div className="text-center mb-5">
                        <h1 className="fw-bold" style={{ color: "#2d6a4f" }}>
                            Adopt a Farmer, Farm, or Trees
                        </h1>
                        <p
                            className="text-muted lead"
                            style={{
                                maxWidth: "800px",
                                margin: "0 auto",
                                lineHeight: "1.8",
                                fontSize: "1.2rem",
                            }}
                        >
                            For those who cannot visit farms but still wish to make a difference, this initiative offers a meaningful way to contribute to sustainable farming and reforestation efforts.
                        </p>
                        <hr
                            style={{
                                width: "80px",
                                height: "4px",
                                backgroundColor: "#2d6a4f",
                                border: "none",
                                margin: "20px auto",
                            }}
                        />
                    </div>

                   
                    <div className="row align-items-center">
                       
                        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
                            <img
                                src={image}
                                alt="Adopt Initiative"
                                className="img-fluid rounded shadow-lg"
                                style={{ border: "5px solid #e9ecef" }}
                            />
                        </div>

                       
                        <div className="col-lg-6">
                            <p
                                className="lead"
                                style={{
                                    fontSize: "1.2rem",
                                    lineHeight: "1.8",
                                    color: "#495057",
                                    textAlign: "justify",
                                }}
                            >
                                This program allows you to sponsor a farmer, a piece of farmland, or trees, directly supporting sustainable farming and environmental restoration. Your contribution empowers rural communities while fostering a healthier planet.
                            </p>
                        </div>
                    </div>

               
                    <div className="mt-5 text-center">
                        <h3 className="fw-bold mb-3" style={{ color: "#2d6a4f" }}>
                            How It Works:
                        </h3>
                        <ul
                            className="list-unstyled"
                            style={{
                                fontSize: "1.2rem",
                                color: "#495057",
                                lineHeight: "1.8",
                                textAlign: "justify",
                                maxWidth: "800px",
                                margin: "0 auto",
                            }}
                        >
                            <li> <strong>Adopt a Farmer:</strong> Provide financial support to help farmers purchase seeds, tools, and resources for a successful harvest.</li>
                            <li><strong>Adopt a Farm:</strong> Fund a specific farm project, such as setting up irrigation systems or transitioning to organic practices.</li>
                            <li> <strong>Adopt Trees:</strong> Sponsor tree planting on degraded land to improve soil fertility, conserve water, and enhance biodiversity.</li>
                        </ul>
                        <p
                            className="mt-4"
                            style={{
                                textAlign: "justify",
                                fontSize: "1.1rem",
                                color: "#495057",
                                lineHeight: "1.8",
                                maxWidth: "800px",
                                margin: "0 auto",
                            }}
                        >
                            Each adoption helps create a sustainable ecosystem while empowering rural communities to thrive. Contributors receive regular updates on the impact of their support, allowing them to see the difference they make.
                        </p>
                    </div>

                  
                    <div className="text-center mt-5">
                        <h4
                            className="fw-bold"
                            style={{
                                color: "#2d6a4f",
                                marginBottom: "20px",
                            }}
                        >
                            Ready to Support Sustainable Change?
                        </h4>
                        <p
                            className="lead text-muted"
                            style={{
                                maxWidth: "700px",
                                margin: "0 auto",
                                fontSize: "1.1rem",
                                lineHeight: "1.8",
                            }}
                        >
                            Join our initiative today and make a lasting impact on farming communities and the environment.
                        </p>
                        <a
                            href="#"
                            className="btn btn-success btn-lg px-5 py-3 mt-3"
                            style={{
                                backgroundColor: "#2d6a4f",
                                border: "none",
                                fontSize: "1.2rem",
                            }}
                        >
                            Adopt Now
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
