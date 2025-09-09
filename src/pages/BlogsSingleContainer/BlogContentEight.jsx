import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogEight from "../BlogsSingle/BlogEight";
const BlogContentEight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Right-Hand Drive Conversions in Australia | What You Need to Know</title>
        <meta
          name="description"
          content=": Explore right-hand drive conversions in Australia with SCD Direct. Understand the process, costs, and compliance steps to ensure a safe, legal conversion."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/right-hand-drive-conversions-in-australia-what-you-need-to-know.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogEight />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentEight;
