import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogEighteen from "../BlogsSingle/BlogEighteen";
const BlogContentEighteen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Right Hand Drive Conversions QLD – RHD American Trucks & ADR Compliance</title>
        <meta
          name="description"
          content=": Expert RHD conversions in QLD for American trucks. Ensure ADR compliance, towing readiness, and road-legal safety with SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/right-hand-drive-conversions-qld-american-trucks-made-road-legal.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogEighteen />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentEighteen;
