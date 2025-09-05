import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogscontentcards = ({ filterLink }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const homeBlogsRef = useRef(null);
  const blogsPerPage = 6;

  const scrollToTop = () => {
    if (homeBlogsRef.current) {
      homeBlogsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const blogData = [
    {
      title: 'Choosing the Right American Car Importer in Australia',
      date: '2 July 2025',
      description: 'Looking for the best American car importer in Australia? SCD Direct delivers expert service, ADR compliance & seamless imports you can trust from start to finish.',
      image: '/blogs/choosing-the-right-american-car-importer-in-australia.png',
      link: '/choosing-the-right-american-car-importer-in-australia'
    },
     {
      title: 'A Complete Guide to Shipping American Vehicles to Australia',
      date: '14 July 2025',
      description: 'Shipping American vehicles to Australia is easier than ever with SCD Direct. Learn costs, steps, and compliance in this complete, expert-backed guide.',
      image: '/blogs/a-complete-guide-to-shipping-american-vehicles-to-australia.png',
      link: '/a-complete-guide-to-shipping-american-vehicles-to-australia'
    },
     {
      title: 'Understanding ADR Compliance for Imported American Vehicles',
      date: '25 July 2025',
      description: 'Understanding ADR compliance for imported American vehicles is essential. SCD Direct breaks down rules, mods & approvals to keep your import fully road-legal.',
      image: '/blogs/understanding-adr-compliance-for-imported-american-vehicles.png',
      link: '/understanding-adr-compliance-for-imported-american-vehicles'
    },
    {
      title: 'Why American Vehicles Are Perfect for Australian Roads and Conditions',
      date: '5 August 2025',
      description: 'Explore why American vehicles are ideal for Australian roads—powerful, durable, and built for tough conditions. SCD Direct makes importing them easy.',
      image: '/blogs/why-american-vehicles-are-perfect-for-australian-roads-and-conditions.png',
      link: '/why-american-vehicles-are-perfect-for-australian-roads-and-conditions'
    },
     {
      title: 'Why Importing American Vehicles to Australia Is Easier with SCD Direct',
      date: '22 August 2025',
      description: 'Importing American vehicles to Australia is simple with SCD Direct—offering expert compliance, fast delivery & seamless service tailored to Aussie roads.',
      image: '/blogs/why-importing-american-vehicles-to-australia-is-easier-with-scd-direct.png',
      link: '/why-importing-american-vehicles-to-australia-is-easier-with-scd-direct'
    },
    {
      title: 'Why Right-Hand Drive Conversion Matters for Imported Vehicles',
      date: '28 August 2025',
      description: 'Understand the importance of right-hand drive conversion for imported vehicles. SCD Direct ensures compliance, comfort, and road safety across Australia.',
      image: '/blogs/why-right-hand-drive-conversion-matters-for-imported-vehicles.png',
      link: '/why-right-hand-drive-conversion-matters-for-imported-vehicles'
    },
  ];

  const reversedBlogData = blogData.reverse();
  const filteredBlogData = reversedBlogData.filter(item => item.link !== filterLink);
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
    <div className='HomeBlogs-parent' ref={homeBlogsRef}>
      <div className="row">
        {currentBlogs.map((blog, index) => (
          <div className="col-sm-6 col-md-4" key={index}>
            <Link to={blog.link} style={{ textDecoration: "none" }}>
              <div className="HomeBlogs-sub">
                <div className='HomeBlogs-sub-image'>
                  <img src={blog.image} alt="" />
                </div>
                <p>{blog.date}</p>
                <div className='HomeBlogs-presentations'>
                  <h1>{blog.title}</h1>
                </div>
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
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
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
