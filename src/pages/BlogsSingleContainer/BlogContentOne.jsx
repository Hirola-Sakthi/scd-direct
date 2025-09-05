import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import BlogOne from "../BlogsSingle/BlogOne";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
const BlogContentOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Choosing the Right American Car Importer in Australia</title>
        <meta
          name="description"
          content="Looking for the best American car importer in Australia? SCD Direct delivers expert service, ADR compliance & seamless imports you can trust from start to finish."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/choosing-the-right-american-car-importer-in-australia.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogOne />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentOne;
