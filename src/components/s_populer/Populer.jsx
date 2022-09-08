import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.scss";
import { Pagination, Navigation } from "swiper";

import img1 from "../../assets/img1.jpg";

function Populer() {
  return (
    <>
      <div className="title" data-aos="zoom-in">
        <h2 className="mt-4">Popular Post</h2>
        <hr />
      </div>
      <div className="swiper-container" data-aos="zoom-in">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

function slide() {
  return (
    <div className="card">
      <img src={img1} alt="" />
      <div className="desc">
        <h5>Judul Artikel</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, at!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          odio?
        </p>
      </div>
    </div>
  );
}

export default Populer;
