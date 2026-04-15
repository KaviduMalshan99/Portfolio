import '../About/About.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useState } from 'react'
import CV from '../../assets/Kavidu_Malshan.pdf'
import myimg from '../../assets/images/pscimgs.jpg'

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
            I’m Kavidu Malshan Kulathunga, a Backend Engineer with over 3 years of experience
            building and deploying real-world software systems.
          </p>

          <p>
            I started my journey with PHP (Laravel), where I developed strong foundations in backend
            development, API design, and database architecture. During this time, I worked on multiple
            production-level projects and also took on responsibilities in planning, system design,
            and project management.
          </p>

          <p>
            Over time, I transitioned into Python-based backend development to work with more scalable,
            modern architectures and AI-integrated systems. I now focus on building APIs, microservices,
            and cloud-native applications using FastAPI and related technologies.
          </p>

          <p>
            My experience covers the full development lifecycle — from idea and architecture to deployment,
            CI/CD, and maintaining systems in production environments.
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