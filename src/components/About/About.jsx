import '../About/About.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useState } from 'react'
import CV from '../../assets/Kavidu_Malshan.pdf'

const About = () => {

  const [letterClass]=useState('text-animate');

  return (
    
    <>
        <div className="container about-page">
          <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A','b','o','u','t',' ','P','a','g','e']}
              idx={15}
            />
          </h1>
          <p>Hello, I am Kavidu Malshan Kulathunga, an enthusiastic undergraduate student pursuing a BSc (Hons) in Information Technology with a specialization in Software Engineering at SLIIT. My journey in the world of technology has been nothing short of thrilling.</p>
          <p>As a dedicated website developer, I am well-versed in both frontend and backend technologies. My skills encompass a variety of programming languages including React, JavaScript, HTML, CSS, PHP, and more. I am passionate about crafting seamless and visually appealing user experiences, making UI/UX design an integral part of my skill set.</p>
          <button className='flat-button'><a href={CV} download="KviduKM">Download CV</a> </button>
          </div>

        </div>
        <Loader type='pacman'/>
    </>
  )
}

export default About