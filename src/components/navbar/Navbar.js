import './navbar.css';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineFolder } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { HiOutlineChatAlt } from 'react-icons/hi';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><AiOutlineFolder/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiOutlineChatAlt/></a>
    </nav>
  );
}
 
export default Navbar;