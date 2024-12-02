import React from 'react';
import image from "../images/image1.jpeg"; // Example image path

export const Initiatives1 = () => {
    return (
        <>
            {/* Main Section */}
            <section
                className="initiative-section py-5"
                style={{ backgroundColor: "#f3f4f6", fontFamily: "'Roboto', sans-serif" }}
            >
                <div className="container">
                    {/* Title Section */}
                    <div className="text-center mb-5">
                        <h1 className="fw-bold" style={{ color: "#2d6a4f" }}>
                            Empowering Farmers Through an Online Marketplace
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
                            Our mission is to connect farmers directly with consumers, ensuring fair pricing,
                            eliminating intermediaries, and promoting sustainable agricultural practices.
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
                        {/* Left Column: Text */}
                        <div className="col-lg-6 order-lg-1 order-2">
                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    lineHeight: "1.8",
                                    color: "#495057",
                                    textAlign: "justify",
                                }}
                            >
                                At the heart of our mission is creating a platform where farmers can sell their
                                products directly to consumers. This initiative eliminates middlemen, providing
                                farmers with fair pricing and wider reach. The marketplace also allows consumers
                                to enjoy fresh, organic, and sustainably grown produce while supporting local
                                communities.
                            </p>
                        </div>

                        {/* Right Column: Image */}
                        <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0 text-center">
                            <img
                                src={image}
                                alt="Empowering Farmers"
                                className="img-fluid rounded shadow-lg"
                                style={{ border: "5px solid #e9ecef" }}
                            />
                        </div>
                    </div>

                    {/* Key Highlights Section */}
                    <div className="mt-5 text-center">
                        <h3 className="fw-bold mb-3" style={{ color: "#2d6a4f" }}>
                            This Initiative Aims To:
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
                            <li> Enhance farmers' incomes by providing direct access to buyers.</li>
                            <li> Promote local, organic, and sustainably grown products.</li>
                            <li> Build a transparent, efficient, and supportive market ecosystem for rural producers.</li>
                        </ul>
                    </div>

                    {/* Call to Action Section */}
                    <div className="text-center mt-5">
                        <h4
                            className="fw-bold"
                            style={{
                                color: "#2d6a4f",
                                marginBottom: "20px",
                            }}
                        >
                            Join the Movement!
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
                            By shopping from our marketplace, you empower farmers, promote sustainability, and enjoy
                            high-quality, farm-fresh products.
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
                            Explore the Marketplace
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
