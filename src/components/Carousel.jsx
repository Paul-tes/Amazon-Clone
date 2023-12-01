import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        className="h-[50%]"
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500
        }}
      >

        <SwiperSlide>
          <img src="../images/carousel_1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/carousel_2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='bg-black'>
          <video 
            controls
            muted
            src="../images/carousel_vid.mp4"
            type="video/mp4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/carousel_4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/carousel_5.jpg" alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Carousel;
