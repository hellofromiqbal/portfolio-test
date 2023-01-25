import './services.css';
import { AiOutlineUser, AiOutlineShop } from 'react-icons/ai';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

const Services = () => {
  return (
    <section className="services__container" id='services'>
      <h2>My Services</h2>
      <div className="services-list">
        <article className="service-item">
          <AiOutlineUser className='service-icon'/>
          <div className="service-text">
            <h4>Personal Website</h4>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos!</small>
          </div>
        </article>
        <article className="service-item">
          <AiOutlineShop className='service-icon'/>
          <div className="service-text">
            <h4>Small Business Website</h4>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos!</small>
          </div>
        </article>
        <article className="service-item">
          <HiOutlineBuildingOffice2 className='service-icon'/>
          <div className="service-text">
            <h4>Company Website</h4>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos!</small>
          </div>
        </article>
      </div>
    </section>
  );
}
 
export default Services;