
import '../Sidebar/Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import LOGO from '../../assets/images/logo-k.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCode, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faFacebook, faGitAlt, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LOGO} alt="logo" />
            <p>Kavidu_KM</p>
        </Link>
        <nav>
            <NavLink exeat='true' activeclassname='active' className='home-link' to='/Portfolio/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exeat='true' activeclassname='active' className='about-link' to='/Portfolio/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exeat='true' activeclassname='active' className='skill-link' to='/Portfolio/skill'>
                <FontAwesomeIcon icon={faCode} color='#4d4d4e'/>
            </NavLink>
            <NavLink exeat='true' activeclassname='active' className='work-link' to='/Portfolio/work'>
                <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e'/>
            </NavLink>
            <NavLink exeat='true' activeclassname='active' className='contact-link' to='/Portfolio/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>

            <ul>
            <li>
                <a target='_blank' rel='noreferrer' className='social' href="https://www.linkedin.com/in/kavidumkulathunga/">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' className='social' href='https://github.com/KaviduMalshan99'>
                    <FontAwesomeIcon icon={faGitAlt} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' className='social' href="https://www.behance.net/kaviduMkulathunga">
                    <FontAwesomeIcon icon={faBehance} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer'  className='social' href="https://www.instagram.com/kavidu_malshan_km/">
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' className='social' href="https://www.facebook.com/share/46vxJR76zvJEChcx/?mibextid=qi2Omg">
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
        </nav>
    </div>
  )
}

export default Sidebar