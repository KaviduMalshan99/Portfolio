import '../Home/Home.scss'
import Loader from 'react-loaders'
import Animatedletter from '../AnimatedLetters/AnimatedLetters'
import { useState } from 'react'
import LOGO from '../../assets/images/logo-k.png'
import { Link } from 'react-router-dom'

const Home = () => {

  const [letterClass]=useState('text-animate')
  const nameArray = ['a','v','i','d','u']
  const jobArray=['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

  return (
    <>
        <div className="container home-page">

        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={letterClass}>i,</span>
                <br />
                <span className={letterClass}>I</span>
                <span className={letterClass}>'m</span>
                <img src={LOGO} alt="logo" className='middleimg' />
                <Animatedletter letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <Animatedletter letterClass={letterClass}
                strArray={jobArray}
                idx={20}
                />
            </h1>

            <h2>Frontend Developer / Backend Developer / UI/UX Designer</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>

        <img src={LOGO} alt="" className='mainimg' />
        </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Home