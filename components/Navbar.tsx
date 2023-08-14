import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import { MdOutlineClose } from 'react-icons/md';
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';
import { TbBrandGithub } from 'react-icons/tb';

import { logoSvg } from '@/public/assets';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const ref = useRef<string | any>("")

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href?.replace(/.*\#/, '');
    console.log(targetId);
    const target = document.getElementById(targetId!);
    console.log(target);
    target?.scrollIntoView({ behavior: "smooth" });

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    })
    e.currentTarget.classList.add("active");
  }

  function handleClickOutside(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false)
    }
  }

  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Image className='w-14'   src={logoSvg} alt='logo' width={52} height={52} />
        </motion.div>
        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className='flex text-[13px] gap-7'>
            <Link
              href='#home'
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href='#about'
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className='text-textGreen'>01.</span> About
              </motion.li>
            </Link>
            <Link
              href='#experience'
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className='text-textGreen'>02.</span> Experience
              </motion.li>
            </Link>
            <Link
              href='#projects'
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className='text-textGreen'>03.</span> Projects
              </motion.li>
            </Link>
            <Link
              href='#contact'
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                <span className='text-textGreen'>04.</span> Contact
              </motion.li>
            </Link>
          </ul>
        </div>

        {/* Mobile Section */}
        <div 
          onClick={() => setShowMenu(true)}
          className='w-5 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'
        >
          <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all easi-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all easi-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all easi-in-out duration-300'></span>
        </div>
        { showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClickOutside}
            className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='w-[80%] sm:w-[70%] sml:w-[60%] md:w-[50%] h-full overflow-y-scroll scrollbar-none bg-[#112240] flex flex-col items-center px-4 py-10 pt-24 relative'
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-6 right-2'
              />
              <div className='flex flex-col items-center gap-7'>
                <ul className='flex flex-col text-base gap-7'>
                  <Link
                    href='#home'
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href='#about'
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className='text-textGreen'>01.</span> About
                    </motion.li>
                  </Link>
                  <Link
                    href='#experience'
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      <span className='text-textGreen'>02.</span> Experience
                    </motion.li>
                  </Link>
                  <Link
                    href='#projects'
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.6, ease: "easeIn" }}
                    >
                      <span className='text-textGreen'>03.</span> Projects
                    </motion.li>
                  </Link>
                  <Link
                    href='#contact'
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.7, ease: "easeIn" }}
                    >
                      <span className='text-textGreen'>04.</span> Contact
                    </motion.li>
                  </Link>
                </ul>
                <div className='flex gap-4'>
                  <motion.a 
                    href='https://www.linkedin.com/in/lucas-comamala/' 
                    target='_blank'
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.8, ease: "easeIn" }}
                  >
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1.5 transition-all duration-300'><SlSocialLinkedin /></span>
                  </motion.a>
                  <motion.a 
                    href='https://github.com/lucascomamala' 
                    target='_blank'
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.9, ease: "easeIn" }}
                  >
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1.5 transition-all duration-300'><TbBrandGithub /></span>
                  </motion.a>
                  <motion.a 
                    href='https://www.instagram.com/lucas_coma/' 
                    target='_blank'
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 1, ease: "easeIn" }}
                  >
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1.5 transition-all duration-300'><SlSocialInstagram /></span>
                  </motion.a>
                </div>
                <motion.a
                  href='mailto:lucascomamala@gmail.com'
                  target='_blank'
                  className='text-sm w-72 tracking-widest text-textGreen text-center'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 1.1, ease: "easeIn" }}
                >
                  <p>lucascomamala@gmail.com</p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
