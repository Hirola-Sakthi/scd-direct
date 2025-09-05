import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TopBar from "../components/Common/TopBar";
import CustomHeader from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import FooterBottom from "../components/Common/FooterBottom";
import RamHeavyDuty2500and3500VarientsMain from "../components/RamHeavyDuty/RamHeavyDuty2500and3500Varients/RamHeavyDuty2500and3500VarientsMain";
import RamHeavyDutyCabChassisVarientsMain from "../components/RamHeavyDuty/RamHeavyDutyCabChassisVarients/RamHeavyDutyCabChassisVarientsMain";
import { Helmet } from "react-helmet-async";

const fadeInVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const RamHeavyDutyMainPage = () => {
  const seoData = {
    title: "RAM Heavy Duty | Best for Importing and Towing | SCD Direct",
    description:
      "Looking to import a RAM Heavy Duty? It's the best choice for serious towing in Australia. We handle compliance, conversion, and fast, hassle-free delivery.",
    canonicalUrl: "https://scddirect.com.au/ram-heavy-duty",
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
        <RamHeavyDuty2500and3500VarientsMain />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <RamHeavyDutyCabChassisVarientsMain />
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

export default RamHeavyDutyMainPage;
