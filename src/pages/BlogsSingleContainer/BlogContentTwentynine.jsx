import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwentynine from "../BlogsSingle/BlogTwentynine";
const BlogContentTwentynine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>American Truck Prices in Australia – 2025 Guide</title>
        <meta
          name="description"
          content=": Discover the cost of American trucks in Australia, including RHD conversion, ADR compliance, and finance options. Learn about American truck conversion costs."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/how-much-do-american-trucks-cost-in-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTwentynine />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwentynine;
