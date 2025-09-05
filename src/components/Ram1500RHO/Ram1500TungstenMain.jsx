import React from "react";
import { Link } from "react-router";

const Ram1500TungstenMain = () => {
  return (
    <>
      <div className="ram-1500-tungsten-varients-main-parent">
        <div className="ram-1500-tungsten-varients-main-subparent">
          <div className="container">
            <div className="main-varients">
              <div className="row">
                <div className="col-md-5">
                  <div className="varient-name">
                    <h1>RAM 1500 Tungsten</h1>
                  </div>
                  <div className="varient-blurb">
                    <p>
                      The RAM 1500 Tungsten is the pinnacle of luxury and
                      performance in a full-size pickup. With premium materials,
                      advanced technology, and powerful capability, it blends
                      rugged strength with refined sophistication. Designed for
                      those who demand both toughness and elegance, the Tungsten
                      delivers an unmatched driving experience on any road.
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
                      src="/ram1500rho/tungsten-main-varient-image.jpg"
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

export default Ram1500TungstenMain;
