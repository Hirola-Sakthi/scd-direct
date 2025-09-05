import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogFour from "../BlogsSingle/BlogFour";
const BlogContentFour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Why American Vehicles Are Perfect for Australian Roads and Conditions</title>
        <meta
          name="description"
          content="Explore why American vehicles are ideal for Australian roads—powerful, durable, and built for tough conditions. SCD Direct makes importing them easy."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/why-american-vehicles-are-perfect-for-australian-roads-and-conditions.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogFour />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentFour;
