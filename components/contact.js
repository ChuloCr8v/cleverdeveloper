import styles from '../styles/Contact.module.scss' 
import {FaArrowRight} from 'react-icons/fa'
import Link from 'next/link'
import {FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaPaperPlane} from 'react-icons/fa'
import AOS from 'aos'
import "aos/dist/aos.css" 
import {useEffect} from 'react'


const Contact = () => {
  
  useEffect(() => { 
    AOS.init({ duration : 500 }); 
  }, []);
  
  return(
    <section id={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading} data-aos="fade-up">Contact Me</h2>
        
        <div className={styles.content_container}>
          <div className={styles.content} data-aos="fade-up">
            <p> I am open to all frontend related job offers including landing pages, portfolio websites, company websites and Ecommerce stores, saas product landing pages, etc. 
            </p>
            <p> You can reach out to me on any of the following channels and for further discussions or you can just fill out the form with your enquiry and I will surely get back to you immediately. 
            </p>
            <div className={styles.social_icons} data-aos="fade-up">
              <a href="https://chexthedev.netlify.app"><FaEnvelope id={styles.social_icon} /></a>
              <a href="https://chexthedev.netlify.app"><FaWhatsapp id={styles.social_icon} /></a>
              <a href="https://www.linkedin.com/in/bonaventure-nkematu-77b563148"><FaLinkedin id={styles.social_icon} /></a>
              <a href="https://github.com/ChuloCr8v"><FaGithub id={styles.social_icon} /></a>
            </div>
          </div>
          
            <div className={styles.form_container}>
              <p data-aos="fade-up">Send a message</p>
              
              <form data-aos="fade-up">
                <div className={styles.form_group}>
                   <label htmlFor="full name">Full Name</label>
                   <input type="text" placeholder="Enter your full name here" required />
                </div>
                
                <div className={styles.form_group}>
                   <label htmlFor="email">Email</label>
                   <input type="text" placeholder="Enter your email address here" required />
                </div>
                
                <div className={styles.form_group}>
                   <label htmlFor="location">Location</label>
                   <input type="text" placeholder="Enter your Location here" required />
                </div>
                
                <div className={styles.form_group}>
                   <label htmlFor="message">Message</label>
                   <textarea placeholder="Your message ☺" rows="7" cols="25" required />
                </div>
                
                <button className={styles.submit}>Send <FaPaperPlane /> </button>
              </form>
            </div>
          
        </div>
      </div>
    </section>
    )
}

export default Contact 