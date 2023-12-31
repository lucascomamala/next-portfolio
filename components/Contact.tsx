import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.section id='contact' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 1.5 }}
    >
      <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        04. Whats&#39;s Next?
      </p>
      <h2 className='text-5xl font-titleFont font-semibold'>Get in touch</h2>
      <p className='max-w-[600px] text-center text-textDark'>
        My inbox is always open! Whether you have an idea for a project, a question or just want to say hi, I&#39;ll try my best to get back to you!
      </p>
      <a href="mailto:lucascomamala@gmail.com?Subject=Enquiry" target="_blank">
        <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>
          Say Hello
        </button>
      </a>
    </motion.section>
  )
}

export default Contact
