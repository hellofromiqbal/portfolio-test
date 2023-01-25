import './about.css';
import { AiOutlineCheckCircle, AiOutlineFolderOpen } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';

const About = () => {
  return (
    <section className="about__container" id='about'>
      <article className="about__content-introduce">
        <div>
            <h2>About Myself</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quasi maxime officiis cumque atque! Doloribus consectetur quo illum nostrum cupiditate?</p>
            <div className="achievement-list">
              <div className="achievement-item">
                <BiCodeAlt className='achievement-icon'/>
                <h5>Coding</h5>
                <small>1+ Year</small>
              </div>
              <div className="achievement-item">
                <FiUsers className='achievement-icon'/>
                <h5>Clients</h5>
                <small>5+ Clients</small>
              </div>
              <div className="achievement-item">
                <AiOutlineFolderOpen className='achievement-icon'/>
                <h5>Projects</h5>
                <small>17+ Projects</small>
              </div>
            </div>
        </div>
      </article>
      <article className="about__content-skills">
        <div className="skill-explanation">
          <h2>Skills</h2>
          <div className="skill-list">
            <div className="skill-item">
              <AiOutlineCheckCircle className="skill-icon"/>
              <div className="skill-text">
                <h5>HTML</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="skill-item">
              <AiOutlineCheckCircle className="skill-icon"/>
              <div className="skill-text">
                <h5>CSS</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="skill-item">
              <AiOutlineCheckCircle className="skill-icon"/>
              <div className="skill-text">
                <h5>JavaScript</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="skill-item">
              <AiOutlineCheckCircle className="skill-icon"/>
              <div className="skill-text">
                <h5>Bootstrap</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="skill-item">
              <AiOutlineCheckCircle className="skill-icon"/>
              <div className="skill-text">
                <h5>ReactJS</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="skill-item">
              <AiOutlineCheckCircle className="skill-icon"/>
              <div className="skill-text">
                <h5>NodeJS</h5>
                <small>Experienced</small>
              </div>
            </div>
            <div className="skill-item">
              <AiOutlineCheckCircle className="skill-icon"/>
              <div className="skill-text">
                <h5>MongoDB</h5>
                <small>Experienced</small>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
 
export default About;