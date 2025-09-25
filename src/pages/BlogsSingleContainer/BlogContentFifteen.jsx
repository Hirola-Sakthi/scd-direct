import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogFifteen from "../BlogsSingle/BlogFifteen";
const BlogContentFifteen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>RAM 1500, 2500, 3500 – Best Towing Truck for Australia</title>
        <meta
          name="description"
          content=": Compare RAM 1500, 2500, and 3500 for towing in Australia. Get expert advice on RHD conversions, ADR compliance, and towing capacity."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/ram-1500-2500-or-3500-choosing-the-right-ram-truck-for-towing-in-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogFifteen />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentFifteen;
