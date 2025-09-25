import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwentyeight from "../BlogsSingle/BlogTwentyeight";
const BlogContentTwentyeight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Ford Truck Conversion Australia – RHD, ADR Compliance & Import Guide</title>
        <meta
          name="description"
          content=": Learn how to convert Ford trucks in Australia. RHD conversion, ADR compliance, towing, and import services by SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/ford-truck-conversion-australia-rhd-adr-compliance-&-road-ready-trucks.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTwentyeight />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwentyeight;
