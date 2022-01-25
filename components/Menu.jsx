import styles from '../styles/Menu.module.scss' 
import Link from 'next/link'
import { motion } from 'framer-motion'

const Menu = ({setShowMenu, showMenu}) => {
  return(
      <nav className="dark:bg-gray-900 bg-gray-200 fixed left-0 top-16 h-full w-full z-20 flex justify-center items-center transform -translate-x-full transition-all transition-duration-300 md:translate-x-0 md:top-0 md:w-auto md:h-0 md:relative md:bg-transparent md:flex-row" id={showMenu ? styles.show_menu : ''} >
          <ul id={styles.menu} className="md:-mt-0 text-gray-500 dark:text-gray-200" >
            <li id={styles.menu_item} onClick={() => setShowMenu(!showMenu)}>
               <Link href="/" >Devchex</Link>
            </li>
            <li id={styles.menu_item} onClick={() => setShowMenu(!showMenu)}>
               <Link href="/portfolio" >Projects</Link>
            </li>
            <li id={styles.menu_item} onClick={() => setShowMenu(!showMenu)}>
               <Link href="/about">About</Link>
            </li>
            <li id={styles.menu_item} onClick={() => setShowMenu(!showMenu)}>
               <Link href="/contact">Hire Me</Link>
            </li>
          </ul>
         
       </nav>
    )
}

export default Menu