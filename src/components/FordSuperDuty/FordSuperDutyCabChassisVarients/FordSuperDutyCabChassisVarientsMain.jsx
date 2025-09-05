import React from "react";
import { Link } from "react-router";

const FordSuperDutyCabChassisVarientsMain = () => {
  return (
    <>
      <div className="ford-super-duty-cab-chassis-varients-main-parent">
        <div className="ford-super-duty-cab-chassis-varients-main-subparent">
          <div className="container">
            <div className="main-varients">
              <div className="row">
                <div className="col-md-5">
                  <div className="varient-name">
                    <h1>Ford Super Duty Cab Chassis</h1>
                  </div>
                  <div className="varient-blurb">
                    <p>
                      The Ford Super Duty® Chassis Cab is built for those who
                      keep the world moving. Designed for rugged durability and
                      massive capability, it’s the ultimate foundation for tough
                      upfits, from utility trucks to heavy-duty work rigs. With
                      powerful performance and smart solutions from Ford Pro™,
                      it’s engineered to handle the toughest jobs with
                      confidence and efficiency.
                    </p>
                  </div>
                  <div className="varient-buttons">
                    <div className="row">
                      <div className="buttons">
                        <Link to={"/contact-us"}>contact now</Link>
                      </div>
                      <div className="buttons">
                        <Link to={"/ford-super-duty-cab-chassis"}>
                          Variants
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="varient-image">
                    <img
                      src="/ford-super-duty-cab-chassis-images/ford-super-duty-cab.jpg"
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
                    <Link to={"/ford-super-duty-cab-chassis"}>Variants</Link>
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

export default FordSuperDutyCabChassisVarientsMain;
