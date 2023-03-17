import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants/constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <React.Fragment>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.5, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        2.6+ years experienced Java developer with a solid understanding of enterprise-level application development. Proficient in Java, Spring Framework, Hibernate, Spring boot, Python. Strong understanding of software development methodologies, including Agile and Scrum. Passionate about delivering high-quality and efficient code.
        <br />
        Strong desire to learn and stay current with the latest technologies, including Artificial Intelligence, Machine Learning and Flutter.
        <br />
        <b className="text-white">Photoshop</b>: Skilled in image editing and manipulation, with experience in creating designs.
        <br />
        <b className="text-white">Blogging</b>: Passionate about writing and sharing ideas on any topics. you can read my blogs at <a href='https://sahilrajput.hashnode.dev'>Hashnode</a>
        <br />
        <b className="text-white">Gaming</b>: Avid player with knowledge of various platforms and games, experience in both single and multiplayer gaming.
        <br />
        Seeking to leverage my skills and experience to contribute to the success of a dynamic organization.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {console.log(services)}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default SectionWrapper(About, "about")