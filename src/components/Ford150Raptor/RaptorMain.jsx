import React from "react";
import { Link } from "react-router";

const RaptorMain = () => {
  return (
    <>
      <div className="ford-150-raptor-varients-main-parent">
        <div className="ford-150-raptor-varients-main-subparent">
          <div className="container">
            <div className="main-varients">
              <div className="row">
                <div className="col-md-5">
                  <div className="varient-name">
                    <h1>Raptor</h1>
                  </div>
                  <div className="varient-blurb">
                    <p>
                      The Ford Ranger Raptor is built for those who crave
                      high-performance off-road dominance. Infused with Ford
                      Performance DNA, it draws inspiration from desert racing
                      to deliver unrivaled power, agility, and toughness. With
                      cutting-edge suspension, rugged design, and precision
                      handling, the Ranger Raptor is made to conquer the most
                      extreme terrains.
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
                    <img src="/ford150-images/ford-raptor.jpg" alt="f-sd-2025" />
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

export default RaptorMain;
