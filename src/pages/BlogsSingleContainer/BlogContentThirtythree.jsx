import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThirtythree from "../BlogsSingle/BlogThirtythree";
const BlogContentThirtythree = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>American Truck Compliance in Australia | ADR, RHD Conversion & Safety Standards</title>
        <meta
          name="description"
          content=": Ensure your American truck meets ADR compliance in Australia. Learn about RHD conversion, safety regulations, and road-legal requirements with SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/american-truck-compliance-adr-rhd-conversion-&-road-safety-in-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThirtythree />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThirtythree;
