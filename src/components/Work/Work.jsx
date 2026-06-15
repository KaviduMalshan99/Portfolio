import { useState } from 'react'
import '../Work/Work.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import img1 from '../../assets/images/rajaratafire.png'
import img2 from '../../assets/images/daweb.png'
import img3 from '../../assets/images/centivalweb.png'
import img4 from '../../assets/images/faieweb.png'
import img15 from '../../assets/images/betterway.png'
import img13 from '../../assets/images/eventsync.png'
import img7 from '../../assets/images/iwgcweb.png'
import img8 from '../../assets/images/iwgclms.png'
import img9 from '../../assets/images/dhmobile.png'
import img10 from '../../assets/images/kaddy.png'
import img11 from '../../assets/images/newanweb.png'
import img12 from '../../assets/images/actilife.png'
import img16 from '../../assets/images/aiops.png'
import img17 from '../../assets/images/talentuator.png'
import img18 from '../../assets/images/eventbp.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const projects = [
  {
    id: 1,
    title: 'ZenzHire / AI CV Platform',
    image: img17,
    description: 'Research-grade AI system designed to bring self-healing capabilities to enterprise ERP platforms running on Kubernetes infrastructure.',
    tech:'Python · FastAPI · LLM Integration · Machine Learning · PostgreSQL · Vector Search · Docker · Cloud',
    demoLink: 'https://github.com/KaviduMalshan99/zenzhire.git', // no public link yet
    githubLink: 'https://github.com/KaviduMalshan99/zenzhire.git'
  },
  {
    id: 2,
    title: 'SmartOps — Agentic AI Framework for Self-Healing ERP Systems',
    image: img16,
    description: 'Research-grade AI system designed to bring self-healing capabilities to enterprise ERP platforms running on Kubernetes infrastructure.',
    tech:'Machine Learning · Kubernetes · Docker · Prometheus · Observability · Cloud-native Architecture',
    demoLink: 'https://github.com/SmartopsAi/smartops.git',
    githubLink: 'https://github.com/SmartopsAi/smartops.git'
  },
  {
    id: 3,
    title: 'Imperial Wisdom Graduate Campus Website',
    image: img7,
    description: 'Full corporate website for a higher education campus with modern UI and responsive design.',
    tech:'React.js · Laravel · REST API · MySQL · Responsive UI · Authentication · Performance Optimization ',
    demoLink: 'https://iwgc.lk',
    githubLink: 'https://github.com/KaviduMalshan99/IWGC-website.git'
  },
  {
    id: 4,
    title: 'IWGC LMS System',
    image: img8,
    description: 'Learning Management System for students and staff with course handling and user management.',
    tech:'Laravel · MySQL · REST APIs · Authentication · Role-Based Access Control · Payment Integration',
    demoLink: 'https://lms.iwgc.lk',
    githubLink: 'https://github.com/KaviduMalshan99/IWGC-Learning-management-system.git'
  },
  {
    id: 5,
    title: 'DSA Academy Platform',
    image: img2,
    description: 'Trading education platform with course system, user dashboard, and backend management.',
    tech:'Laravel · MySQL · REST APIs · Payment Gateway · Admin Dashboard · Authentication · Cloud Deployment',
    demoLink: 'https://dsa.lk',
    githubLink: 'https://github.com/Centival-Software-Solutions/DSA-LMS.git'
  },
  {
    id: 6,
    title: 'Centival IT Website',
    image: img3,
    description: 'Corporate IT company website focused on branding, services, and digital presence.',
    tech:'React.js · Laravel · API Integration · UI Engineering · SEO Optimization · Deployment',
    demoLink: 'https://centival.com/',
    githubLink: 'https://github.com/KaviduMalshan99/centival-website.git'
  },
  {
    id: 7,
    title: 'Fairwaves E-commerce',
    image: img4,
    description: 'E-commerce platform with product management, cart system, and online purchasing flow.',
    tech:'Laravel · MySQL · E-commerce System · Cart Management · Order Processing · Payment Integration',
    demoLink: 'https://fairwaves.lk/',
    githubLink: 'https://github.com/Centival-Software-Solutions/FairWaves-Ecommerce-website.git'
  },
  {
    id: 8,
    title: 'Ceylon BP Project Management System',
    image: img18,
    description: 'Project management tool for handling workflows, tasks, and team collaboration.',
    tech:'Laravel · MySQL · Workflow Automation · REST APIs · Task Management · Role Permissions',
    demoLink: 'https://system.ceylonbp.com/',
    githubLink: 'https://github.com/webceylonit/webceylonsystem.git'
  },
  {
    id: 9,
    title: 'DH Mobile Shop POS System',
    image: img9,
    description: 'Point-of-sale system for mobile shops with billing, inventory, and reporting features.',
    tech:'Laravel · MySQL · Inventory Management · Billing System · Reporting · Authentication',
    demoLink: 'https://dhmobile.dsa-academy.com/login',
    githubLink: 'https://github.com/KaviduMalshan99/DH-Mobile-POS-System.git'
  },
  {
    id: 10,
    title: 'Kaddys Toy Store',
    image: img10,
    description: 'US-based e-commerce website for toys with modern UI and responsive shopping experience.',
    tech:'Laravel · MySQL · E-commerce Architecture · Responsive UI · Product Management · Deployment',
    demoLink: 'https://kaddystoy.com/',
    githubLink: 'https://github.com/Centival-Software-Solutions/KADdys-Toyshop-Website.git'
  },
  {
    id: 11,
    title: 'Nevan Interiors',
    image: img11,
    description: 'Premium website for high-quality switches and interior accessories targeting US market.',
    tech:'React.js · Laravel · CMS Development · Responsive Design · Performance Optimization',
    demoLink: 'https://nevaninteriors.com/',
    githubLink: 'https://github.com/Centival-Software-Solutions/Forbes-Lomax-E-Commerce-Website.git'
  },
  {
    id: 12,
    title: 'ActiLife Physio Center',
    image: img12,
    description: 'Healthcare website for physiotherapy services with booking and service presentation.',
    tech:'React.js · Laravel · CMS Development · Responsive Design · Performance Optimization',
    demoLink: 'https://actilifephysio.lk/',
    githubLink: 'https://github.com/Centival-Software-Solutions/Acti-Life-Website.git'
  },
  {
    id: 13,
    title: 'Cloud Event System',
    image: img13,
    description: 'Cloud-based event management system with scheduling and participant handling.',
    tech:'Python · FastAPI · LLM · PostgreSQL · Cloud',
    demoLink: 'https://cloudeventsystem.netlify.app/',
    githubLink: 'https://github.com/KaviduMalshan99/Cloud-Based-Event-Management-System.git'
  },
  {
    id: 14,
    title: 'Rajarata Fire Services',
    image: img2,
    description: 'Corporate website for fire safety services with strong branding and modern layout.',
    tech:'React.js · Laravel · CMS Development · Responsive Design · Performance Optimization',
    demoLink: 'https://rajaratafire.lk/',
    githubLink: 'https://github.com/KaviduMalshan99/RajarataFire-Website-Project-.git'
  },
  {
    id: 15,
    title: 'BetterWay Education Platform',
    image: img15,
    description: 'Online education platform offering courses with structured learning experience.',
    tech:'React.js · Laravel · CMS Development · Responsive Design · Performance Optimization',
    demoLink: 'https://betterway.lk/',
    githubLink: 'https://github.com/KaviduMalshan99/Betterway-Education-website.git'
  }
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

      <div className="work-layout">

        <div className="right-side">

          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['P','r','o','j','e','c','t','s',' ','P','a','g','e']}
                idx={15}
              />
            </h1>
          </div>

          <div className="projects-container">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} />

                <div className="project-details">
                  <h2>{project.title}</h2>
                  <p className="desc">{project.description}</p>

                  <p className="project-tech">
                    <strong>Tech:</strong> {project.tech}
                  </p>

                  <div className="buttons">
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="demo-button">
                      Demo
                    </a>

                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="github-button">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      </div>
  
      <Loader type="pacman" />
    </>
  );
};

export default Work;


