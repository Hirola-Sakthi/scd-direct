import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogNineteen from "../BlogsSingle/BlogNineteen";
const BlogContentNineteen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>RHD Conversions in Australia – Right Hand Drive Truck Guide</title>
        <meta
          name="description"
          content=": Learn how left-hand drive trucks are converted to right-hand drive in Australia. Get costs, process, and compliance details for Ford, Ram & Chevy."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/right-hand-drive-conversions-in-australia-everything-you-need-to-know.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogNineteen />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentNineteen;
