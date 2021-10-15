import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

SwiperCore.use([Autoplay, Navigation]);


<Swiper
   slideToClickedSlide={true}
   centeredSlides={true}
   slidesPerView={1}
   autoplay={{ delay: 10000 }}
   loop={true}
   style={{ width: "100vw", height: "100px" }}
>
   {bannerData?.banner_info.map((banner, index) => {
      return (
        <SwiperSlide key={index}>
           <img
             width="100%"
             height="100%"
             src={banner.img_url}
             alt="banner"
             onClick={() => window.open(banner.redirect_url)}
           />
         </SwiperSlide>
       );
     })}
</Swiper>
