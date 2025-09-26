import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThirtynine from "../BlogsSingle/BlogThirtynine";
const BlogContentThirtynine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>RAmerican Trucks Buyer’s Guide Australia – 2025 Edition</title>
        <meta
          name="description"
          content=": Complete buyer’s guide to American trucks in Australia. Learn about ADR compliance, RHD conversions, towing capacity, and top brands."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/the-complete-buyer’s-guide-to-america-trucks-in-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThirtynine />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThirtynine;
