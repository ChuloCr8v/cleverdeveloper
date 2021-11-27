import styles from '../styles/Resume.module.scss' 
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const Resume = () => {
  
  const [resumeLink, setResumeLink] = useState(false);
  const [scroll, setScroll] = useState('');
  
  
  useEffect(() => {
    setScroll('window.pageYOffset')
  },[])
  
  let prevPos = scroll;
  const showResumeLink = () => {
    let currentPos = window.pageYOffset;
    if(currentPos < prevPos) {
      setResumeLink(true)
    } else {
      setResumeLink(false)
    }
    prevPos = currentPos
  }
  
  useEffect(() => {
    window.addEventListener('scroll', showResumeLink);
    return () => { 
      window.removeEventListener('scroll', showResumeLink); 
    };  
  },[])
  
  return(
    <div className={styles.resume} id={resumeLink ? styles.show_resume : styles.hide_resume} >
      <Link href="https://drive.google.com/file/d/1Zz-P6a22xSOko-LlfBpeBRYnfMQu5jGh/view?usp=drivesdk"  target="_blank" rel="noopener noreferrer">
         My Resume
      </Link>
    </div>
    )
}

export default Resume 