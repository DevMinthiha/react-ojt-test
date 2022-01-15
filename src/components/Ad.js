import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import adOne from "../images/WebBanner&AD/AD/Asset 1.png";
import adTwo from "../images/WebBanner&AD/AD/Asset 2.png";
import adThree from "../images/WebBanner&AD/AD/Asset 3.png";
import { Navigation } from "swiper";

const Ad = () => {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1.6}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        <SwiperSlide>
          <img className="rounded-lg" src={adOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={adTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={adThree} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ad;
