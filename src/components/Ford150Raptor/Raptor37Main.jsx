import React from "react";
import { Link } from "react-router";

const Raptor37Main = () => {
  return (
    <>
      <div className="ford-150-raptor-37-varients-main-parent">
        <div className="ford-150-raptor-37-varients-main-subparent">
          <div className="container">
            <div className="main-varients">
              <div className="row">
                <div className="col-md-5">
                  <div className="varient-name">
                    <h1>Raptor 37</h1>
                  </div>
                  <div className="varient-blurb">
                    <p>
                      The Ford F-150 Raptor 37 Performance Package takes
                      off-road dominance to the next level. Equipped with
                      massive 37-inch all-terrain tires, it offers superior
                      ground clearance and traction, making it unstoppable
                      across rugged landscapes.
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
                    <img src="/ford150-images/ford-raptor-37.webp" alt="f-sd-2025" />
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

export default Raptor37Main;
