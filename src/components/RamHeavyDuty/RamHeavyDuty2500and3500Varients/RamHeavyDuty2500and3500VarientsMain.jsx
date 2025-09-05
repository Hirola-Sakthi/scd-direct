import React from "react";
import { Link } from "react-router";

const RamHeavyDuty2500and3500VarientsMain = () => {
  return (
    <>
      <div className="ram-heavy-duty-2500-and-3500-varients-main-parent">
        <div className="ram-heavy-duty-2500-and-3500-varients-main-subparent">
          <div className="container">
            <div className="main-varients">
              <div className="row">
                <div className="col-md-5">
                  <div className="varient-name">
                    <h1>RAM Heavy Duty Pickup</h1>
                  </div>
                  <div className="varient-blurb">
                    <p>
                      The RAM Heavy Duty Pickup's are built for uncompromising
                      strength, power, and capability. Designed to handle the
                      toughest tasks with ease, they offer exceptional towing,
                      advanced technology, and a bold, rugged design. Whether on
                      the job site or the open road, these trucks deliver
                      durability, reliability, and the confidence to take
                      on any challenge.
                    </p>
                  </div>
                  <div className="varient-buttons">
                    <div className="row">
                      <div className="buttons">
                        <Link to={"/contact-us"}>contact now</Link>
                      </div>
                      <div className="buttons">
                        <Link to={"/ram-heavy-duty-2500-and-3500"}>
                          Variants
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="varient-image">
                    <img
                      src="/ramheavyduty-images/2500and3500-images/main-variant-image.avif"
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
                    <Link to={"/ram-heavy-duty-2500-and-3500"}>Variants</Link>
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

export default RamHeavyDuty2500and3500VarientsMain;
