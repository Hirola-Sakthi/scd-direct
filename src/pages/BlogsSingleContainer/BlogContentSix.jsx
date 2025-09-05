import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogSix from "../BlogsSingle/BlogSix";
const BlogContentSix = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Why Right-Hand Drive Conversion Matters for Imported Vehicles</title>
        <meta
          name="description"
          content="Understand the importance of right-hand drive conversion for imported vehicles. SCD Direct ensures compliance, comfort, and road safety across Australia."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/why-right-hand-drive-conversion-matters-for-imported-vehicles.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogSix />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentSix;
