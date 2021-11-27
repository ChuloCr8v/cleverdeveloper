import styles from '../../styles/Header.module.scss'
import Logo from '../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link' 
import {FaBars, FaSun, FaMoon} from 'react-icons/fa'
import Menu from '../../components/Menu'
import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const Header = () => {
  
  const [showMenu, setShowMenu] = useState(false);
  const [dark, setDark] = useState(false);
  const [shadow, setShadow] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
  const [scroll, setScrollY] = useState('') 
  
  useEffect(() => { 
    setScrollY(window.pageYOffset)
  }, []) 
  
  let prevPos = scroll;
  const header = () => { 
    let currentPos = window.pageYOffset;
    if(currentPos > prevPos) { 
      setShowHeader(true)
    } else { 
      setShowHeader(false) 
    } 
    prevPos = currentPos 
  } 
  
  useEffect(() => { 
    window.addEventListener('scroll', header); 
    return () => { 
      window.removeEventListener('scroll', header); 
    }; 
  }, [])

  
  const headerShadow = () => {
    let currentPos = scrollY;
    
    if (currentPos > 100) {
      setShadow(true)
    } else {
      setShadow(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', headerShadow)
  },[])
  
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowMenu(false)
    })
  },[])
  
  
  
  return(
    <header id={styles.header} className={showHeader ? styles.show_header : ''} style={{boxShadow: `${shadow ? '3px 3px 32px 1px rgb(0,0,0,0.06)' : ''}`}} >
     <div className={styles.container}>
       <Link href="/" className={styles.logo}>
          <Image src={Logo} alt="dev chex logo" height="50" width="40" />
       </Link>
       
       <div className={styles.bar_container}>
       
         <div className={styles.dark_mode}>
           {dark && <FaSun className={styles.icon} onClick={() => setDark(!dark)} />} 
           {!dark && <FaMoon className={styles.icon} onClick={() => setDark(!dark)} />} 
         </div>
         
         <FaBars className={styles.menu_icon} onClick={() => setShowMenu(!showMenu)} style={{color: `${showMenu ? 'red' : ''}`, transform: `rotateY(${showMenu ? '45deg' : '0'}) `}} />
     </div>
      <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
    </header>
    )
}

export default Header 