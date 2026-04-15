import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import { useState } from "react";
import './Skills.scss'
import Loader from "react-loaders";



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
                    <h3>* Backend Development</h3>
                    <div>
                        <img src="https://skillicons.dev/icons?i=python" alt="" className="face22" />
                        <img src="https://skillicons.dev/icons?i=fastapi" alt="" />
                        <img src="https://skillicons.dev/icons?i=php" alt="" />
                        <img src="https://skillicons.dev/icons?i=laravel" alt="" />
                        <img src="https://skillicons.dev/icons?i=nodejs" alt="" />
                        <img src="https://skillicons.dev/icons?i=ts" alt="" />
                        <img src="https://skillicons.dev/icons?i=express" alt="" />
                        <img src="https://skillicons.dev/icons?i=nestjs" alt="" />
                    </div>
                    
                </div>

                <div className="face2">
                    <h3>* Databases & Caching</h3>
                    <div>
                      <img src="https://skillicons.dev/icons?i=postgres" alt="" />
                      <img src="https://skillicons.dev/icons?i=mysql" alt="" />
                      <img src="https://skillicons.dev/icons?i=redis" alt="" />
                      <img src="https://skillicons.dev/icons?i=mongodb" alt="" />
                    </div>
                    

                </div>

                <div className="face3">
                    
                    <h3>* Cloud & DevOps</h3>
                    <div>
                    <img src="https://skillicons.dev/icons?i=docker" alt="" />
                    <img src="https://skillicons.dev/icons?i=azure" alt="" />
                    <img src="https://skillicons.dev/icons?i=aws" alt="" />
                    <img src="https://skillicons.dev/icons?i=github" alt="" />
                    <img src="https://skillicons.dev/icons?i=git" alt="" />
                    </div>
                    
                </div>
                
                <div className="face4">
                    <h3>* Frontend (Support)</h3>
                    <div>
                    <img src="https://skillicons.dev/icons?i=react" alt="" />
                    <img src="https://skillicons.dev/icons?i=nextjs" alt="" />
                    <img src="https://skillicons.dev/icons?i=tailwind" alt="" />
                    </div>
                    
                </div>
            
            </div>

          
        </div>

        <div className='stage-cube-cont'>
            <div className="cubespinner">
              <div className="face1">
                <img src="https://skillicons.dev/icons?i=python" alt=""  width="90" />
              </div>
              <div className="face2">
                <img src="https://skillicons.dev/icons?i=fastapi" alt="" width="90" />
              </div>
              <div className="face3">
                <img src="https://skillicons.dev/icons?i=laravel" alt="" width="90" />
              </div>
              <div className="face4">
                <img src="https://skillicons.dev/icons?i=docker" alt="" width="90" />
              </div>
              <div className="face5">
                <img src="https://skillicons.dev/icons?i=azure" alt="" width="90" />
              </div>
              <div className="face6">
                <img src="https://skillicons.dev/icons?i=postgres" alt="" width="90" />
              </div>
            </div>
          </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Skills