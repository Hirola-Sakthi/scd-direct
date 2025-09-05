import React from "react";
import { Link } from "react-router";

const Ram1500rhoMain = () => {
  return (
    <>
      <div className="ram-1500-rho-varients-main-parent">
        <div className="ram-1500-rho-varients-main-subparent">
          <div className="container">
            <div className="main-varients">
              <div className="row">
                <div className="col-md-5">
                  <div className="varient-name">
                    <h1>RAM 1500 RHO</h1>
                  </div>
                  <div className="varient-blurb">
                    <p>
                      The RAM 1500 RHO is built for high-performance
                      off-roading, combining rugged capability with premium
                      comfort. Engineered for adventure, it delivers power,
                      precision, and all-terrain dominance.
                    </p>
                  </div>
                  <div className="varient-buttons">
                    <div className="row">
                      <div className="buttons">
                        <Link to={"/contact-us"}>contact now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="varient-image">
                    <img
                      src="/ram1500rho/ram-1500-rho-main.avif"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ram1500rhoMain;
