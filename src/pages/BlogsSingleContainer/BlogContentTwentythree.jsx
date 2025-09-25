import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwentythree from "../BlogsSingle/BlogTwentythree";
const BlogContentTwentythree = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>ADR Compliance Trucks Australia – RHD Conversion & Safety Standards</title>
        <meta
          name="description"
          content=": Ensure your American truck is ADR compliant in Australia. Learn about RHD conversion, safety regulations, and road-legal requirements with SCD Direct."
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

      <BlogTwentythree />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwentythree;
