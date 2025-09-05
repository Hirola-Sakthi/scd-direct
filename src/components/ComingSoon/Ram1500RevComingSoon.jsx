import React from "react";
import { Link } from "react-router";

const Ram1500RevComingSoon = () => {
  return (
    <>
      <div className="ram-1500-rev-coming-soon-parent">
        <div className="ram-1500-rev-coming-soon-subparent">
          <div className="container">
            <div className="image-and-button-section">
              <div className="container">
                <div className="background-image">
                  <div className="row">
                    <div className="vehicle-button-parent">
                      <button className={`vehicle-button`}>RAM 1500 REV</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ram-1500-rev-blurb">
              <div className="container">
                <p>
                  Available in five trims—Tradesman®, Big Horn®/Lone Star8,,
                  Laramie®, Limited and introducing the all-new Tungsten
                  trim—the Ram 1500 REV is the latest addition to an iconic
                  lineup. The 2025 Ram 1500 REV is Ram’s first fully electric
                  pickup, delivering power, range, and capability without
                  compromising on toughness.
                </p>
              </div>
            </div>
            <div className="interested-button">
              <div className="row">
                <div className={`contact-now-button`}>
                  <Link to={"/contact-us"}>I might be interested</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ram1500RevComingSoon;
