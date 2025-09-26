import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThirtyseven from "../BlogsSingle/BlogThirtyseven";
const BlogContentThirtyseven = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Ram Trucks Australia – RHD Conversion, Towing & Import Guide</title>
        <meta
          name="description"
          content=": Explore Ram trucks in Australia. Learn about RHD conversion, ADR compliance, towing capabilities, and importing American trucks with SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/ram-trucks-australia-power-towing-&-rhd-conversion-guide.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThirtyseven />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThirtyseven;
