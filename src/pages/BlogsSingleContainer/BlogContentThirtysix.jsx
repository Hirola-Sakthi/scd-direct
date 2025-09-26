import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogThirtysix from "../BlogsSingle/BlogThirtysix";
const BlogContentThirtysix = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Ford F150 Australia – RHD Conversion, ADR Compliance & Import Guide</title>
        <meta
          name="description"
          content=": Discover Ford F150 in Australia. Learn about import, RHD conversion, ADR compliance, towing capability, and options with SCD Direct."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/ford-f150-australia-import-rhd-conversion-&-towing-guide.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogThirtysix />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentThirtysix;
