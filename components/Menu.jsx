import styles from '../styles/Menu.module.scss' 
import Link from 'next/link'
import { motion } from 'framer-motion'

const Menu = ({setShowMenu, showMenu}) => {
  return(
      <nav className={styles.nav} id={showMenu ? styles.show_menu : ''} >
          <ul className={styles.menu}>
            <li className={styles.menu_item} onClick={() => setShowMenu(!showMenu)}>
               <Link href="/" >Devchex</Link>
            </li>
            <li className={styles.menu_item} onClick={() => setShowMenu(!showMenu)}>
               <Link href="/portfolio" >Projects</Link>
            </li>
            <li className={styles.menu_item} onClick={() => setShowMenu(!showMenu)}>
               <Link href="/about">About</Link>
            </li>
            <li className={styles.menu_item} onClick={() => setShowMenu(!showMenu)}>
               <Link href="/contact">Hire Me</Link>
            </li>
          </ul>
         
       </nav>
    )
}

export default Menu