import styles from '../styles/About.module.scss' 
import {FaArrowRight} from 'react-icons/fa'
import Link from 'next/link'
import Html from '../public/html.png'
import Css from '../public/css.png'
import Sass from '../public/sass.png'
import Boostrap from '../public/boostrap.svg'
import Tailwind from '../public/tailwind.png'
import Js from '../public/js.png'
import React from '../public/react.png'
import Next from '../public/next.png'
import AOS from 'aos'
import "aos/dist/aos.css" 
import {useEffect} from 'react'
import Heading from './Heading'


const About = () => {
  
  useEffect(() => { 
    AOS.init({ duration : 500 }); 
  }, []);
  
  return(
    <section data-aos="fade-up" className={styles.about}>
      <div className={styles.container}>
          <h2 className="text-2xl text-yellow-200 text-center mt-6 mb-16 font-bold" data-aos="fade-up" >
        About Me 
      </h2>
        <div className={styles.content_container}>
          <div className={styles.content} data-aos="fade-up">
            <p> Hello. I am Nkematu Bonaventure, a frontend developer with vast experience creating amazing user interfaces and user experience. 
            </p>
            <p> My work stacks include <span>HTML5</span>,  <span>CSS3</span>, <span>JavaScript</span>, <span>React.js</span>, <span>Next.js</span>, <span>WordPress</span>, <span>Sass</span>, <span>Bootstrap</span>, <span>TailwindCss</span>, etc. I create websites that are responsive across devices. 
            </p>
            <a href="https://chexthedev.netlify.app" className={styles.portfolio_link} target="_blank" rel="noopener noreferrer" data-aos="fade-up">Full Portfolio <FaArrowRight className={styles.icon} /></a>
          </div>
  
          <div className={styles.stacks} >
            <h2 className="text-center text-xl text-yellow-200 font-bold" data-aos="fade-up">My Tools</h2>
            <div className={styles.stack_icons} >
              
                <figure data-aos="fade-up">
                  <img src={Html.src} alt="html5" height="60" width="60" className={styles.stack_icon} />
                  <figcaption>HTML5</figcaption>
                </figure>
                  
              
                <figure data-aos="fade-up">
                  <img src={Css.src} alt="html5" height="60" width="60" className={styles.stack_icon} />
                  <figcaption>CSS3</figcaption>
                </figure>
                  
              
                <figure data-aos="fade-up">
                  <img src={Sass.src} alt="html5" height="60" width="60" className={styles.stack_icon} />
                  <figcaption>Sass</figcaption>
                </figure>
                  
              
                <figure data-aos="fade-up">
                  <img src={Boostrap.src} alt="html5" height="60" width="60" className={styles.stack_icon} />
                  <figcaption>Boostrap</figcaption>
                </figure>
                  
              
                <figure data-aos="fade-up">
                  <img src={Tailwind.src} alt="html5" height="60" width="60" className={styles.stack_icon} />
                  <figcaption>Tailwind</figcaption>
                </figure>
                  
              
                <figure data-aos="fade-up">
                  <img src={Js.src} alt="html5" height="60" width="60" className={styles.stack_icon} />
                  <figcaption>JavaScript</figcaption>
                </figure>
                  
              
                <figure data-aos="fade-up">
                  <img src={React.src} alt="html5" height="60" width="60" className={styles.stack_icon} />
                  <figcaption>ReactJs</figcaption>
                </figure>
                  
              
                <figure data-aos="fade-up">
                  <img src={Next.src} alt="html5" height="60" width="60" className={styles.stack_icon} />
                  <figcaption>NextJs</figcaption>
                </figure>
                  
              </div>
          
          </div>
        </div>
      </div>
    </section>
    )
}

export default About 