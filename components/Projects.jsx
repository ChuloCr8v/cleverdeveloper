import styles from '../styles/Projects.module.scss' 
import Project from './project'
import Image from 'next/image'
import Logo from '../public/logo.png'
import AOS from 'aos'
import "aos/dist/aos.css" 
import {useEffect} from 'react'

const Projects = () => {
  
  useEffect(() => { 
    AOS.init({ duration : 500 }); 
  }, []);
  
  return(
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        {Project.map((item, index) => (
        <div key="index" className={styles.project} data-aos="fade-up">
          <div className={styles.loader}>
            <div className={styles.loader_icon}></div>
            <p>Image is Loading, Please Hold on</p>
          </div>
          <Image src={item.img} height="300" width="400" alt="devchex projects" />
          <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
          <a href={item.link} className={styles.clip} target="_blank" rel="noopener noreferrer">{item.name}</a>
        </div>
        ))}
        <div className={styles.hire} data-aos="fade">
          <Image src={Logo} height="300" width="400" alt="devchex projects" />
          <a href="#contact" target="_blank" rel="noopener noreferrer">Hire Me</a>
        </div>
      </div>
    </section>
    )
}

export default Projects