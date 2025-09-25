import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThirtytwo from "../BlogsSingle/BlogThirtytwo";
const BlogContentThirtytwo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Best American Truck Accessories & Upgrades for Australia</title>
        <meta
          name="description"
          content=": Explore top accessories and upgrades for American trucks in Australia. Enhance your Ford, RAM, or Chevrolet truck for towing, off-road, and daily driving."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/top-american-truck-accessories-and-upgrades-for-australian-roads.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThirtytwo />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThirtytwo;
