import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Heading = ({ text }) => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="">
      <h2 className="text-2xl dark:text-yellow-200 text-yellow-800 text-center mt-6 mb-16 font-bold" data-aos="fade-up" >
        {text}
      </h2>
    </div>
  )
}

export default Heading