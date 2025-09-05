import React from "react";
import {
  ramheavyduty3500CabChassismodelsData,
  ramheavyduty4500CabChassismodelsData,
  ramheavyduty5500CabChassismodelsData,
} from "../../../assets/data/RamSDCabChassis/ramsdcabchassisvarients";
import { Link } from "react-router";

const RamHeavyDutyCabChassisVarients = () => {
  return (
    <>
      <div className="ram-heavy-duty-cab-chassis-varients-parent">
        <div className="ram-heavy-duty-cab-chassis-varients-subparent">
          <div className="models">
            <div className="container">
              <div className="varient-name">
                <h1 className="fade-in">3500 Cab Chassis Models</h1>
              </div>
              <div className="row">
                {ramheavyduty3500CabChassismodelsData.map((model, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="model-card">
                      <div className="row">
                        <div className="model-image">
                          <img
                            className="fade-in"
                            src={model.image}
                            alt={model.name}
                          />
                        </div>
                        <div className="divider"></div>
                        <div className="model-name">
                          <h4 className="fade-in">{model.name}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="varients-cta">
                  <Link to={"/contact-us"}>Contact Us</Link>
                </div>
              </div>
              <div className="varient-name">
                <h1 className="fade-in">4500 Cab Chassis Models</h1>
              </div>
              <div className="row">
                {ramheavyduty4500CabChassismodelsData.map((model, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="model-card">
                      <div className="row">
                        <div className="model-image">
                          <img
                            className="fade-in"
                            src={model.image}
                            alt={model.name}
                          />
                        </div>
                        <div className="divider"></div>
                        <div className="model-name">
                          <h4 className="fade-in">{model.name}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="varients-cta">
                  <Link to={"/contact-us"}>Contact Us</Link>
                </div>
              </div>
              <div className="varient-name">
                <h1 className="fade-in">5500 Cab Chassis Models</h1>
              </div>
              <div className="row">
                {ramheavyduty5500CabChassismodelsData.map((model, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="model-card">
                      <div className="row">
                        <div className="model-image">
                          <img
                            className="fade-in"
                            src={model.image}
                            alt={model.name}
                          />
                        </div>
                        <div className="divider"></div>
                        <div className="model-name">
                          <h4 className="fade-in">{model.name}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="varients-cta">
                  <Link to={"/contact-us"}>Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RamHeavyDutyCabChassisVarients;
