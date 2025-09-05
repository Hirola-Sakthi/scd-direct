import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TopBar from "../components/Common/TopBar";
import CustomHeader from "../components/Common/Header";
import FordSuperDutyCabChassisBanner from "../components/FordSuperDuty/FordSuperDutyCabChassisVarients/FordSuperDutyCabChassisBanner";
import FordSuperDutyCabChassisVarients from "../components/FordSuperDuty/FordSuperDutyCabChassisVarients/FordSuperDutyCabChassisVarients";
import Footer from "../components/Common/Footer";
import FooterBottom from "../components/Common/FooterBottom";
import { Helmet } from "react-helmet-async";

const fadeInVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FordSuperDutyCabChassis = () => {
  const seoData = {
    title: "Ford Super Duty Cab Chassis Models | Heavy-Duty Pickup | SCD Direct",
    description:
      "Looking for a tough workhorse? Ford Super Duty Chassis Cab models offer heavy-duty performance and flexibility, fully prepared for import and Aussie conditions.",
    canonicalUrl: "https://scddirect.com.au/ford-super-duty-cab-chassis",
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
        <FordSuperDutyCabChassisBanner />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <FordSuperDutyCabChassisVarients />
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

export default FordSuperDutyCabChassis;
