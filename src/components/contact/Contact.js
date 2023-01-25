import './contact.css';

const Contact = () => {
  return (
    <div className="contact__container" id='contact'>
      <h2>Contact Me</h2>
      <form action="">
        <input type="text" name='name' placeholder='John Doe' required autoComplete='off'/>
        <input type="email" name='email' placeholder='johndoe@email.com' required autoComplete='off'/>
        <textarea name="message" rows="7" placeholder='Hello world' required autoComplete='off'></textarea>
        <button type="submit" className='btn'>Send Message</button>
      </form>
    </div>
  );
}
 
export default Contact;