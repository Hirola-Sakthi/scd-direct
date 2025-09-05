import React from "react";
import { Link } from "react-router";

const RamHeavyDutyCabChassisVarientsMain = () => {
  return (
    <>
      <div className="ram-heavy-duty-cab-chassis-varients-main-parent">
        <div className="ram-heavy-duty-cab-chassis-varients-main-subparent">
          <div className="container">
            <div className="main-varients">
              <div className="row">
                <div className="col-md-5">
                  <div className="varient-name">
                    <h1>RAM Heavy Duty Cab Chassis</h1>
                  </div>
                  <div className="varient-blurb">
                    <p>
                      The RAM Heavy Duty Cab Chassis is built for maximum
                      versatility, strength, and durability. Engineered to
                      support a wide range of upfits, it delivers powerful
                      performance, impressive payload capacity, and advanced
                      technology. Whether for commercial fleets or specialized
                      work, this truck provides the reliability and capability
                      to tackle the toughest jobs with ease.
                    </p>
                  </div>
                  <div className="varient-buttons">
                    <div className="row">
                      <div className="buttons">
                        <Link to={"/contact-us"}>contact now</Link>
                      </div>
                      <div className="buttons">
                        <Link to={"/ram-heavy-duty-cab-chassis"}>Variants</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="varient-image">
                    <img
                      src="/ramheavyduty-images/CabChassis-images/main-variant-image.png"
                      alt="f-sd-2025"
                    />
                  </div>
                </div>
              </div>
              <div className="varient-buttons-mobile">
                <div className="row">
                  <div className="buttons">
                    <Link to={"/contact-us"}>contact now</Link>
                  </div>
                  <div className="buttons">
                    <Link to={"/ram-heavy-duty-cab-chassis"}>Variants</Link>
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

export default RamHeavyDutyCabChassisVarientsMain;
