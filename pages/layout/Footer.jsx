import styles from '../../styles/Footer.module.scss' 
import AOS from 'aos'
import "aos/dist/aos.css" 
import {useEffect} from 'react'


const Footer = () => {
  
  useEffect(() => { 
    AOS.init({ duration : 500 }); 
  }, []);
  
  return(
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p data-aos="fade-up">Copyright 2021 @ </p> <a href="https://www.linkedin.com/in/bonaventure-nkematu-77b563148" target="_blank" rel="noopener noreferrer">Nkematu Bonaventure Chinecherem</a>
      </div>
    </footer>
    )
}

export default Footer 