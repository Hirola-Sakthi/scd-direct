import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThirtyfour from "../BlogsSingle/BlogThirtyfour";
const BlogContentThirtyfour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Best American Trucks for Caravan Towing in Australia 2025</title>
        <meta
          name="description"
          content=": Discover the top American trucks for caravan towing in Australia. Compare Ford, RAM, and Chevrolet models with RHD conversions and ADR compliance."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/best-american-trucks-for-caravan-towing-in-australia-2025-Guide.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThirtyfour />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThirtyfour;
