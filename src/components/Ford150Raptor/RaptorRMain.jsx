import React from "react";
import { Link } from "react-router";

const RaptorRMain = () => {
  return (
    <>
      <div className="ford-150-raptor-r-varients-main-parent">
        <div className="ford-150-raptor-r-varients-main-subparent">
          <div className="container">
            <div className="main-varients">
              <div className="row">
                <div className="col-md-5">
                  <div className="varient-name">
                    <h1>Raptor R</h1>
                  </div>
                  <div className="varient-blurb">
                    <p>
                      The Ford F-150 Raptor R is the ultimate high-performance
                      off-road machine, engineered by Ford Performance to
                      dominate the most extreme terrains. Built for desert
                      racing and beyond, the Raptor R features FOX™ Live Valve
                      shocks and an advanced suspension system, providing
                      unmatched control and durability.
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
                    <img src="/ford150-images/ford-raptor-r1.jpg" alt="f-sd-2025" />
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

export default RaptorRMain;
