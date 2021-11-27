import Head from 'next/head'
import Image from 'next/image'
/*import styles from '../styles/Home.module.css'*/
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/contact'
import Resume from '../components/Resume'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev Chex</title>
        <meta name="Devchex" content="Frontend Developer | JavaScript | ReactJs | NexJs" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main style={{overflow: 'hidden'}} >
        <Hero />
        <Resume />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}