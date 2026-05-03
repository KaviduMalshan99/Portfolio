import '../Sidebar/Sidebar.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LOGO from '../../assets/images/logokmk.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBriefcase, faCode, faEnvelope, faHome, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faFacebook, faGitAlt, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="nav-bar">
      <Link className='logo' to='/' onClick={closeMenu}>
        <img src={LOGO} alt="logo" />
        <p>Kavidu_KM</p>
      </Link>

      {/* Hamburger Button - mobile only */}
      <button className="hamburger-btn" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} color='#ffd700' />
      </button>

      <nav className={menuOpen ? 'open' : ''}>
        <NavLink exact='true' activeclassname='active' className='home-link' to='/' onClick={closeMenu}>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about' onClick={closeMenu}>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='skill-link' to='/skill' onClick={closeMenu}>
          <FontAwesomeIcon icon={faCode} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='work-link' to='/work' onClick={closeMenu}>
          <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact' onClick={closeMenu}>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>

        <ul>
          <li>
            <a target='_blank' rel='noreferrer' className='social' href="https://www.linkedin.com/in/kavidumkulathunga/">
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' className='social' href='https://github.com/KaviduMalshan99'>
              <FontAwesomeIcon icon={faGitAlt} color='#4d4d4e' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' className='social' href="https://www.behance.net/kaviduMkulathunga">
              <FontAwesomeIcon icon={faBehance} color='#4d4d4e' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' className='social' href="https://www.instagram.com/kavidu_malshan_km/">
              <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' className='social' href="https://www.facebook.com/share/46vxJR76zvJEChcx/?mibextid=qi2Omg">
              <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar