import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import ProfessorsCard from "./ProfessorsCard";

const ProfessorsSlider = ({ Data }) => {
  return (
    <>
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
            <SwiperSlide key={data.id} className=" d-md-none d-sm-none d-col-block">
                <div className="col-8  m-auto">

              <ProfessorsCard
                image={data.image}
                title={data.title}
                desc={data.desc}
              />
                </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProfessorsSlider;
