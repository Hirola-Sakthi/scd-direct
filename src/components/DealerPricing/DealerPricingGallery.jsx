import React, { useEffect, useRef, useState } from "react";

const DealerPricingGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return (
    <>
      <div className="dealer-pricing-gallery-parent">
        <div className="dealer-pricing-gallery-subparent">
          <div className="container">
            <div className="dealer-pricing-gallery-section-title">
              <h1 ref={ref} className={`fade-in-section ${isVisible ? "visible" : ""}`}>Gallery</h1>
            </div>
            <div className="dealer-pricing-gallery-images">
              <div className="row">
                <div className="col-md-7">
                  <div className="left-image">
                    <img ref={ref} className={`fade-in-section ${isVisible ? "visible" : ""}`} src="/dealer-pricing-images/left-image.avif" alt="" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="right-image">
                    <img
                      ref={ref} className={`fade-in-section ${isVisible ? "visible" : ""}`}
                      src="/dealer-pricing-images/about-banner.avif"
                      alt=""
                    />
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

export default DealerPricingGallery;
