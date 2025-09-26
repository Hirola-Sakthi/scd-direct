import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogFourtyone from "../BlogsSingle/BlogFourtyone";
const BlogContentFourtyOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Chevrolet Silverado RHD Australia – Conversion, ADR Compliance & Import Guide</title>
        <meta
          name="description"
          content=": Discover Chevrolet Silverado RHD trucks in Australia. Learn about RHD conversion, ADR compliance, towing, and import services with SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/chevrolet-silverado-rhd-import-conversion-&-adr-compliance-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogFourtyone />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentFourtyOne;
