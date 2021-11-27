import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/contact'

const Portfolio = () => {
  return(
    <div>
      <div style={{paddingTop: '20rem'}}>
        <Projects />
      </div>
        <About />
        <Contact />
    </div>
    )
}

export default Portfolio 