import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThirty from "../BlogsSingle/Blogthirty";
const BlogContentThirty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Maintaining Imported American Trucks in Australia – Tips & Advice</title>
        <meta
          name="description"
          content=": Learn essential tips for maintaining imported American trucks in Australia. Keep your Ford, RAM, or Chevrolet truck RHD and ADR-compliant."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/tips-for-maintaining-imported-american-trucks-in-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThirty />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThirty;
