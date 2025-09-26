import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThirtyeight from "../BlogsSingle/BlogThirtyeight";
const BlogContentThirtyeight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>RHD American Trucks Australia – Conversion, ADR Compliance & Import</title>
        <meta
          name="description"
          content=": Discover RHD American trucks in Australia. Learn about import, RHD conversion, ADR compliance, and top truck models like Ford, RAM, and Chevrolet."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/rhd-american-trucks-australia-import-conversion-compliance-guide.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThirtyeight />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThirtyeight;
