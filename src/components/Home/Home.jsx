import '../Home/Home.scss'
import Loader from 'react-loaders'
import Animatedletter from '../AnimatedLetters/AnimatedLetters'
import { useState } from 'react'
import LOGO from '../../assets/images/logokmk.png'
import { Link } from 'react-router-dom'

const Home = () => {

  const [letterClass]=useState('text-animate')
  const nameArray = ['a','v','i','d','u']
  const jobArray=['B','a','c','k','e','n','d',' ','&',' ','A','I', ' ','E','n','g','i','n','e','e','r','.']

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
                idx={17}
                />
            </h1>

            <h2>Backend & AI Engineer | Python & Laravel | FastAPI · ML · Cloud</h2>
            <Link to='/Portfolio/contact' className='flat-button'>CONTACT ME</Link>
        </div>

        <img src={LOGO} alt="" className='mainimg' />
        </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Home