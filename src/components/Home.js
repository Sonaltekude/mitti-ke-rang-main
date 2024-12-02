import React, { useState, useEffect } from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Gallary } from './Gallary';
import data from "../record.json";

export const Home = () => {

  const item = data[0];
  const item1 = data[1];
  
  const todayTarget = 300;
  const monthTarget = 900;
  const yearTarget = 90900;

  const [todayCount, setTodayCount] = useState(0);
  const [monthCount, setMonthCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);

  const countUp = (target, setter, interval) => {
    let count = 0;
    const increment = target / interval;
    const intervalId = setInterval(() => {
      count += increment;
      setter(Math.floor(count));
      if (count >= target) clearInterval(intervalId);
    }, 10);
  };

  useEffect(() => {
    countUp(todayTarget, setTodayCount, 200);
    countUp(monthTarget, setMonthCount, 200);
    countUp(yearTarget, setYearCount, 200);
  }, []);

  return (
    <div>
    
      <div id="mediaCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video className="d-block w-100 video" autoPlay muted loop>
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

    
      <About />

    
      <div className="container text-center py-5 mt-3">
        <h1 className="display-5 fw-bold text-success">On a mission to plant 1 trillion trees by 2050</h1>
        <p className="fs-5 text-muted">
          There is no solving climate change without solving deforestation. Discover our
          <a href="#" className="text-success fw-semibold"> Master Plan</a> on how we aim to achieve this monster goal.
        </p>

        <div className="row text-center mt-5">
          <div className="col-md-4 mb-4">
            <h2 className="display-6 fw-bold">{todayCount}+</h2>
            <p className="mb-2">Trees planted today</p>
            <div className="progress rounded-pill" style={{ height: '20px' }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${(todayCount / todayTarget) * 100}%` }}
                aria-valuenow={(todayCount / todayTarget) * 100}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <small className="text-muted d-block mt-2">
              Today's objective: {todayTarget}<br />17h 07min 14s left
            </small>
          </div>

          <div className="col-md-4 mb-4">
            <h2 className="display-6 fw-bold">{monthCount}+</h2>
            <p className="mb-2">Trees planted this month</p>
            <div className="progress rounded-pill" style={{ height: '20px' }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${(monthCount / monthTarget) * 100}%` }}
                aria-valuenow={(monthCount / monthTarget) * 100}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <small className="text-muted d-block mt-2">
              This month's objective: {monthTarget}<br />16 days left
            </small>
          </div>

          <div className="col-md-4 mb-4">
            <h2 className="display-6 fw-bold">{yearCount}+</h2>
            <p className="mb-2">Trees planted this year</p>
            <div className="progress rounded-pill" style={{ height: '20px' }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${(yearCount / yearTarget) * 100}%` }}
                aria-valuenow={(yearCount / yearTarget) * 100}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <small className="text-muted d-block mt-2">
              This year's objective: {yearTarget}<br />47 days left
            </small>
          </div>
        </div>

       
        <div className="text-center mt-4">
          <button className="btn btn-success btn-lg fw-bold shadow-lg hover:scale-105 transition-all duration-300">Plant trees</button>
        </div>
      </div>

     
      <section className="mission-vision py-5 bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="text-success">Our Vision</h2>
            <p className="lead">
              Our dream is to turn every corner of the planet into a thriving green oasis. We envision a future where communities embrace sustainable practices, where every tree planted symbolizes hope, and where future generations inherit a planet rich in natural beauty and resources.
            </p>
          </div>
        </div>
      </section>

      <Gallary />

      <Contact />
    </div>
  );
};

