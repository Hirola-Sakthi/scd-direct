import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Autoplay, EffectFade } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css";
import "swiper/css/bundle";

SwiperCore.use([Autoplay, Mousewheel, Keyboard]);

const BannerSlider = () => {
  return (
    <>
      <div className="home-banner-slider-parent">
        <div className="home-banner-slider-subparent">
          <div className="home-banner-content">
            <div className="container">
              <div className="row">
                <div className="main-title">
                  <h1>Specialists in American Vehicles</h1>
                </div>
                <div className="subtitle">
                  <h4>Import | Conversion | Compliance | Retail</h4>
                </div>
                <div className="home-banner-buttons">
                  <div className="row">
                    <div className="contact-button">
                      <Link>Contact Now</Link>
                    </div>
                    <div className="contact-button">
                      <Link>Learn More</Link>
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
              className="banner-swiper"
              modules={[Autoplay, Mousewheel, Keyboard, EffectFade]}
              effect="fade"
            >
              <SwiperSlide>
                <img
                  className="swiper-images"
                  src="/home/ford150.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-images"
                  src="/home/super-duty.jpeg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-images"
                  src="/home/RAM-Heavy-Duty.jpeg"
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

export default BannerSlider;
