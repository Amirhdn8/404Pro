import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import NewsCard from "./NewsCard";

const Slider = ({ Data }) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Data?.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <NewsCard title={data.title} desc={data.desc} image={data.image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
