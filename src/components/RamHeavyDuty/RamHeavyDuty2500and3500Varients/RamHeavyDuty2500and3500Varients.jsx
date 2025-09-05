import React from "react";
import {
  ramheavyduty2500modelsData,
  ramheavyduty3500modelsData,
} from "../../../assets/data/RamSD2500and3500/ramsd25and35varients";
import { Link } from "react-router";

const RamHeavyDuty2500and3500Varients = () => {
  return (
    <>
      <div className="ram-heavy-duty-2500-and-3500-varients-parent">
        <div className="ram-heavy-duty-2500-and-3500-varients-subparent">
          <div className="models">
            <div className="container">
              <div className="varient-name">
                <h1 className="fade-in">RAM Heavy Duty 2500 Models</h1>
              </div>
              <div className="row">
                {ramheavyduty2500modelsData.map((model, index) => (
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
                <h1 className="fade-in">RAM Heavy Duty 3500 Models</h1>
              </div>
              <div className="row">
                {ramheavyduty3500modelsData.map((model, index) => (
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

export default RamHeavyDuty2500and3500Varients;
