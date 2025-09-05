import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TopBar from "../components/Common/TopBar";
import CustomHeader from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import FooterBottom from "../components/Common/FooterBottom";
import Ram1500rhoMain from "../components/Ram1500RHO/Ram1500rhoMain";
import Ram1500TungstenMain from "../components/Ram1500RHO/Ram1500TungstenMain";
import { Helmet } from "react-helmet-async";

const fadeInVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Ram1500RHOPage = () => {
  const seoData = {
    title: "RAM 1500 RHO | Vehicle Importers in Australia | SCD Direct",
    description:
      "Looking for the RAM 1500 RHO? Our vehicle importers in Australia specialize in US trucks, offering compliance, conversion, and stress-free importing services.",
    canonicalUrl: "https://scddirect.com.au/ram-1500-rho",
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
      <TopBar />
      <CustomHeader />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <Ram1500rhoMain />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <Ram1500TungstenMain />
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
    </>
  );
};

export default Ram1500RHOPage;
