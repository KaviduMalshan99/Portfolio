import { useState } from 'react'
import '../Work/Work.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import img1 from '../../assets/images/rajarata.png'
import img2 from '../../assets/images/work2.png'
import img3 from '../../assets/images/work3.png'
import img4 from '../../assets/images/lyrics.png'
import img5 from '../../assets/images/safari.png'
import img6 from '../../assets/images/apple.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const projects = [
  {
    id: 1,
    title: 'Rajarata Fire Website Project',
    image: img1, // Replace with your image URL
    demoLink: 'https://rajaratafire.com/', // Replace with your demo link
    githubLink: 'https://www.linkedin.com/posts/kavidumkulathunga_uiuxdesign-webdevelopment-rajaratafireservices-activity-7144226867183595520-XNo5?utm_source=share&utm_medium=member_desktop', // Replace with your GitHub link
  },
  {
    id: 1,
    title: 'Epic Roam Website Project',
    image: img2, // Replace with your image URL
    demoLink: 'https://www.linkedin.com/posts/kavidumkulathunga_webdevelopment-reactjs-react-activity-7159506144758046720-QkYy?utm_source=share&utm_medium=member_desktop', // Replace with your demo link
    githubLink: 'https://github.com/KaviduMalshan99/Epic-Roam-fashion-Store-website-Project.git', // Replace with your GitHub link
  },{
    id: 1,
    title: 'ActiLife App UI/UX Design',
    image: img3, // Replace with your image URL
    demoLink: 'https://www.figma.com/file/hJNe0yQ5gkNXkhIDFDbjnp/traveller-app-dashboard?type=design&node-id=0%3A1&mode=dev&t=0Axn469fRl4zkLMt-1', // Replace with your demo link
  },{
    id: 1,
    title: 'Safari lk Website project',
    image: img5, // Replace with your image URL
    demoLink: 'https://www.behance.net/gallery/190644095/Safarilk-website-uiux-Design-website-Development', // Replace with your demo link
    githubLink: 'https://github.com/KaviduMalshan99/safari-lk-website-Project', // Replace with your GitHub link
  },{
    id: 1,
    title: 'LYrics LK App UI/UX Design',
    image: img4, // Replace with your image URL
    demoLink: 'https://www.figma.com/file/vXBSp5nVEcZXarQ4lycSez/lyrics-app?type=design&node-id=98%3A4235&mode=dev&t=OESxmVqkCWxUedDi-1', // Replace with your demo link
  },
  {
    id: 1,
    title: 'Apple Store website UI/UX design',
    image: img6, // Replace with your image URL
    demoLink: 'https://www.figma.com/file/aO2YEl2YfrlYF2zf1lZnI4/watch-selling-web-design?type=design&node-id=0%3A1&mode=design&t=OESxmVqkCWxUedDi-1', // Replace with your demo link
  },
  // Repeat the above structure for each project (2-6)
];

const Work = () => {
  const [letterClass] = useState('text-animate');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const demoText = 'Demo&gt;&gt;';
  
  return (
    <>
      <div className="container Work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e','c','t','s', ' ', 'P', 'a', 'g', 'e']}
              idx={15}
            />
          </h1>
        </div>

        <div className="projects-container">
        <Slider {...settings}>
              {projects.map((project) => (
                    <div className="project" key={project.id}>
                      <img src={project.image} alt={project.title} />

                      <div className="project-details">
                        <h2>{project.title}</h2>
                        <div className="buttons">
                          <a href={project.demoLink} target="_blank" rel="noreferrer" className="demo-button">
                            Demo 
                          </a>
                          {project.githubLink &&(
                            <a href={project.githubLink} target="_blank" rel="noreferrer" className="github-button">
                            GitHub
                          </a>
                          )}
                        </div>
                      </div>

                      </div>
              ))}
            </Slider>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Work;


