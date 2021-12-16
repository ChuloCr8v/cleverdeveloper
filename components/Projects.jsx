import styles from '../styles/Projects.module.scss'
import Project from './project'
import Image from 'next/image'
import Logo from '../public/logo.png'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Link from 'next/link'
import Heading from './Heading'

const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className={styles.projects}>
      <Heading text={"Projects"} />
      <div className={styles.container}>
        {Project.map((item, index) => (
          <div key="index" className="project" id={styles.project} data-aos="fade-up">
            <div className={styles.loader}>
              <div className={styles.loader_icon}></div>
              <p>Image is Loading, Please Hold on</p>
            </div>
            <Image src={item.img} height={500} width={600} alt={item.name} />
            <Link
              href={{
                pathname: "/[id]",
                query: {
                  id: index,
                  title: item.title,
                  img: item.img,
                  description: item.description,
                  github: item.github,
                  demo: item.demo,
                  stackOne: item.stackOne,
                  stackTwo: item.stackTwo,
                  stackThree: item.stackThree,
                  stackFour: item.stackFour,
                  featureOne: item.featureOne,
                  featureTwo: item.featureTwo,
                  featureThree: item.featureThree,
                  featureFour: item.featureFour,
                }
              }}
            >
              Details
            </Link>
          </div>
        ))}
        {/*
        <div className={styles.hire} data-aos="fade">
          <Image src={Logo} height={300} width={400} alt="devchex projects" />
          <a href="#contact" target="_blank" rel="noopener noreferrer">Hire Me</a>
        </div>
        */}
      </div>
    </section>
  )
}

export default Projects

