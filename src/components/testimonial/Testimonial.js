import './testimonial.css';
import Ava1 from '../../assets/avatar1.jpg';
import Ava2 from '../../assets/avatar2.jpg';
import Ava3 from '../../assets/avatar3.jpg';
import Ava4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const data = [
    {
        avatar: Ava1,
        name: 'Elijah Christ',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum expedita, unde consectetur incidunt accusantium.'
    },
    {
        avatar: Ava2,
        name: 'Jack Guilermo',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum expedita, unde consectetur incidunt accusantium.'
    },
    {
        avatar: Ava3,
        name: 'Brian Otis',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum expedita, unde consectetur incidunt accusantium.'
    },
    {
        avatar: Ava4,
        name: 'Shivania Noor',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum expedita, unde consectetur incidunt accusantium.'
    },
  ];

  return (
    <section className="testimonial__container">
      <h2>Testimonials</h2>
      <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="testimonial__list"
      >
        {data.map((datum, index) => (
          <SwiperSlide className="testimonial-item" key={index}>
            <div className="client__content">
              <div className="client__avatar">
                <img src={datum.avatar} alt={datum.name} />
              </div>
              <h5 className="client__name">{datum.name}</h5>
              <p className="client__review">{datum.review}</p>
            </div>
          </SwiperSlide>
      ))}
      </Swiper>
    </section>
  );
}
 
export default Testimonial;