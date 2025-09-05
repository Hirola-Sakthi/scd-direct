import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Autoplay, EffectFade } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router";

SwiperCore.use([Autoplay, Mousewheel, Keyboard]);

const ComingSoon = () => {
  return (
    <>
      <div className={`coming-soon-parent`}>
        <div className="coming-soon-subparent">
          <div className="container">
            <div className="coming-soon-heading-section">
              {/* <div className="subtitle">
                <h4>Our Vehicles</h4>
              </div> */}
              <div className="title">
                <h2>COMING SOON</h2>
              </div>
            </div>
            <div className="image-and-button-section">
              <div className="container">
                {/* <div className="background-image">
                            <div className="row">
                                <div className="vehicle-button-parent">
                                    <button className='vehicle-button'>RAM 1500</button>
                                </div>
                            </div>
                        </div> */}
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  // autoplay={false}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  className="banner-swiper"
                  modules={[Autoplay, Mousewheel, Keyboard, EffectFade]}
                  effect="fade"
                >
                  <SwiperSlide>
                    <img
                      className="swiper-images"
                      src="/home/homebanner.avif"
                      alt=""
                    />
                    <div className="row">
                      <div className="vehicle-button-parent">
                        <button className="vehicle-button">2025 GMC HUMMER EV SUV</button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="swiper-images"
                      src="/home/coming-soon-banckground.avif"
                      alt=""
                    />
                    <div className="row">
                      <div className="vehicle-button-parent">
                        <button className="vehicle-button" style={{color: '#000'}}>RAM 1500 REV</button>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="interested-button">
                <div className="row">
                    <div className="contact-now-button">
                        <Link to={'/coming-soon'}>Learn More</Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
