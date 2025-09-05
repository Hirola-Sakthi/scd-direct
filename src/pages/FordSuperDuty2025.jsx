import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TopBar from "../components/Common/TopBar";
import CustomHeader from "../components/Common/Header";
import FordSD2025VarientBanner from "../components/FordSuperDuty/FordSuperDuty2025Varients/FordSD2025VarientBanner";
import FordSuperDuty2025Varients from "../components/FordSuperDuty/FordSuperDuty2025Varients/FordSuperDuty2025Varients";
import Footer from "../components/Common/Footer";
import FooterBottom from "../components/Common/FooterBottom";
import { Helmet } from "react-helmet-async";

const fadeInVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FordSuperDuty2025 = () => {
  const seoData = {
    title: "Ford Super Duty Pickup Models | Explore Available Variants | SCD Direct",
    description:
      "Explore the range of Ford Super Duty Pickup models available for import. Built for strength, ready for work, and converted for Aussie roads and conditions.",
    canonicalUrl: "https://scddirect.com.au/ford-super-duty-2025",
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
        <FordSD2025VarientBanner />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <FordSuperDuty2025Varients />
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

export default FordSuperDuty2025;
