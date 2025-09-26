import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogFourty from "../BlogsSingle/BlogFourty";
const BlogContentFourty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Chevrolet Silverado Australia – RHD Conversion, ADR Compliance & Import Guide</title>
        <meta
          name="description"
          content=": Explore Chevrolet Silverado in Australia. Learn about RHD conversion, ADR compliance, towing, and importing American trucks with SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/chevrolet-silverado-australia-import-rhd-conversion-&-adr-compliance.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogFourty />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentFourty;
