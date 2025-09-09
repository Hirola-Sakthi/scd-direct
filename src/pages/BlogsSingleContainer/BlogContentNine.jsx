import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogNine from "../BlogsSingle/BlogNine";
const BlogContentNine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>ADR Compliance in Australia | What Every Vehicle Importer Should Know</title>
        <meta
          name="description"
          content=": Learn ADR compliance in Australia with SCD Direct. Discover vehicle import rules, standards, and everything importers need to stay legal and compliant."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/adr-compliance-in-australia-what-every-vehicle-importer-should-know.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogNine />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentNine;
