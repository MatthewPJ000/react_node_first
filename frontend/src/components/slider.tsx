import React, { MutableRefObject,useRef,  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './component.scss';
import Chart2 from '../assets/images/Capture2.png'
// import Chart from '../assets/images/Capture.png'
import Chart1 from '../assets/images/Capture1.png'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MySwiperComponent() {

    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);
  
    const autoplayTimeLeft = (s: any, time: any, progress: any) => {
      if (progressCircle.current && progressContent.current) {
        progressCircle.current.style.setProperty('--progress', String(1 - progress));
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      }
    };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={autoplayTimeLeft}
        className="mySwiper"
      >
        {/* <SwiperSlide><div><img alt="Chart1" src={Chart} /></div></SwiperSlide> */}
        <SwiperSlide><div><img alt="Chart1" src={Chart1} /></div></SwiperSlide>
        <SwiperSlide><div><img alt="Chart2" src={Chart2} /></div></SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
