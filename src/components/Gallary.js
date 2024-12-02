import React from 'react';
import slider1 from '../images/img1.jpeg';
import slider2 from '../images/img2.jpeg';
import slider3 from '../images/img3.jpeg';
import data from '../record.json';

const item1 = data[1];
const item2 = data[2];

export const Gallary = () => {
  return (
    <>
      <div className="container py-5">
        <h2 className="text-center mb-5" style={{ color: "#2d6a4f", fontWeight: "bold" }}>OUR GALLERY</h2>

       
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          
         
          <div className="col">
            <div className="card border-0 shadow-sm rounded overflow-hidden">
              <img 
                src={slider1} 
                alt="Ped Lagaye | The Tree Anthem by ..." 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body p-2">
                <p className="card-text text-center text-muted small mb-0"></p>
              </div>
            </div>
          </div>

         
          <div className="col">
            <div className="card border-0 shadow-sm rounded overflow-hidden">
              <img 
                src={slider2} 
                alt="Grow-Trees plantation at Sita..." 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body p-2">
                <p className="card-text text-center text-muted small mb-0"></p>
              </div>
            </div>
          </div>

        
          <div className="col">
            <div className="card border-0 shadow-sm rounded overflow-hidden">
              <img 
                src={slider3} 
                alt="Only one planet Campaign" 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body p-2">
                <p className="card-text text-center text-muted small mb-0"></p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border-0 shadow-sm rounded overflow-hidden">
              <img 
                src={slider2} 
                alt="Trees for Tigers® Ramtek, Maharas..." 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body p-2">
                <p className="card-text text-center text-muted small mb-0"></p>
              </div>
            </div>
          </div>

         
          <div className="col">
            <div className="card border-0 shadow-sm rounded overflow-hidden">
              <img 
                src={item2.image} 
                alt="Trees for Mumbai Metropolitan Re..." 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body p-2">
                <p className="card-text text-center text-muted small mb-0"></p>
              </div>
            </div>
          </div>

        
          <div className="col">
            <div className="card border-0 shadow-sm rounded overflow-hidden">
              <img 
                src={item1.image} 
                alt="Khaal. Grow-Trees.com Trees+ Proj..." 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body p-2">
                <p className="card-text text-center text-muted small mb-0"></p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border-0 shadow-sm rounded overflow-hidden">
              <img 
                src={item2.image} 
                alt="Grow-Trees projects promote Wom..." 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body p-2">
                <p className="card-text text-center text-muted small mb-0"></p>
              </div>
            </div>
          </div>

        
          <div className="col">
            <div className="card border-0 shadow-sm rounded overflow-hidden">
              <img 
                src={item1.image} 
                alt="NVIDIAxGrow-Trees.com | 1,00,000+" 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body p-2">
                <p className="card-text text-center text-muted small mb-0"></p>
              </div>
            </div>
          </div>

        </div>

      
        <div className="text-center mt-4">
          <a href="#!" className="btn btn-success btn-lg" style={{ fontWeight: 'bold', color: '#fff', padding: '12px 30px', borderRadius: '30px' }}>
            VIEW ALL IMAGES
          </a>
        </div>
      </div>
    </>
  );
};
