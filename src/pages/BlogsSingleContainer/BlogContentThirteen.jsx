import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThirteen from "../BlogsSingle/BlogThirteen";
const BlogContentThirteen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>ADR Compliance Guide – Importing American Trucks in Australia</title>
        <meta
          name="description"
          content=": Understand ADR compliance for American trucks in Australia. A complete guide to vehicle conversion, safety standards, and registration rules."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/adr-compliance-explained-importing-and-converting-american-trucks-in-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThirteen />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThirteen;
