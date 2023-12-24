import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import newArrived from "./NewProductDetails";
import "./NewProducts.css";

export default function NewProducts () {
    const BreakPoint = {
        500: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      };

  return (
    <>
    <h2>New Arrivals</h2>
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={20}
        breakpoints={BreakPoint}
        className="mySwiper"
      >
               
        {newArrived.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="container">
                <div className="box">
                    <img src={slide.image} alt={slide.title}/>
                    <img src={slide.hoverimage} className="hover-img"/>
                    <div className="hover-icons">
                        <a href=""><ion-icon name="heart-outline"></ion-icon></a>
                        <a href=""><ion-icon name="eye-outline"></ion-icon></a>
                        <a href=""><ion-icon name="bag-outline"></ion-icon></a>
                    </div>
                    <div className="product-title">
                        <h5>{slide.title}</h5>
                        <p>{slide.price}</p>
                    </div>
                </div>
              </div>
            </SwiperSlide>
        ))}
               
    </Swiper>
    </>
  );
}
