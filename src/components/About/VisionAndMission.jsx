import React, { useEffect, useRef, useState } from "react";

const VisionAndMission = () => {
  return (
    <>
      <div className="vision-and-mission-parent">
        <div className={`vision-and-mission-subparent`}>
          <div className="container">
            <div className="vision-and-mission-section-title">
              <h1>Our Vision & Mission</h1>
            </div>
            <div className="vision-mission-images">
              <div className="row">
                <div className="col-md-7">
                  <div className="left-image">
                    <img src="/about/vission-mission.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="right-image">
                    <img src="/about/about-banner.avif" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="differnce-points">
              <div className="row">
                <div className="col-md-3">
                  <div className="row">
                    {/* <div className="icon">
                      <img src="/home/icons8-settings-100.png" alt="" />
                    </div> */}
                    <div className="title">
                      <h3>Our Vision</h3>
                    </div>
                    <hr />
                    <div className="description">
                      <p>
                        To be Australia’s most trusted name in vehicle imports,
                        conversions, and compliance, setting new standards in
                        quality and innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    {/* <div className="icon">
                      <img src="/home/icons8-experience-100.png" alt="" />
                    </div> */}
                    <div className="title">
                      <h3>Our Mission</h3>
                    </div>
                    <hr />
                    <div className="description">
                      <p>
                        To bring American vehicles to Australia with precision
                        engineering, seamless compliance, and unmatched customer
                        service.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    {/* <div className="icon">
                      <img src="/home/icons8-trust-100.png" alt="" />
                    </div> */}
                    <div className="title">
                      <h3>Our Goal</h3>
                    </div>
                    <hr />
                    <div className="description">
                      <p>
                        To deliver dream vehicles at competitive dealer prices
                        while ensuring the highest levels of safety,
                        performance, and customer satisfaction.
                      </p>
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

export default VisionAndMission;
