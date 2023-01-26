import './footer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import { TfiTwitter } from 'react-icons/tfi';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Iqbal.</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://facebook.com"><CiFacebook className='social-icon'/></a>
        <a href="https://instagram.com"><AiOutlineInstagram className='social-icon'/></a>
        <a href="https://twitter.com"><TfiTwitter className='social-icon'/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Iqbal. All rights reserved.</small>
      </div>
    </footer>
  );
}
 
export default Footer;