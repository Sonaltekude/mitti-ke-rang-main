import React from 'react';
import data from '../record.json';

export const About = () => {
  const item1 = data[1];
  const item2 = data[2];
  const item3 = data[3];

  return (
    <>
  
      <section id="about" className="about-us py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
       
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#2d6a4f" }}>{item1.title}</h2>
            <hr style={{ width: "80px", height: "4px", backgroundColor: "#2d6a4f", border: "none", margin: "10px auto" }} />
          </div>

          <div className="row align-items-center justify-content-between">
      
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="image-wrapper text-center">
                <img
                  src={item1.image}
                  alt="About Us"
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: "100%", border: "5px solid #e9ecef" }}
                />
              </div>
            </div>

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
                  {item1.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section id="about" className="about-us py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
      

          <div className="row align-items-center justify-content-between">
      
            <div className="col-md-6 text-center text-md-start">
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
                  {item2.content}
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="image-wrapper text-center">
                <img
                  src={item3.image}
                  alt="About Us"
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: "100%", border: "5px solid #e9ecef" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <footer />
    </>
  );
};
