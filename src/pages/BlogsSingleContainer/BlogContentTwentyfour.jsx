import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwentyfour from "../BlogsSingle/BlogTwentyfour";
const BlogContentTwentyfour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Buy American Trucks in Australia – 2025 Comprehensive Guide</title>
        <meta
          name="description"
          content=": Learn how to buy American trucks in Australia, including import, RHD conversion, ADR compliance, towing capabilities, and finance options."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/buy-american-trucks-in-australia-a-complete-guide.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTwentyfour />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwentyfour;
