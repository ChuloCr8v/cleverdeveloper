import styles from '../styles/Hero.module.scss' 
import Image from 'next/image'
import heroImg from '../public/hero.svg'
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

const Hero = () => {
  
  useEffect(() => { 
    AOS.init({ duration : 2000 }); 
  }, []);
  
  return(
    <section className={styles.hero} data-aos="fade-in" >
      <div className={styles.container}>
      
        <div className={styles.content_container && styles.hero_content_container}>
        
          <div className={styles.intro}>
            <h2> Hi, </h2>
            <h1>I'm <span className={styles.name}>Chex<span>Chex</span></span></h1>
          </div>
          <div className={styles.stacks}>
            <p> a frontend developer currently working with </p>
            <div className={styles.stack_icons} >
            
              <figure>
                <img src={Html.src} alt="html5" height="40" width="40" className={styles.stack_icon} />
                <figcaption>HTML5</figcaption>
              </figure>
                
            
              <figure>
                <img src={Css.src} alt="html5" height="40" width="40" className={styles.stack_icon} />
                <figcaption>CSS3</figcaption>
              </figure>
                
            
              <figure>
                <img src={Sass.src} alt="html5" height="40" width="40" className={styles.stack_icon} />
                <figcaption>Sass</figcaption>
              </figure>
                
            
              <figure>
                <img src={Boostrap.src} alt="html5" height="40" width="40" className={styles.stack_icon} />
                <figcaption>Boostrap</figcaption>
              </figure>
                
            
              <figure>
                <img src={Tailwind.src} alt="html5" height="40" width="40" className={styles.stack_icon} />
                <figcaption>Tailwind</figcaption>
              </figure>
                
            
              <figure>
                <img src={Js.src} alt="html5" height="40" width="40" className={styles.stack_icon} />
                <figcaption>JavaScript</figcaption>
              </figure>
                
            
              <figure>
                <img src={React.src} alt="html5" height="40" width="40" className={styles.stack_icon} />
                <figcaption>ReactJs</figcaption>
              </figure>
                
            
              <figure>
                <img src={Next.src} alt="html5" height="40" width="40" className={styles.stack_icon} />
                <figcaption>NextJs</figcaption>
              </figure>
                
            </div>
          </div>
          
        </div>
        
        <div className={styles.hero_img} data-aos="fade-up">
          <img src={heroImg.src} alt="dev chex" />
        </div>
        
      </div>
      
    </section>
    )
}

export default Hero