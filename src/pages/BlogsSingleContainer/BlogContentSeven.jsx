import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogSeven from "../BlogsSingle/BlogSeven";
const BlogContentSeven = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>How to Import Cars from Australia | Complete Guide with SCD Direct</title>
        <meta
          name="description"
          content=": Explore how to import cars from Australia step by step. SCD Direct’s guide explains the process, costs, and key tips for a smooth car import experience."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/how-to-import-cars-from-australia-complete-guide-with-scd-direct.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogSeven />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentSeven;
