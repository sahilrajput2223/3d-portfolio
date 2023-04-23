import React from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const reactSwal = withReactContent(Swal)

const Contact = () => {
  const formRef = React.useRef();
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send("service_o9sgowm", "template_0atw9rk", {
      from_name: form.name,
      to_name: "Sahil Rajput",
      message: form.message,
      reply_to: form.email,
      form_email: form.email,
      to_email: "rajputsahil.2204@gmail.com",
    },
      'pyzpVvAW8eSCEEr5B').then(() => {
        setLoading(false);
        reactSwal.fire({
          title: <strong>Thank You !</strong>,
          html: <p>Will Get Back to You.</p>,
          icon: 'success',
          didOpen: () => {
            MySwal.showLoading()
          }
        });
        //alert("Thank You, Will Get Back to You.")
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        reactSwal.fire({
          title: <strong>Try Again !</strong>,
          html: <p>Something Went Wrong!</p>,
          icon: 'error',
          didOpen: () => {
            MySwal.showLoading()
          }
        });
        //alert("Something Went Wrong!")
      });
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
            <input type="text" required name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Email</span>
            <input type="email" required name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Message</span>
            <textarea rows='8' name='message' required value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit font-bold text-white shadow-md  shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")