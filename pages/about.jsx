import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/contact'

const about  = () => {
  return(
    <div>
      <About />
      <div style={{marginTop: '5rem'}}>
        <Projects />
        <Contact />
      </div>
    </div>
    )
}

export default about