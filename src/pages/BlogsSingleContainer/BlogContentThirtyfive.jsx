import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThirtyfive from "../BlogsSingle/BlogThirtyfive";
const BlogContentThirtyfive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Chevrolet Silverado & GMC Sierra RHD Conversions Australia</title>
        <meta
          name="description"
          content=": Get expert RHD conversions for Chevrolet Silverado and GMC Sierra in Australia. Learn about ADR compliance, costs, and benefits."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/chevrolet-silverado-and-gmc-sierra-right-hand-drive-conversions-in-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThirtyfive />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThirtyfive;
