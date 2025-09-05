import React from "react";
import { superdutyCabChassismodelsData } from "../../../assets/data/FordSuperDutyCabChassis/superdutyCabChassismodelsData";
import { Link } from "react-router";

const FordSuperDutyCabChassisVarients = () => {
  return (
    <>
      <div className="ford-super-duty-cab-chassis-varients-parent">
        <div className="ford-super-duty-cab-chassis-varients-subparent">
          <div className="models">
            <div className="container">
              <div className="row">
                {superdutyCabChassismodelsData.map((model, index) => (
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

export default FordSuperDutyCabChassisVarients;
