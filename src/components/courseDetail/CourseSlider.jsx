import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CourseCard from "../courses/CourseCard";

const CourseSlider = ({ Data }) => {
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
              <CourseCard
                title={data.title}
                desc={data.desc}
                image={data.image}
                price={data.price}
                number={data.number}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CourseSlider;
