import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwentyone from "../BlogsSingle/BlogTwentyone";
const BlogContentTwentyone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Vehicle Compliance Australia – RHD Conversion & ADR Certification</title>
        <meta
          name="description"
          content=": Ensure your American truck meets vehicle compliance standards in Australia. Learn about RHD conversion, ADR compliance, and registration with SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/vehicle-compliance-australia-import-rhd-conversion-&-adr-standards.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTwentyone />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwentyone;
