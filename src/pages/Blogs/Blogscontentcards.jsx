import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Blogscontentcards = ({ filterLink }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const homeBlogsRef = useRef(null);
  const blogsPerPage = 9;

  const scrollToTop = () => {
    if (homeBlogsRef.current) {
      homeBlogsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const blogData = [
    {
      title: "Choosing the Right American Car Importer in Australia",
      date: "2 July 2025",
      description:
        "Looking for the best American car importer in Australia? SCD Direct delivers expert service, ADR compliance & seamless imports you can trust from start to finish.",
      image: "/blogs/choosing-the-right-american-car-importer-in-australia.png",
      link: "/choosing-the-right-american-car-importer-in-australia",
    },
    {
      title: "A Complete Guide to Shipping American Vehicles to Australia",
      date: "14 July 2025",
      description:
        "Shipping American vehicles to Australia is easier than ever with SCD Direct. Learn costs, steps, and compliance in this complete, expert-backed guide.",
      image:
        "/blogs/a-complete-guide-to-shipping-american-vehicles-to-australia.png",
      link: "/a-complete-guide-to-shipping-american-vehicles-to-australia",
    },
    {
      title: "Understanding ADR Compliance for Imported American Vehicles",
      date: "25 July 2025",
      description:
        "Understanding ADR compliance for imported American vehicles is essential. SCD Direct breaks down rules, mods & approvals to keep your import fully road-legal.",
      image:
        "/blogs/understanding-adr-compliance-for-imported-american-vehicles.png",
      link: "/understanding-adr-compliance-for-imported-american-vehicles",
    },
    {
      title:
        "Why American Vehicles Are Perfect for Australian Roads and Conditions",
      date: "5 August 2025",
      description:
        "Explore why American vehicles are ideal for Australian roads—powerful, durable, and built for tough conditions. SCD Direct makes importing them easy.",
      image:
        "/blogs/why-american-vehicles-are-perfect-for-australian-roads-and-conditions.png",
      link: "/why-american-vehicles-are-perfect-for-australian-roads-and-conditions",
    },
    {
      title:
        "Why Importing American Vehicles to Australia Is Easier with SCD Direct",
      date: "7 August 2025",
      description:
        "Importing American vehicles to Australia is simple with SCD Direct—offering expert compliance, fast delivery & seamless service tailored to Aussie roads.",
      image:
        "/blogs/why-importing-american-vehicles-to-australia-is-easier-with-scd-direct.png",
      link: "/why-importing-american-vehicles-to-australia-is-easier-with-scd-direct",
    },
    {
      title: "Why Right-Hand Drive Conversion Matters for Imported Vehicles",
      date: "9 August 2025",
      description:
        "Understand the importance of right-hand drive conversion for imported vehicles. SCD Direct ensures compliance, comfort, and road safety across Australia.",
      image:
        "/blogs/why-right-hand-drive-conversion-matters-for-imported-vehicles.png",
      link: "/why-right-hand-drive-conversion-matters-for-imported-vehicles",
    },
    {
      title:
        "How to Import Cars from Australia | Complete Guide with SCD Direct",
      date: "11 August 2025",
      description:
        "Explore how to import cars from Australia step by step. SCD Direct’s guide explains the process, costs, and key tips for a smooth car import experience.",
      image:
        "/blogs/how-to-import-cars-from-australia-complete-guide-with-scd-direct.png",
      link: "/how-to-import-cars-from-australia-guide-scd-direct",
    },
    {
      title:
        "Right-Hand Drive Conversions in Australia | What You Need to Know",
      date: "12 August 2025",
      description:
        "Explore right-hand drive conversions in Australia with SCD Direct. Understand the process, costs, and compliance steps to ensure a safe, legal conversion.",
      image:
        "/blogs/right-hand-drive-conversions-in-australia-what-you-need-to-know.png",
      link: "/right-hand-drive-conversions-australia-scd-direct",
    },
    {
      title:
        "ADR Compliance in Australia | What Every Vehicle Importer Should Know",
      date: "14 August 2025",
      description:
        "Learn ADR compliance in Australia with SCD Direct. Discover vehicle import rules, standards, and everything importers need to stay legal and compliant.",
      image:
        "/blogs/adr-compliance-in-australia-what-every-vehicle-importer-should-know.png",
      link: "/adr-compliance-australia-vehicle-importers-scd-direct",
    },
    {
      title: "How to Avoid Common Mistakes When Importing Cars to Australia",
      date: "16 August 2025",
      description:
        "Learn the top mistakes to avoid when importing cars to Australia. SCD Direct helps you navigate rules, costs, and compliance for a smooth import experience.",
      image:
        "/blogs/how-to-avoid-common-mistakes-when-importing-cars-to-australia.png",
      link: "/how-to-avoid-common-mistakes-when-importing-cars-to-australia",
    },
    {
      title:
        "Tips for a Smooth Vehicle Shipping Experience from the USA to Australia",
      date: "18 August 2025",
      description:
        "Shipping a car from the USA to Australia? SCD Direct shares expert tips for smooth vehicle shipping, covering costs, compliance, and stress-free delivery.",
      image:
        "/blogs/tips-for-a-smooth-vehicle-shipping-experience-from-the-usa-to-australia.png",
      link: "/tips-vehicle-shipping-usa-to-australia",
    },

    {
      title: "Why More Australians Are Choosing American Pickup Trucks",
      date: "20 August 2025",
      description:
        "More Australians are choosing American pickup trucks for power, style, and utility. Learn why U.S. trucks are in demand and how SCD Direct makes importing easy.",
      image:
        "/blogs/why-more-australians-are-choosing-american-pickup-trucks.png",
      link: "/australians-choosing-american-pickup-trucks",
    },

    {
      title:
        "ADR Compliance Explained: Importing and Converting American Trucks in Australia",
      date: "22 August 2025",
      description:
        "Understand ADR compliance for American trucks in Australia. A complete guide to vehicle conversion, safety standards, and registration rules.",
      image:
        "/blogs/adr-compliance-explained-importing-and-converting-american-trucks-in-australia.png",
      link: "/adr-compliance-importing-converting-american-trucks-australia",
    },

    {
      title:
        "Ford F-150 vs F-250: Which RHD Conversion is Best for Australian Roads?",
      date: "24 August 2025",
      description:
        "Compare Ford F-150 and F-250 right-hand drive conversions in Australia. Find out towing capacity, costs, and the best truck for your needs.",
      image:
        "/blogs/ford-f-150-vs-f-250-which-rhd-conversion-is-best-for-australian-roads.png",
      link: "/ford-f150-vs-f250-rhd-conversion-australia",
    },
    {
      title:
        "RAM 1500, 2500, or 3500? Choosing the Right RAM Truck for Towing in Australia",
      date: "26 August 2025",
      description:
        "Compare RAM 1500, 2500, and 3500 for towing in Australia. Get expert advice on RHD conversions, ADR compliance, and towing capacity.",
      image:
        "/blogs/ram-1500-2500-or-3500-choosing-the-right-ram-truck-for-towing-in-australia.png",
      link: "/ram-1500-2500-3500-towing-australia",
    },
    {
      title: "RHD Conversion Melbourne: American Trucks Made Road-Legal",
      date: "28 August 2025",
      description:
        "Expert RHD conversions in Melbourne for American trucks. ADR compliance, towing readiness, and road-legal safety with SCD Direct.",
      image:
        "/blogs/rhd-conversion-melbourne-american-trucks-made-road-legal.png",
      link: "/rhd-conversion-melbourne-american-trucks-adr-compliance",
    },
    {
      title: "RHD Conversion Sydney: Professional American Truck Conversions",
      date: "30 August 2025",
      description:
        "Expert RHD conversions in Sydney for American trucks. ADR compliance, towing readiness, and road-legal safety with SCD Direct.",
      image:
        "/blogs/rhd-conversion-sydney-professional-american-truck-conversions.png",
      link: "/rhd-conversion-sydney-american-trucks-and-adr-compliance",
    },
    {
      title:
        "Right Hand Drive Conversions QLD: American Trucks Made Road-Legal",
      date: "2 September 2025",
      description:
        "Expert RHD conversions in QLD for American trucks. Ensure ADR compliance, towing readiness, and road-legal safety with SCD Direct.",
      image:
        "/blogs/right-hand-drive-conversions-qld-american-trucks-made-road-legal.png",
      link: "/right-hand-drive-conversions-qld-rhd-american-trucks-adr-compliance",
    },
    {
      title:
        "Right-Hand Drive Conversions in Australia: Everything You Need to Know",
      date: "3 September 2025",
      description:
        "Learn how left-hand drive trucks are converted to right-hand drive in Australia. Get costs, process, and compliance details for Ford, Ram & Chevy.",
      image:
        "/blogs/right-hand-drive-conversions-in-australia-everything-you-need-to-know.png",
      link: "/right-hand-drive-conversions-australia-guide",
    },
    {
      title:
        "Truck Conversion Specialists Australia: RHD Conversion & ADR Compliance",
      date: "4 September 2025",
      description:
        "Expert truck conversion specialists in Australia. RHD conversion, ADR compliance, and towing solutions for American trucks by SCD Direct.",
      image:
        "/blogs/truck-conversion-specialists-australia-rhd-conversion-&-adr-compliance.png",
      link: "/truck-conversion-specialists-australia-rhd-adr-compliance",
    },
    {
      title:
        "Vehicle Compliance Australia: Import, RHD Conversion & ADR Standards",
      date: "5 September 2025",
      description:
        "Ensure your American truck meets vehicle compliance standards in Australia. Learn about RHD conversion, ADR compliance, and registration with SCD Direct.",
      image:
        "/blogs/vehicle-compliance-australia-import-rhd-conversion-&-adr-standards.png",
      link: "/vehicle-compliance-australia-rhd-adr-certification",
    },
    {
      title:
        "Why American Trucks Are Becoming Popular in Australia: Top Models to Watch",
      date: "6 September 2025",
      description:
        "Discover why American trucks are gaining popularity in Australia. Explore the best Ford, Ram & Chevrolet models available in RHD conversions.",
      image:
        "/blogs/why-american-trucks-are-becoming-popular-in-australia-top-models-to-watch.png",
      link: "/american-trucks-popularity-australia-top-models",
    },
    {
      title:
        "ADR Compliance Trucks Australia: RHD Conversion & Road Safety",
      date: "7 September 2025",
      description:
        "Ensure your American truck is ADR compliant in Australia. Learn about RHD conversion, safety regulations, and road-legal requirements with SCD Direct.",
      image:
        "/blogs/adr-compliance-trucks-australia-rhd-conversion-&-road-safety.png",
      link: "/adr-compliance-trucks-australia-rhd-conversion-safety-standards",
    },
    {
      title:
        "Buy American Trucks in Australia: A Complete Guide",
      date: "8 September 2025",
      description:
        "Learn how to buy American trucks in Australia, including import, RHD conversion, ADR compliance, towing capabilities, and finance options.",
      image:
        "/blogs/buy-american-trucks-in-australia-a-complete-guide.png",
      link: "/buy-american-trucks-australia-guide",
    },
    {
      title:
        "Ford F250 RHD Conversion: Import, Compliance & Road-Ready Guide",
      date: "9 September 2025",
      description:
        "Learn how to convert Ford F250 trucks to RHD in Australia. ADR compliance, import process, towing, and upgrades explained by SCD Direct.",
      image:
        "/blogs/ford-f-250-rhd-conversion-import-compliance-&-road-ready-guide.png",
      link: "/ford-f250-rhd-conversion-import-compliance-road-ready-guide",
    },
    {
      title:
        "Right-Hand Drive American Trucks Australia – Conversion & Compliance",
      date: "10 September 2025",
      description:
        "Learn how to convert American trucks to right-hand drive in Australia. ADR compliance, RHD conversion, and import tips by SCD Direct.",
      image:
        "/blogs/right-hand-drive-american-trucks-import-conversion-&-compliance-guide.png",
      link: "/right-hand-drive-american-trucks-import-conversion-compliance",
    },
    {
      title:
        "American Trucks Australia: Everything You Need to Know",
      date: "11 September 2025",
      description:
        "Explore American trucks in Australia. Learn about import processes, RHD conversions, ADR compliance, and top models for towing and work.",
      image:
        "/blogs/american-trucks-australia-everything-you-need-to-know.png",
      link: "/american-trucks-australia-guide",
    },
     {
      title:
        "Ford Truck Conversion Australia – RHD, ADR Compliance & Import Guide",
      date: "12 September 2025",
      description:
        "Learn how to convert Ford trucks in Australia. RHD conversion, ADR compliance, towing, and import services by SCD Direct.",
      image:
        "/blogs/ford-truck-conversion-australia-rhd-adr-compliance-&-road-ready-trucks.png",
      link: "/ford-truck-conversion-australia-rhd-adr-compliance-road-ready",
    },
    {
      title:
        "How Much Do American Trucks Cost in Australia?",
      date: "13 September 2025",
      description:
        "Discover the cost of American trucks in Australia, including RHD conversion, ADR compliance, and finance options. Learn about American truck conversion costs.",
      image:
        "/blogs/how-much-do-american-trucks-cost-in-australia.png",
      link: "/american-truck-prices-australia",
    },
    {
      title:
        "Maintaining Imported American Trucks in Australia – Tips & Advice",
      date: "14 September 2025",
      description:
        "Learn essential tips for maintaining imported American trucks in Australia. Keep your Ford, RAM, or Chevrolet truck RHD and ADR-compliant.",
      image:
        "/blogs/tips-for-maintaining-imported-american-trucks-in-australia.png",
      link: "/maintaining-imported-american-trucks-australia",
    },
    {
      title:
        "How to Import American Trucks to Australia: Costs, Rules & Best Cities",
      date: "15 September 2025",
      description:
        "Learn how to import American trucks to Australia. Discover costs, ADR compliance rules, and best cities for RHD conversions and registration.",
      image:
        "/blogs/how-to-import-american-trucks-to-astralia-costs-rules-&-best-cities.png",
      link: "/import-american-trucks-australia-costs-rules-cities",
    },
    {
      title:
        "Top American Truck Accessories and Upgrades for Australian Roads",
      date: "16 September 2025",
      description:
        "Explore top accessories and upgrades for American trucks in Australia. Enhance your Ford, RAM, or Chevrolet truck for towing, off-road, and daily driving.",
      image:
        "/blogs/top-american-truck-accessories-and-upgrades-for-australian-roads.png",
      link: "/top-american-truck-accessories-upgrades-australia",
    },
    {
      title:
        "American Truck Compliance ADR: RHD Conversion & Road Safety in Australia",
      date: "17 September 2025",
      description:
        "Ensure your American truck meets ADR compliance in Australia. Learn about RHD conversion, safety regulations, and road-legal requirements with SCD Direct.",
      image:
        "/blogs/american-truck-compliance-adr-rhd-conversion-&-road-safety-in-australia.png",
      link: "/american-truck-compliance-adr-rhd-conversion-safety-standards-australia",
    },
    {
      title:
        "Best American Trucks for Caravan Towing in Australia 2025",
      date: "18 September 2025",
      description:
        "Discover the top American trucks for caravan towing in Australia. Compare Ford, RAM, and Chevrolet models with RHD conversions and ADR compliance.",
      image:
        "/blogs/best-american-trucks-for-caravan-towing-in-australia-2025-Guide.png",
      link: "/best-american-trucks-caravan-towing-australia-2025",
    },
    {
      title:
        "Chevrolet Silverado and GMC Sierra: Right-Hand Drive Conversions in Australia",
      date: "19 September 2025",
      description:
        "Get expert RHD conversions for Chevrolet Silverado and GMC Sierra in Australia. Learn about ADR compliance, costs, and benefits.",
      image:
        "/blogs/chevrolet-silverado-and-gmc-sierra-right-hand-drive-conversions-in-australia.png",
      link: "/chevrolet-silverado-gmc-sierra-rhd-conversions-australia",
    },
     {
      title:
        "Ford F150 Australia: Import, RHD Conversion & Towing Guide",
      date: "20 September 2025",
      description:
        "Discover Ford F150 in Australia. Learn about import, RHD conversion, ADR compliance, towing capability, and options with SCD Direct.",
      image:
        "/blogs/ford-f150-australia-import-rhd-conversion-&-towing-guide.png",
      link: "/ford-f150-australia-import-rhd-conversion-towing-guide",
    },
    {
      title:
        "Ram Trucks Australia: Power, Towing & RHD Conversion Guide",
      date: "21 September 2025",
      description:
        "Explore Ram trucks in Australia. Learn about RHD conversion, ADR compliance, towing capabilities, and importing American trucks with SCD Direct.",
      image:
        "/blogs/ram-trucks-australia-power-towing-&-rhd-conversion-guide.png",
      link: "/ram-trucks-australia-power-towing-rhd-conversion-guide",
    },
    {
      title:
        "RHD American Trucks Australia: Import, Conversion & Compliance Guide",
      date: "22 September 2025",
      description:
        "Discover RHD American trucks in Australia. Learn about import, RHD conversion, ADR compliance, and top truck models like Ford, RAM, and Chevrolet.",
      image:
        "/blogs/rhd-american-trucks-australia-import-conversion-compliance-guide.png",
      link: "/rhd-american-trucks-australia-import-conversion-compliance-guide",
    },
     {
      title:
        "The Complete Buyer’s Guide to American Trucks in Australia",
      date: "23 September 2025",
      description:
        "Complete buyer’s guide to American trucks in Australia. Learn about ADR compliance, RHD conversions, towing capacity, and top brands.",
      image:
        "/blogs/the-complete-buyer’s-guide-to-america-trucks-in-australia.png",
      link: "/complete-buyers-guide-american-trucks-australia",
    },
    {
      title:
        "Chevrolet Silverado Australia – RHD Conversion, ADR Compliance & Import Guide",
      date: "24 September 2025",
      description:
        "Explore Chevrolet Silverado in Australia. Learn about RHD conversion, ADR compliance, towing, and importing American trucks with SCD Direct.",
      image:
        "/blogs/chevrolet-silverado-australia-import-rhd-conversion-&-adr-compliance.png",
      link: "/chevrolet-silverado-australia-import-rhd-conversion-adr",
    },
      {
      title:
        "Chevrolet Silverado RHD Australia – Conversion, ADR Compliance & Import Guide",
      date: "25 September 2025",
      description:
        "Discover Chevrolet Silverado RHD trucks in Australia. Learn about RHD conversion, ADR compliance, towing, and import services with SCD Direct.",
      image:
        "/blogs/chevrolet-silverado-rhd-import-conversion-&-adr-compliance-australia.png",
      link: "/chevrolet-silverado-rhd-import-conversion-adr-australia",
    },
    {
      title:
        "Import American Trucks Australia: RHD Conversion & ADR Compliance",
      date: "26 September 2025",
      description:
        "Learn how to import American trucks to Australia. RHD conversion, ADR compliance, towing, and registration services by SCD Direct.",
      image:
        "/blogs/import-american-trucks-australia-rhd-conversion-&-adr-compliance.png",
      link: "/import-american-trucks-australia-rhd-conversion-adr",
    },
  ];

  const reversedBlogData = blogData.reverse();
  const filteredBlogData = reversedBlogData.filter(
    (item) => item.link !== filterLink
  );
  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredBlogData.length / blogsPerPage);

  // Calculate the index range of the blogs to show on the current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = filteredBlogData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  return (
    <>
      <div className="HomeBlogs-parent" ref={homeBlogsRef}>
        <div className="row">
          {currentBlogs.map((blog, index) => (
            <div className="col-sm-6 col-md-4" key={index}>
              <Link to={blog.link} style={{ textDecoration: "none" }}>
                <div className="HomeBlogs-sub">
                  <div className="HomeBlogs-sub-image">
                    <img src={blog.image} alt="" />
                  </div>
                  <p>{blog.date}</p>
                  <div className="HomeBlogs-presentations">
                    <h1>{blog.title}</h1>
                  </div>
                  <Link
                    to={blog.link}
                    style={{
                      color: "black",
                      textDecoration: "underline",
                      fontWeight: "500",
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button
            className="pagination-button-Previous"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`pagination-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="pagination-button-next"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogscontentcards;
