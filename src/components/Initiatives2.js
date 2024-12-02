import React from 'react';
import image from "../images/image1.jpeg"; // Example image path

export const Initiatives2 = () => {
    return (
        <>
            {/* Main Section */}
            <section
                className="initiative-section py-5"
                style={{ backgroundColor: "#f9f9f9", fontFamily: "'Roboto', sans-serif" }}
            >
                <div className="container">
                    {/* Title Section */}
                    <div className="text-center mb-5">
                        <h1 className="fw-bold" style={{ color: "#2d6a4f" }}>
                            Donate a Day at the Farm
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
                            Want to experience the life of a farmer and contribute meaningfully? Donate a day at the 
                            farm and immerse yourself in the joys and challenges of farming.
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

                    {/* Content Section */}
                    <div className="row align-items-center">
                        {/* Left Column: Image */}
                        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
                            <img
                                src={image}
                                alt="Donate a Day at the Farm"
                                className="img-fluid rounded shadow-lg"
                                style={{ border: "5px solid #e9ecef" }}
                            />
                        </div>

                        {/* Right Column: Text */}
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
                                This unique initiative invites individuals to work alongside farmers, learning
                                sustainable farming techniques while fostering a deep connection to nature. It’s
                                an opportunity to step into the shoes of farmers and contribute directly to their
                                efforts.
                            </p>
                        </div>
                    </div>

                    {/* Key Highlights Section */}
                    <div className="mt-5 text-center">
                        <h3 className="fw-bold mb-3" style={{ color: "#2d6a4f" }}>
                            As a Participant, You Will:
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
                            <li> Assist in daily farming activities like planting, watering, harvesting, or tending to livestock.</li>
                            <li> Understand the hard work and dedication involved in growing the food we eat.</li>
                            <li> Contribute directly to the farmers’ efforts by sharing your labor and encouragement.</li>
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
                            This hands-on experience not only builds empathy but also raises awareness about the importance of sustainable agriculture. By joining, you become an active advocate for farming communities and environmental stewardship.
                        </p>
                    </div>

                    {/* Call-to-Action Section */}
                    <div className="text-center mt-5">
                        <h4
                            className="fw-bold"
                            style={{
                                color: "#2d6a4f",
                                marginBottom: "20px",
                            }}
                        >
                            Ready to Make a Difference?
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
                            Join us in this meaningful initiative and help us build a sustainable future, one farm at a time.
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
                            Get Involved
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
