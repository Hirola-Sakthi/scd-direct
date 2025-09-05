import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TopBar from "../components/Common/TopBar";
import CustomHeader from "../components/Common/Header";
import RamHeavyDuty2500and3500VarientsBanner from "../components/RamHeavyDuty/RamHeavyDuty2500and3500Varients/RamHeavyDuty2500and3500VarientsBanner";
import RamHeavyDuty2500and3500Varients from "../components/RamHeavyDuty/RamHeavyDuty2500and3500Varients/RamHeavyDuty2500and3500Varients";
import Footer from "../components/Common/Footer";
import FooterBottom from "../components/Common/FooterBottom";
import { Helmet } from "react-helmet-async";

const fadeInVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const RamHeavyDuty2025and3500 = () => {
  const seoData = {
    title: "RAM Heavy Duty Pickup Models | Power, Towing & Performance | SCD Direct",
    description:
      "Looking for unmatched strength? RAM Heavy Duty pickup trucks offer powerful towing, rugged design, and performance perfect for importing to Australia.",
    canonicalUrl: "https://scddirect.com.au/ram-heavy-duty-2500-and-3500",
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
        <RamHeavyDuty2500and3500VarientsBanner />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <RamHeavyDuty2500and3500Varients />
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

export default RamHeavyDuty2025and3500;
