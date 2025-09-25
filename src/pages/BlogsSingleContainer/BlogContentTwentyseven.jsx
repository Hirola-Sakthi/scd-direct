import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwentyseven from "../BlogsSingle/BlogTwentyseven";
const BlogContentTwentyseven = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>American Trucks in Australia – Import, RHD Conversion & Towing Guide</title>
        <meta
          name="description"
          content=": Explore American trucks in Australia. Learn about import processes, RHD conversions, ADR compliance, and top models for towing and work."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/american-trucks-australia-everything-you-need-to-know.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTwentyseven />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwentyseven;
