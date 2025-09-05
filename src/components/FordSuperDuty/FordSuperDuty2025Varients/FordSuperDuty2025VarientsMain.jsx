import React from "react";
import { Link } from "react-router";

const FordSuperDuty2025VarientsMain = () => {
  return (
    <>
      <div className={`ford-super-duty-2025-varients-main-parent`}>
        <div className="ford-super-duty-2025-varients-main-subparent">
          <div className="container">
            <div className="main-varients">
              <div className="row">
                <div className="col-md-5">
                  <div className="varient-name">
                    <h1>Ford Superduty Pickup</h1>
                  </div>
                  <div className="varient-blurb">
                    <p>
                      The Ford Super Duty® Pickup is built for unmatched
                      strength, durability, and capability. Designed to tackle
                      the toughest jobs with ease, it blends power with premium
                      comfort and advanced technology. Whether on the worksite
                      or the open road, this heavy-duty truck delivers
                      reliability, confidence, and bold styling, making it the
                      ultimate choice for those who demand more.
                    </p>
                  </div>
                  <div className="varient-buttons">
                    <div className="row">
                      <div className="buttons">
                        <Link to={"/contact-us"}>contact now</Link>
                      </div>
                      <div className="buttons">
                        <Link to={"/ford-super-duty-2025"}>Variants</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="varient-image">
                    <img
                      src="/ford-super-duty-2025-images/ford-super-duty.jpg"
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
                    <Link to={"/ford-super-duty-2025"}>Variants</Link>
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

export default FordSuperDuty2025VarientsMain;
