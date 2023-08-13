import { motion } from "framer-motion"

const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='text-lg font-titleFont tracking-wide text-textGreen'
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Lucas Comamala.<span className='text-textDark mt-2 lgl:mt-4'>I build things for the web.</span>
      </motion.h1>
      <motion.p 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium text-justify"
      >
        {" "}
        I am a web developer with a strong programming foundation, specializing in both front-end and back-end development. My expertise spans various technologies, including harnessing the power of <span className="text-textGreen">React</span> to craft dynamic and responsive user interfaces, as well as utilizing the capabilities of <span className="text-textGreen">Ruby on Rails</span> to build robust and scalable web applications. Whether it's turning a concept into a functional website or optimizing user interfaces for seamless interactions, I take pride in pushing the boundaries of what's possible in the digital realm. I am currently working as a freelance web developer and am open to new opportunities.{" "}
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="h-14 w-64 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out my latest project!
      </motion.button>
    </section>
  )
}

export default Banner
