import '../Contact/Contact.scss';
import Loader from 'react-loaders';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Contactimg from '../../assets/images/contact.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [letterClass] = useState('text-animate');
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_khjtv0g', 'template_dmnh3to', refForm.current, 'ayVakeTGSVRD7fmY9')
      .then(
        () => {
          alert('Message Successfully sent!');
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-Zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'P', 'a', 'g', 'e']} idx={15} />
          </h1>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="from_name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="from_email" placeholder="E-mail" required />
                </li>
                <li>
                  <input type="text" name="subject" placeholder="Subject" required />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required></textarea>
                </li>
                <li>
                  <input type="submit" value="Submit" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="second-box">

          <div className="img">
            <img src={Contactimg} useMap="#image_map" alt="Contact" />
          </div>

          
        </div>

        <div className="contactdetails">

          <div className="no1">
            <FontAwesomeIcon icon={faPhone} className='ic'/>
            <p>+94 71 970 7610</p>
          </div>

          <div className="no2">
            <FontAwesomeIcon icon={faWhatsapp} className='ic'/>
            <p>+94 71 970 7610</p>
          </div>

          <div className="no3">
            <FontAwesomeIcon icon={faEnvelope} className='ic'/>
            <p>kavidumalshan <br /> kulathunga@gmail.com</p>
          </div>
            
          </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
