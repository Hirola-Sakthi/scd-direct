import React from "react";
import { Link } from "react-router-dom";

const BlogCardsIndividual = () => {
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
  ];

  return (
    <div className="HomeBlogs-parent">
      <div className="row">
        {blogData.map((blog, index) => (
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
    </div>
  );
};

export default BlogCardsIndividual;
