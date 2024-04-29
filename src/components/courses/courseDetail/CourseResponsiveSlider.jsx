import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import CourseCard from "../../landing/courses/CourseCard";

const CourseResponsiveSlider = ({ Data }) => {
  return (
    <Swiper
      effect={"flip"}
      grabCursor={true}
      pagination={false}
      navigation={true}
      modules={[EffectFlip, Pagination, Navigation]}
      className="mySwiper p-5"
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
  );
};

export default CourseResponsiveSlider;
