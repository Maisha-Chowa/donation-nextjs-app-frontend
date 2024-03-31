"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const VolunteerCarousel = () => {
  return (
    <div>
      <p className="text-4xl text-blue-950 font-bold my-12 mx-auto text-center">
        Our Awesome Volunteers
      </p>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://thumbs.dreamstime.com/b/confident-black-man-looking-camera-indoors-head-shot-young-handsome-portrait-african-american-single-bachelor-male-standing-128706411.jpg" />
          <p className="text-lg text-blue-950 text-center">Arvin Mridha</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQsh0ck6mmv4rgjkdDkMqK5hcph0RuaKCl8RibuXIS4iW3UYReZ4VB1kSabt6ELWDDeo&usqp=CAU" />
          <p className="text-lg text-blue-950 text-center">Arvin Mridha</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTko-hAj-y1bMXY3KmgbUhJP3Rbaf1GcBdRbOjc7WUDIndOxty5N5YPBkoJywVtj3ZU9s&usqp=CAU" />
          <p className="text-lg text-blue-950 text-center">Arvin Mridha</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9S-v6NsVkk1eLy28p1vdngyftW_qYORJyQYQkaqhYCWTsLyyq5lltM4LbRPhv7i6Ozg&usqp=CAU" />
          <p className="text-lg text-blue-950 text-center">Arvin Mridha</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9-VpwopYdaHMgr6k7CUKbciYZdt_6DIKVhBA3B28YMtJ7RadnieVMoh_gq-yqaZzdeI&usqp=CAU" />
          <p className="text-lg text-blue-950 text-center">Arvin Mridha</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.gettyimages.com/id/1483869287/photo/happy-businesswoman-working-at-the-office-and-holding-a-tablet.jpg?s=612x612&w=gi&k=20&c=j0vMVsvSVIaMG01AJOLb3pI7QyX3R_0KNuvHt-bPIDw=" />
          <p className="text-lg text-blue-950 text-center">Arvin Mridha</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZObLsvmG2fo0PF7ie2FUxzOuNPrIiqPa_hKtXB6DgUB98fs3Xry-y4j3y7Hv2jJ0uBpg&usqp=CAU" />
          <p className="text-lg text-blue-950 text-center">Arvin Mridha</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2luZ2xlJTIwcGVyc29ufGVufDB8fDB8fHww" />
          <p className="text-lg text-blue-950 text-center">Arvin Mridha</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1619498594340-4c078feb1661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpbmdsZSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
          <p className="text-lg text-blue-950 text-center">Arvin Mridha</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default VolunteerCarousel;
