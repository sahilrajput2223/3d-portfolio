import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { projects } from '../constants/constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ project, index }) => {
  return (
    <Tilt className="xs:w-[350px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className="bg-tertiary rounded-[20px] p-5 flex justify-center items-center flex-col"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div onClick={() => {
                window.open(project.source_code_link, "_blank")
              }} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">
              {project.name}
            </h3>
            <p className="mt-2 text-secondary text-[14px]">
              {project.description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}

const Works = () => {
  return (
    <React.Fragment>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet quam in mauris aliquam tincidunt. Pellentesque euismod fringilla elit, sit amet feugiat elit suscipit id. Sed ac luctus nisl. Duis aliquam hendrerit justo, eu tincidunt enim pulvinar vel. Fusce accumsan euismod eros, a tristique felis placerat in. Pellentesque eget quam vitae lectus imperdiet tincidunt nec vel leo. Donec aliquam, est ut scelerisque sagittis, quam massa imperdiet nulla, non ultricies ipsum mi vel justo. Maecenas fermentum dapibus velit, eu viverra leo aliquet in. Sed venenatis dolor ut orci euismod, non facilisis purus finibus. Nullam eget sapien euismod, molestie ipsum id, eleifend leo. Aenean ac ligula fermentum, maximus libero vitae, ultricies purus. Nam pretium neque a diam consequat consequat. Curabitur tincidunt enim sed elementum lacinia. Sed tempor tellus ac mauris eleifend, in blandit metus euismod.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} index={index} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default SectionWrapper(Works, "work")