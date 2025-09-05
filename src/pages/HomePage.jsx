/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import CustomHeader from "../components/Common/Header";
import { motion } from "framer-motion";
import Banner from "../components/Home/Banner";
import TopBar from "../components/Common/TopBar";
import AboutHome from "../components/Home/AboutHome";
import ScdDifference from "../components/Home/ScdDifference";
import AlternateSection from "../components/Home/AlternateSection";
import AlternateSectionTwo from "../components/Home/AlternateSectionTwo";
import ComingSoon from "../components/Home/ComingSoon";
import Footer from "../components/Common/Footer";
import FooterBottom from "../components/Common/FooterBottom";
import OurVehicles from "../components/Home/OurVehicles";
import { Helmet } from "react-helmet-async";

const fadeInVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HomePage = () => {
  const seoData = {
    title: "SCD Direct | American Car Imports, Right Hand Conversion in Australia",
    description:
      "Looking for American Car Imports, Right Hand Conversion in Australia? We specialize in legal, high-quality conversions to meet all Australian road standards.",
    keywords: "about us, company history, automotive, truck conversion",
    canonicalUrl: "https://scddirect.com.au/",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonicalUrl} />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
      </Helmet>
      <div>
        <TopBar />
        <CustomHeader />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          viewport={{ once: true }}
        >
          <Banner />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          viewport={{ once: true }}
        >
          <AboutHome />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          viewport={{ once: true }}
        >
          <ComingSoon />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          viewport={{ once: true }}
        >
          <ScdDifference />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          viewport={{ once: true }}
        >
          <AlternateSection />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          viewport={{ once: true }}
        >
          <AlternateSectionTwo />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          viewport={{ once: true }}
        >
          <OurVehicles />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.div>
        <FooterBottom />
      </div>
    </>
  );
};

export default HomePage;
