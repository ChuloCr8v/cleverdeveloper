import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/contact'

const contactMe = () => {
  return(
    <div>
      <Contact />
      <div style={{marginTop: '15rem'}}>
        <Projects />
        <About />
      </div>
    </div>
    )
}

export default contactMe 