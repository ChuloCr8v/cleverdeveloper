import {FaGlobe, FaGithub} from 'react-icons/fa' 
import Image from 'next/image'
import Projects from './../components/Projects'

const projectDetails = (props) => {
  return(
  <div className="mx-auto py-10 pt-20 p-4 min-h-full" style={{width: 'min(90%, 80rem'}} >
      <h2 className="block my-12 text-center text-4xl text-bold text-yellow-800 dark:text-yellow-200">{props.title}</h2>
      <div className="flex flex-col justify-center items-center ">
        <Image src={props.img} alt={props.title} height="700" width="1000" className="my-20 shadow-2xl" />
      </div>
      <div className="link_container flex justify-center items-center my-8 space-x-3">
        <a href={props.demo} target="_blank" rel="noopener noreferrer"><FaGlobe className="text-3xl hover:text-yellow-300" /></a>
        <a href={props.github} target="_blank" rel="noopener noreferrer"><FaGithub className="text-3xl hover:text-yellow-300" /></a>
      </div>
      
      <h2 className="block mt-20 mb-4 text-center text-2xl text-bold text-yellow-800 dark:text-yellow-200">Description</h2>
      <p className="text-sm text-center my-4 md:mx-12">{props.description}</p>
      
      <h2 className="block mt-20 mb-4 text-center text-2xl text-bold text-yellow-800 dark:text-yellow-200">Tools Used</h2>
      <ol className="stacks flex flex-wrap gap-4 justify-center items-center my-4 px-4">
        <li className="dark:bg-gray-200 bg-gray-900 p-2 rounded shadow-inner text-sm text-center text-gray-200 dark:text-gray-900">{props.stackOne}</li>
        <li className=" dark:bg-gray-200 bg-gray-900 p-2 rounded shadow-inner text-sm text-center text-gray-200 dark:text-gray-900">{props.stackTwo}</li>
        <li className=" dark:bg-gray-200 bg-gray-900 p-2 rounded shadow-inner text-sm text-center text-gray-200 dark:text-gray-900">{props.stackThree}</li>
        <li className=" dark:bg-gray-200 bg-gray-900 p-2 rounded shadow-inner text-sm text-center text-gray-200 dark:text-gray-900">{props.stackFour}</li>
      </ol>
      
      <h2 className="block mt-20 mb-4 text-center text-2xl text-bold text-yellow-800 dark:text-yellow-200">Features </h2>
      <ol className="list-disc features p-10 dark:bg-gray-200 bg-gray-900 text-center space-y-2 my-4 md:mx-36 rounded-2xl">
        <li className="text-sm text-gray-200 dark:text-gray-900 border-b border-opacity-40 border-yellow-200 dark:border-yellow-800 pb-3">{props.featureOne}</li>
        <li className="text-sm text-gray-200 dark:text-gray-900 border-b border-opacity-40 border-yellow-200 dark:border-yellow-800 pb-3">{props.featureTwo}</li>
        <li className="text-sm text-gray-200 dark:text-gray-900 border-b border-opacity-40 border-yellow-200 dark:border-yellow-800 pb-3">{props.featureThree}</li>
        <li className="text-sm text-gray-200 dark:text-gray-900 border-b border-opacity-40 border-yellow-200 dark:border-yellow-800 pb-3">{props.featureFour}</li>
      </ol>
      <div className="more_projects mb-20 ">
        <Projects />
      </div>
  </div>
    )
}

export async function getServerSideProps(context) { 
  console.log(context.query); 
  return { 
    props: {        
      title: context.query.title, 
      img: context.query.img, 
      description: context.query.description, 
      github: context.query.github,
      demo: context.query.demo,
      stackOne: context.query.stackOne,
      stackTwo: context.query.stackTwo,
      stackThree: context.query.stackThree,
      stackFour: context.query.stackFour,
      featureOne: context.query.featureOne,
      featureTwo: context.query.featureTwo,
      featureThree: context.query.featureThree,
      featureFour: context.query.featureFour,
      
    }, 
  };
}

export default projectDetails





