import styles from '../styles/Projects.module.scss'
import Project from './project'
import Image from 'next/image'
import Logo from '../public/logo.png'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Link from 'next/link'
import Heading from './Heading'
import {FaGlobe, FaGithub} from 'react-icons/fa' 

const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className={styles.projects}>
      <Heading text={"Projects"} />
      <div className={styles.container}>
        {Project.map((item, index) => (
          <div key="index" className=" dark:text-white text-gray-800 dark:border-white dark:border-2" id={styles.project} data-aos="fade-up">
            <img src={item.img} height={500} width={600} alt={item.name} />
            <div className="details text-center py-8 ">
              <h2 className="title text-xl text-red-800 dark:text-yellow-400 font-bold text-uppercase">{item.title}</h2>
              <div className="link_container flex justify-center items-center my-8 space-x-3">
                <a href={item.demo} target="_blank" rel="noopener noreferrer"><FaGlobe className="relative text-3xl hover:text-yellow-300" /></a>
                <a href={item.github} target="_blank" rel="noopener noreferrer"><FaGithub className="relative text-3xl hover:text-yellow-300" /></a>
              </div>
              <div className="description text-justify mb-8">
                <p>{item.description}</p>
              </div>
              <div className="tools text-gray-200 dark:text-gray-800 flex justify-center items-center mb-8 space-x-4 flex-wrap">
                <p className="bg-gray-900 dark:bg-white rounded px-4 py-2 mt-4 ">{item.stackOne}</p>
                <p className="bg-gray-900 dark:bg-white rounded px-4 py-2 mt-4">{item.stackTwo}</p>
                <p className="bg-gray-900 dark:bg-white rounded px-4 py-2 mt-4">{item.stackThree}</p>
                <p className="bg-gray-900 dark:bg-white rounded px-4 py-2 mt-4">{item.stackFour}</p>
              </div>
              <ul className="features text-left ml-6 space-y-2 list-decimal">
                <li> {item.featureOne} </li>
                <li> {item.featureTwo} </li>
                <li> {item.featureThree} </li>
                <li> {item.featureFour} </li>
              </ul>
            </div>
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

