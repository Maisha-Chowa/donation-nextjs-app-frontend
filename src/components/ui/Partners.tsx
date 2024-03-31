"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Partners = () => {
  return (
    <div className="py-8">
      <p className="text-4xl font-bold text-blue-950 text-center p-8">
        Our Corporate Partners
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Image
            src="https://logomak.com/blog/wp-content/uploads/2023/09/Apple-Logo-500x281-min.png"
            width={300}
            height={150}
            alt="Pizza"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://logomak.com/blog/wp-content/uploads/2023/09/Microsoft-Logo-500x163-min.png"
            width={300}
            height={150}
            alt="Pizza"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://logomak.com/blog/wp-content/uploads/2023/09/Saudi-Aramco-logo-500x281-min.png"
            width={300}
            height={150}
            alt="Pizza"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://logomak.com/blog/wp-content/uploads/2023/09/Alphabet-logo-500x281-min.png"
            width={300}
            height={150}
            alt="Pizza"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://logomak.com/blog/wp-content/uploads/2023/09/Amazon-Logo-500x313-min.png"
            width={300}
            height={150}
            alt="Pizza"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="https://logomak.com/blog/wp-content/uploads/2023/09/NVIDIA_logo-768x432-min.png"
            width={300}
            height={150}
            alt="Pizza"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://logomak.com/blog/wp-content/uploads/2023/09/Meta-Logo-500x281-min.png"
            width={300}
            height={150}
            alt="Pizza"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://logomak.com/blog/wp-content/uploads/2023/09/Tesla-logo-500x281-min.png"
            width={300}
            height={150}
            alt="Pizza"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://logomak.com/blog/wp-content/uploads/2023/09/VISA-logo-500x281-min.png"
            width={300}
            height={150}
            alt="Pizza"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
