import React from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = React.useRef();
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {

  }

  return (
    <div className='xs:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText} >Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Message</span>
            <textarea rows='8' name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit font-bold text-white shadow-md  shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")