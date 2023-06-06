import React from 'react'
import './testimonial.css'
import T1 from '../../assets/sume.jpg'
import T2 from '../../assets/anye.jpg'
import T3 from '../../assets/nathalia.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
      id: 1,
      review:
        "he does amazing work. vvery glad he did it for me",
      avatar: T1,
      name: "Sume Imma",
    },
    {
      id: 2,
      review:
        "An absolute professional.what a man",
      avatar: T2,
      name: "Anye",
    },
    {
      id: 3,
      review:
        "I tip ma hats off for the wonderful work he does for me.",
      avatar: T3,
      name: "Nathalia",
    },
    {
      id: 4,
      review:
        "Trust him with your work and just smile as he makes it brilliant.",
      avatar: T2,
      name: "Anye",

    },
  ];

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
          return(
         
        <SwiperSlide  key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
         </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
            {review}
            </small>
          
        </SwiperSlide>
          )
           })
         
         }
        
      </Swiper>
    </section>
  )
}

export default Testimonial
