import React from 'react';
import data from '../record.json';

export const Whoweare = () => {
    const item3 = data[3];

    return (
        <>
            {/* Who We Are Section */}
            <section id="about" className="about-us py-5" style={{ backgroundColor: "#f9f9f9" }}>
                <div className="container">
                    {/* Section Title */}
                    <div className="text-center mb-5">
                        <h2 className="fw-bold" style={{ color: "#2d6a4f" }}>{item3.title}</h2>
                        <hr style={{ width: "80px", height: "4px", backgroundColor: "#2d6a4f", border: "none", margin: "10px auto" }} />
                    </div>

                    <div className="row align-items-center justify-content-between">
                        {/* Left Column: Image */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="image-wrapper text-center">
                                <img
                                    src={item3.image}
                                    alt="About Us"
                                    className="img-fluid rounded shadow"
                                    style={{ maxWidth: "100%", border: "5px solid #e9ecef" }}
                                />
                            </div>
                        </div>

                        {/* Right Column: Text */}
                        <div className="col-md-6">
                            <div className="content-wrapper">
                                <p
                                    className="lead"
                                    style={{
                                        textAlign: "justify",
                                        color: "#555",
                                        fontSize: "1.1rem",
                                        lineHeight: "1.8",
                                    }}
                                >
                                    {item3.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};