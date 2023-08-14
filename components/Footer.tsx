import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin, SlSocialInstagram } from 'react-icons/sl';

const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
      <a href='https://www.linkedin.com/in/lucas-comamala/' target='_blank'>
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1.5 transition-all duration-300'><SlSocialLinkedin /></span>
      </a>
      <a href='https://github.com/lucascomamala' target='_blank'>
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1.5 transition-all duration-300'><TbBrandGithub /></span>
      </a>
      <a href='https://www.instagram.com/lucas_coma/' target='_blank'>
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1.5 transition-all duration-300'><SlSocialInstagram /></span>
      </a>
    </div>
  )
}

export default Footer
