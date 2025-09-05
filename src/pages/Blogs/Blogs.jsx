/* eslint-disable no-unused-vars */
import React from "react";
import Blogsbanner from "../Blogs/BlogsBanner";
import Footer from "../../components/Common/Footer";
import Blogscontentcards from "../Blogs/Blogscontentcards";
import { Helmet } from "react-helmet-async";
import FooterBottom from "../../components/Common/FooterBottom";
import TopBar from "../../components/Common/TopBar";
import CustomHeader from "../../components/Common/Header";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>
          Blogs | Importing American Cars to Australia & RHD Conversions | SCD
          Direct
        </title>
        <meta
          name="description"
          content="Explore SCD Direct’s blogs for expert insights on importing American cars to Australia, RHD conversions, and ADR compliance made simple."
          data-rh="true"
        />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <Blogsbanner />
      <Blogscontentcards />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Blogs;
