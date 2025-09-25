import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThirtyone from "../BlogsSingle/BlogThirtyone";
const BlogContentThirtyone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>How to Import American Trucks to Australia – Costs & Rules 2025</title>
        <meta
          name="description"
          content=": Learn how to import American trucks to Australia. Discover costs, ADR compliance rules, and best cities for RHD conversions and registration."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/how-to-import-american-trucks-to-astralia-costs-rules-&-best-cities.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThirtyone />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThirtyone;
