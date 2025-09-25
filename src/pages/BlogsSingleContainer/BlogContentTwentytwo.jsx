import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwentytwo from "../BlogsSingle/BlogTwentytwo";
const BlogContentTwentytwo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>American Trucks in Australia – Top Models & Rising Popularity [2025]</title>
        <meta
          name="description"
          content=": Discover why American trucks are gaining popularity in Australia. Explore the best Ford, Ram & Chevrolet models available in RHD conversions."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/why-american-trucks-are-becoming-popular-in-australia-top-models-to-watch.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTwentytwo />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwentytwo;
