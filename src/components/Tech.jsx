import React from 'react'
import { technologies } from '../constants/constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { textVariant } from '../utils/motion'
import { BallCanvas } from './canvas'
import { motion } from 'framer-motion'

const Tech = () => {
  return (
    <React.Fragment>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What I Know
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Technologies I Use & Learn.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-around">
        {technologies.map((tech) => (
          <div className="w-[28] h-[28]" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default SectionWrapper(Tech, "tech")