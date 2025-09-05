import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwo from "../BlogsSingle/BlogTwo";
const BlogContentTwo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>A Complete Guide to Shipping American Vehicles to Australia</title>
        <meta
          name="description"
          content="Shipping American vehicles to Australia is easier than ever with SCD Direct. Learn costs, steps, and compliance in this complete, expert-backed guide."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/a-complete-guide-to-shipping-american-vehicles-to-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTwo />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwo;
