import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTen from "../BlogsSingle/BlogTen";
const BlogContentTen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>How to Avoid Common Mistakes When Importing Cars to Australia</title>
        <meta
          name="description"
          content=": Learn the top mistakes to avoid when importing cars to Australia. SCD Direct helps you navigate rules, costs, and compliance for a smooth import experience."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/how-to-avoid-common-mistakes-when-importing-cars-to-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTen />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTen;
