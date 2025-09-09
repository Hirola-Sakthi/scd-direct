import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogEleven from "../BlogsSingle/BlogEleven";
const BlogContentEleven = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Tips for a Smooth Vehicle Shipping Experience from the USA to Australia</title>
        <meta
          name="description"
          content=": Shipping a car from the USA to Australia? SCD Direct shares expert tips for smooth vehicle shipping, covering costs, compliance, and stress-free delivery."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/tips-for-a-smooth-vehicle-shipping-experience-from-the-usa-to-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogEleven />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentEleven;
