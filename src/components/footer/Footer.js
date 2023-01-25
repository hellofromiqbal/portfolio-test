import './footer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import { TfiTwitter } from 'react-icons/tfi';

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__content-left">
          <h1>Iqbal.</h1>
        </div>
        <div className="footer__content-right">
          <h4>FOLLOW ME</h4>
          <div className="content-social">
            <AiOutlineInstagram className='social-icon'/>
            <CiFacebook className='social-icon'/>
            <TfiTwitter className='social-icon'/>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <small>&copy; Muhammad Iqbal. All rights reserved.</small>
      </div>
    </div>
  );
}
 
export default Footer;