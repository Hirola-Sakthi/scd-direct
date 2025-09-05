import React from "react";
import { superduty2025modelsData } from "../../../assets/data/FordSuperDuty2025/superduty2025varients";
import { Link } from "react-router";

const FordSuperDuty2025Varients = () => {
  return (
    <>
      <div className="ford-super-duty-2025-varients-parent">
        <div className="ford-super-duty-2025-varients-subparent">
          <div className="models">
            <div className="container">
              <div className="row">
                {superduty2025modelsData.map((model, index) => (
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

export default FordSuperDuty2025Varients;
