import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwentysix from "../BlogsSingle/BlogTwentysix";
const BlogContentTwentysix = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Right-Hand Drive American Trucks Australia – Conversion & Compliance</title>
        <meta
          name="description"
          content=": Learn how to convert American trucks to right-hand drive in Australia. ADR compliance, RHD conversion, and import tips by SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/right-hand-drive-american-trucks-import-conversion-&-compliance-guide.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTwentysix />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwentysix;
