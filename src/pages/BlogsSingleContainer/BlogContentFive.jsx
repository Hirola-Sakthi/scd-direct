import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogFive from "../BlogsSingle/BlogFive";
const BlogContentFive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Why Importing American Vehicles to Australia Is Easier with SCD Direct</title>
        <meta
          name="description"
          content="Importing American vehicles to Australia is simple with SCD Direct—offering expert compliance, fast delivery & seamless service tailored to Aussie roads."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/why-importing-american-vehicles-to-australia-is-easier-with-scd-direct.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogFive />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentFive;
