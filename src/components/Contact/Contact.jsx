import '../Contact/Contact.scss';
import Loader from 'react-loaders';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Contactimg from '../../assets/images/contact.png';

const Contact = () => {
  const [letterClass] = useState('text-animate');
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_khjtv0g', 'template_dmnh3to', refForm.current, 'ayVakeTGSVRD7fmY9')
      .then(
        () => alert('Message Successfully sent!'),
        () => alert('Failed to send the message, please try again')
      );
  };

  const contactLinks = [
    {
      icon: 'https://skillicons.dev/icons?i=gmail',
      label: 'Gmail',
      value: 'kavidumalshankulathunga@gmail.com',
      href: 'mailto:kavidumalshankulathunga@gmail.com',
    },
    {
      icon: 'https://skillicons.dev/icons?i=linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/kavidumkulathunga',
      href: 'https://www.linkedin.com/in/kavidumkulathunga',
    },
    {
      icon: 'https://skillicons.dev/icons?i=github',
      label: 'GitHub',
      value: 'github.com/kavidumalshan99',
      href: 'https://github.com/KaviduMalshan99',
    },
    {
      icon: 'https://img.icons8.com/color/48/whatsapp--v1.png',
      label: 'WhatsApp',
      value: '+94 71 970 7610',
      href: 'https://wa.me/94719707610',
    },
  ];

  return (
    <>
      <div className="container contact-page">
        <div className="text-Zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C','o','n','t','a','c','t',' ','P','a','g','e']}
              idx={15}
            />
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
            <img src={Contactimg} alt="Contact" />
          </div>

          <div className="contact-info">
          {contactLinks.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="info-item"
            >
              <img src={item.icon} alt={item.label} width="46" />
              <span className="tooltip">{item.value}</span>
            </a>
          ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;