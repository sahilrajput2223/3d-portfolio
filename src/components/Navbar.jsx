import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from "../style"
import { navLinks } from "../constants/constants"
import { logo, menu, close } from "../assets"

const Navbar = () => {

  const [active, setActive] = React.useState('');

  return (
    <nav className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className='w-2 h-2 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Sahil <span className='sm:block hidden'>Computer Engineer</span>
          </p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar