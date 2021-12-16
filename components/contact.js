import styles from '../styles/Contact.module.scss'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Heading from './Heading'

const Contact = () => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section data-aos="fade-up" id={styles.contact}>
      <div className={styles.container}>
        <Heading text={"Contact Me"} />

        <div className={styles.content_container}>
          <div className={styles.content} data-aos="fade-up">
            <p> I am open to all frontend related job offers including landing pages, portfolio websites, company websites and Ecommerce stores, saas product landing pages, etc.
            </p>
            <p> You can reach out to me on any of the following channels and for further discussions or you can just fill out the form with your enquiry and I will surely get back to you immediately.
            </p>
            <div className={styles.social_icons} data-aos="fade-up">
              <a href="mailto:Chulocr8v@gmail.com" target="_blank" rel="noopener noreferrer" ><FaEnvelope id={styles.social_icon} /></a>
              <a href="https://www.linkedin.com/in/bonaventure-nkematu-77b563148" target="_blank" rel="noopener noreferrer" ><FaLinkedin id={styles.social_icon} /></a>
              <a href="https://twitter.com/ChuloCr8v?t=fJXEmjB-AB4pK3_AJtcBUQ&s=09" target="_blank" rel="noopener noreferrer" ><FaTwitter id={styles.social_icon} /></a>
              <a href="https://github.com/ChuloCr8v" target="_blank" rel="noopener noreferrer" ><FaGithub id={styles.social_icon} /></a>
            </div>
          </div>

          <div className={styles.form_container}>
            <p className="font-bold text-xl text-yellow-800 dark:text-yellow-200" data-aos="fade-up">Send a message</p>

            <form data-aos="fade-up" action="https://formsubmit.co/chulocr8v@gmail.com" method="POST" target="_blank" rel="noopener noreferrer" >
              <input type="hidden" name="_next" value="http://cdev.vercel.app/sent" />
              <div className={styles.form_group}>
                <label htmlFor="full name" className="font-bold text-gray-800">Full Name</label>
                <input className="text-gray-800 dark:text-gray-200" type="text" name="name" placeholder="Enter your full name here" required />
              </div>

              <div className={styles.form_group}>
                <label htmlFor="email" className="font-bold text-gray-800">Email</label>
                <input className="text-gray-800 dark:text-gray-200" type="text" nname="email" placeholder="Enter your email address here" required />
              </div>

              <div className={styles.form_group}>
                <label htmlFor="location" className="font-bold text-gray-800">Location</label>
                <input className="text-gray-800 dark:text-gray-200" type="text" name="location" placeholder="Enter your Location here" required />
              </div>

              <div className={styles.form_group}>
                <label htmlFor="message" className="font-bold text-gray-800">Message</label>
                <textarea className="text-gray-800 dark:text-gray-200" name="message" placeholder="Your message ☺" rows="7" cols="25" required />
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