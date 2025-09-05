import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TopBar from "../components/Common/TopBar";
import CustomHeader from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import FooterBottom from "../components/Common/FooterBottom";
import ContactUsBanner from "../components/ContactUs/ContactUsBanner";
import ContactUsInfo from "../components/ContactUs/ContactUsInfo";
import ContactUsForm from "../components/ContactUs/ContactUsForm";
import ContactUsMap from "../components/ContactUs/ContactUsMap";
import { Helmet } from "react-helmet-async";

const fadeInVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ContactUsPage = () => {
  const seoData = {
    title: "About Us | Your Company Name",
    description:
      "Learn about our company history, mission, values and the team behind Your Company Name.",
    keywords: "about us, company history, automotive, truck conversion",
    canonicalUrl: "https://yourwebsite.com/about-us",
    ogImage: "https://yourwebsite.com/images/about-us-og.jpg",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
      </Helmet>
      <TopBar />
      <CustomHeader />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <ContactUsBanner />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <ContactUsInfo />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <ContactUsForm />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: true }}
      >
        <ContactUsMap />
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

export default ContactUsPage;
