import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThree from "../BlogsSingle/BlogThree";
const BlogContentThree = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Understanding ADR Compliance for Imported American Vehicles</title>
        <meta
          name="description"
          content="Understanding ADR compliance for imported American vehicles is essential. SCD Direct breaks down rules, mods & approvals to keep your import fully road-legal."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/understanding-adr-compliance-for-imported-american-vehicles.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThree />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThree;
