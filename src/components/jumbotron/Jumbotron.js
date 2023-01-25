import './jumbotron.css';
import Iqbal from '../../assets/profpic.png';

const Jumbo = () => {
  return (
    <section className="jumbo__container" id='home'>
      <div className="jumbo__content">
        <img src={Iqbal} alt="iqbal" />
        <h5>Hello, it's me</h5>
        <h1>Muhammad Iqbal</h1>
        <small>I am a <span>Frontend Developer</span></small>
      </div>
    </section>
  );
}
 
export default Jumbo;