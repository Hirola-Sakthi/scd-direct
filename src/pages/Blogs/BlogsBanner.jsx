import React, { useEffect } from "react";
import TopBar from "../../components/Common/TopBar";
import CustomHeader from "../../components/Common/Header";

const Blogsbanner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="blogs-banner-parent">
        <div className="blogs-banner-subparent">
          <div className="container">
            <div className="row">
              <div className="breadcrumb">
                <div className="pagename">
                  <h1>Blogs</h1>
                </div>
                <div className="breadcrum-links">
                  <div className="current-page">
                    <a href="/">Home</a>
                    <div className="icon">
                      <img
                        src="/about/icons8-right-arrow-100.png"
                        alt="arrow"
                      />
                    </div>
                    <p>Blogs</p>
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

export default Blogsbanner;
