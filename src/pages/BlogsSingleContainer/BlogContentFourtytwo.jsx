import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogFourtytwo from "../BlogsSingle/BlogFourtytwo";
const BlogContentFourtytwo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Import American Trucks Australia – RHD Conversion & ADR Compliance</title>
        <meta
          name="description"
          content=": Learn how to import American trucks to Australia. RHD conversion, ADR compliance, towing, and registration services by SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/import-american-trucks-australia-rhd-conversion-&-adr-compliance.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogFourtytwo />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentFourtytwo;
