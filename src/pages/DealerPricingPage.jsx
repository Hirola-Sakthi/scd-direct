import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TopBar from "../components/Common/TopBar";
import CustomHeader from "../components/Common/Header";
import DealerPricingAbout from "../components/DealerPricing/DealerPricingAbout";
import DealerPricingBanner from "../components/DealerPricing/DealerPricingBanner";
import Footer from "../components/Common/Footer";
import FooterBottom from "../components/Common/FooterBottom";
import HummerComingSoon from "../components/ComingSoon/HummerComingSoon";
import Ram1500RevComingSoon from "../components/ComingSoon/Ram1500RevComingSoon";
import { Helmet } from "react-helmet-async";

const fadeInVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DealerPricingPage = () => {
  const seoData = {
    title: "Special Dealer Pricing on American Car Imports | SCD Direct",
    description:
      "Unlock Special dealer pricing on American car imports! Get the best deals on top US models with hassle-free importing. Drive your dream car for less!",
    canonicalUrl: "https://scddirect.com.au/dealer-pricing",
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
        <DealerPricingBanner />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <DealerPricingAbout />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <HummerComingSoon />
      </motion.div>
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <Ram1500RevComingSoon />
      </motion.div> */}
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

export default DealerPricingPage;
