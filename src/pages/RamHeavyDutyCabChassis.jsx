import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TopBar from "../components/Common/TopBar";
import CustomHeader from "../components/Common/Header";
import RamHeavyDutyCabChassisVarientsBanner from "../components/RamHeavyDuty/RamHeavyDutyCabChassisVarients/RamHeavyDutyCabChassisVarientsBanner";
import RamHeavyDutyCabChassisVarients from "../components/RamHeavyDuty/RamHeavyDutyCabChassisVarients/RamHeavyDutyCabChassisVarients";
import Footer from "../components/Common/Footer";
import FooterBottom from "../components/Common/FooterBottom";
import { Helmet } from "react-helmet-async";

const fadeInVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const RamHeavyDutyCabChassis = () => {
  const seoData = {
    title: "RAM Heavy Duty Cab Chassis Models | Variants & Trucks | SCD Direct",
    description:
      "RAM Heavy Duty pickup trucks are built for power and performance. Perfect for tough jobs and heavy towing—import yours and drive with confidence in Australia.",
    canonicalUrl: "https://scddirect.com.au/ram-heavy-duty-cab-chassis",
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
        <RamHeavyDutyCabChassisVarientsBanner />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <RamHeavyDutyCabChassisVarients />
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

export default RamHeavyDutyCabChassis;
