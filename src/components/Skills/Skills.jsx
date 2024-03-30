import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import { useState } from "react";
import './Skills.scss'


import reactlg from '../../../src/assets/icons/React-Light.svg';
import html from '../../../src/assets/icons/HTML.svg';
import C from '../../../src/assets/icons/C.svg';
import cpp from '../../../src/assets/icons/CPP.svg';
import css from '../../../src/assets/icons/CSS.svg';
import figma from '../../../src/assets/icons/Figma-Dark.svg';
import git from '../../../src/assets/icons/Git.svg';
import java from '../../assets/icons/java-Light.svg';
import js from '../../../src/assets/icons/javaScript.svg';
import mysql from '../../../src/assets/icons/MySQL-Dark.svg';
import next from '../../../src/assets/icons/NextJS-Dark.svg';
import Node from '../../../src/assets/icons/NodeJS-Dark.svg';
import php from '../../../src/assets/icons/PHP-Dark.svg';
import sass from '../../../src/assets/icons/Sass.svg';
import xd from '../../../src/assets/icons/XD.svg';
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";


const Skills = () => {

    const [letterClass]=useState('text-animate');
  return (
    <>
    <div className="container about-page">
        <div className="text-zone">
            
            
            <div className="skill">

            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['M','y',' ','S','k','i','l','l','s']}
                    idx={15}
                />
            </h1>
                <div className="face1">
                    <h3>* Frontend Development</h3>
                    <div>
                        <img src={reactlg} alt="" />
                        <img src={html} alt="" />
                        <img src={js} alt="" />
                        <img src={php} alt="" />
                        <img src={next} alt="" />
                        <img src={css} alt="" />
                        <img src={sass} alt="" />
                    </div>
                    
                </div>

                <div className="face2">
                    <h3>* Backend Development</h3>
                    <div>
                        <img src={Node} alt="" />
                        <img src={mysql} alt="" />
                    </div>
                    

                </div>

                <div className="face3">
                    
                    <h3>* UI/UX Design</h3>
                    <div><
                        img src={figma} alt="" />
                        <img src={xd} alt="" />
                    </div>
                    
                </div>
                
                <div className="face4">
                    <h3>* Other languages</h3>
                    <div>
                        <img src={C} alt="" />
                        <img src={cpp} alt="" />
                        <img src={java} alt="" />
                        <img src={git} alt="" />
                    </div>
                    
                </div>
            
            </div>

          
        </div>

        <div className='stage-cube-cont'>
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faPhp} color='#777BB3'/>
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
              </div>
            </div>
          </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Skills