import React, { useEffect, useRef, useState } from "react";

const ADRComplianceBannerBelow = () => {
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
      <div className="adr-compliance-banner-below-parent">
        <div className="adr-compliance-banner-below-subparent">
          <div className="container">
            {/* <div className="subtitle">
              <h4>Coming Soon</h4>
            </div> */}
            {/* <div className="title">
              <h1>Exciting things are coming</h1>
            </div> */}
            <div className="description">
              <p ref={ref} className={`fade-in-section ${isVisible ? "visible" : ""}`}>
                As specialists in ADR (Australian Design Rules) Compliance with
                a network of Australia’s top compliance engineers, SCD Direct
                will ensure your vehicle meets the rigorous safety,
                environmental, and performance standards required for Australian
                roads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ADRComplianceBannerBelow;
