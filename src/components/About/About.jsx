import '../About/About.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useState } from 'react'
import CV from '../../assets/kavidu_km.pdf'
import myimg from '../../assets/images/kavidumk.png'

const About = () => {

  const [letterClass] = useState('text-animate');

  return (
    <>
      <div className="container about-page">

        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A','b','o','u','t',' ','M','e']}
              idx={15}
            />
          </h1>

          <p>
            I'm Kavidu Kulathunga, a Backend & AI Engineer with 3+ years of experience building and shipping production-ready software systems.
          </p>

          <p>
            My journey started with Laravel — where I built full-stack systems, designed database architectures, 
            and took on project management responsibilities early in my career. That experience gave me a strong 
            foundation in how real software gets planned, built, and delivered.
          </p>

          <p>
            Over time, I expanded into Python, AI/ML, and cloud-native development. I now design and build 
            intelligent backend systems —  AI pipelines, microservices, REST APIs, and cloud deployments on 
            AWS and Azure.
          </p>

          <p>
            My experience covers the full development lifecycle — from idea and architecture to deployment,
            CI/CD, and maintaining systems in production environments.
          </p>

          <p>
            Currently focused on Backend Engineer and AI Engineer roles.
          </p>

          <button className='flat-button'>
            <a href={CV} download="Kavidu_Malshan_CV">Download CV</a>
          </button>
        </div>

        <div className="myimg">
          <img src={myimg} alt="Kavidu Malshan" />
        </div>

      </div>

      <Loader type='pacman' />
    </>
  )
}

export default About