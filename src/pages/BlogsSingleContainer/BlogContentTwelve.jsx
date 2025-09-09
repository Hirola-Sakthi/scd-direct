import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import CustomHeader from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import TopBar from "../../components/Common/TopBar";
import BlogTwelve from "../BlogsSingle/BlogTwelve";
const BlogContentTwelve = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Why More Australians Are Choosing American Pickup Trucks</title>
        <meta
          name="description"
          content=": More Australians are choosing American pickup trucks for power, style, and utility. Learn why U.S. trucks are in demand and how SCD Direct makes importing easy."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <div style={{ height: "500px", overflow: "hidden" }}>
        <img
          src="/blogs/why-more-australians-are-choosing-american-pickup-trucks.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <BlogTwelve />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default BlogContentTwelve;
