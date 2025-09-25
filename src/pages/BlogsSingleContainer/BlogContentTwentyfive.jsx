import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwentyfive from "../BlogsSingle/BlogTwentyfive";
const BlogContentTwentyfive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Ford F250 RHD Conversion Australia – ADR Compliance & Import Guide</title>
        <meta
          name="description"
          content=": Learn how to convert Ford F250 trucks to RHD in Australia. ADR compliance, import process, towing, and upgrades explained by SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/ford-f-250-rhd-conversion-import-compliance-&-road-ready-guide.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTwentyfive />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwentyfive;
