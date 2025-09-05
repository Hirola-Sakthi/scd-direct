import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Autoplay, EffectFade } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router";

SwiperCore.use([Autoplay, Mousewheel, Keyboard]);

const OurVehicles = () => {
  return (
    <>
      <div className="our-vehicle-slider-parent">
        <div className="our-vehicle-slider-subparent">
          <div className="our-vehicle-content">
            <div className="container">
              <div className="row">
                <div className="main-title">
                  <h1>Explore Our Vehicles</h1>
                </div>
                <div className="subtitle">
                  <p>
                    Discover a curated selection of American vehicles, from
                    iconic pickups to cutting-edge EVs. SCD Direct brings your
                    dream ride to life with expert imports, seamless compliance,
                    and precision conversions.
                  </p>
                </div>
                <div className="our-vehicle-buttons">
                  <div className="row">
                    <div className="contact-button">
                      <Link to={"/contact-us"}>Contact Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-main">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className={`banner-swiper`}
              modules={[Autoplay, Mousewheel, Keyboard, EffectFade]}
              effect="fade"
            >
              <SwiperSlide>
                <img
                  className="swiper-images"
                  src="/vehicles/sliderimage3.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-images"
                  src="/home/sliderimage5.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-images"
                  src="/vehicles/sliderimage4.avif"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-images"
                  src="/home/ram1500.avif"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVehicles;
