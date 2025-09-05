import React from "react";
import { Link } from "react-router";

const AboutHome = () => {
  return (
    <>
      <div className="home-about-parent">
        <div className="home-about-subparent">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image-section">
                  <img src="/home/ram-left-alternative1.jpg" alt="" />
                </div>
              </div>
              <div className={`col-md-5`}>
                <div className="right-content">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="right-title fade-in">
                        <h1>
                          SCD Direct- Your Trusted Partner for American Vehicles
                        </h1>
                      </div>

                      <div className="description fade-in">
                        <p>
                          At SCD Direct, we are pioneers in the Australian
                          vehicle import industry, specializing in American
                          vehicles. With over 20 years of experience, We built a
                          reputation for delivering excellence in vehicle
                          conversions, compliance, and sourcing.
                        </p>
                        <p>
                          We are dedicated to bringing your dream vehicle to
                          life, whether it’s a robust pickup, an iconic muscle
                          car, or the latest electric innovation. Our passion
                          for American vehicles drives us to set new benchmarks
                          in technology, quality, and service.
                        </p>
                      </div>
                      <div className="learn-more-button-parent fade-in">
                        <Link to={'/about-us'} className="learn-more-button">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
