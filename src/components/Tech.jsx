import React from 'react'
import { technologies } from '../constants/constants'
import { SectionWrapper } from '../hoc'
import { BallCanvas } from './canvas'


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-1">
      {technologies.map((tech) => (
        <div className="w-[28] h-[28]" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")