import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogSeventeen from "../BlogsSingle/BlogSeventeen";
const BlogContentSeventeen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>RHD Conversion Sydney – American Trucks & ADR Compliance</title>
        <meta
          name="description"
          content=": Expert RHD conversions in Sydney for American trucks. ADR compliance, towing readiness, and road-legal safety with SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/rhd-conversion-sydney-professional-american-truck-conversions.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogSeventeen />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentSeventeen;
