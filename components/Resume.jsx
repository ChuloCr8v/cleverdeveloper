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
    <div className="dark:bg-white bg-gray-800 fixed right-0 top-60 z-20 py-2 px-6 rounded-2xl shadow-2xl transition all duration-1500" id={resumeLink ? styles.show_resume : styles.hide_resume} >
      <a href="https://drive.google.com/file/d/1Zz-P6a22xSOko-LlfBpeBRYnfMQu5jGh/view?usp=drivesdk"  target="_blank" rel="noopener noreferrer" className="text-gray-200 dark:text-gray-800 font-bold">
         My Resume
      </a>
    </div>
    )
}

export default Resume 