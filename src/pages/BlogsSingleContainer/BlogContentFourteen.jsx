import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogFourteen from "../BlogsSingle/BlogFourteen";
const BlogContentFourteen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Ford F-150 vs F-250 RHD Conversion in Australia – Comparison</title>
        <meta
          name="description"
          content=": Compare Ford F-150 and F-250 right-hand drive conversions in Australia. Find out towing capacity, costs, and the best truck for your needs."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/ford-f-150-vs-f-250-which-rhd-conversion-is-best-for-australian-roads.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogFourteen />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentFourteen;
