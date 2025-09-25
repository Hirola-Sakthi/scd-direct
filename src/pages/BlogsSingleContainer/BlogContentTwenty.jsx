import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwenty from "../BlogsSingle/BlogTwenty";
const BlogContentTwenty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Truck Conversion Specialists Australia – RHD Conversion & ADR Compliance</title>
        <meta
          name="description"
          content=": Expert truck conversion specialists in Australia. RHD conversion, ADR compliance, and towing solutions for American trucks by SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/truck-conversion-specialists-australia-rhd-conversion-&-adr-compliance.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTwenty />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwenty;
