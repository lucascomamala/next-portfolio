import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow, RxDownload } from 'react-icons/rx'
import { TbBrandGithub } from 'react-icons/tb'

interface Props {
  title: string;
  des: string;
  techs: string[];
  link?: string;
  github?: string;
  download?: string;
}

const ArchiveCard = ({ title, des, techs, link, github, download }: Props) => {
  return (
    <div className='w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-around gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
      <div className='flex justify-between items-center text-4xl'>
        <a href={link} target='_blank'>
          <FaRegFolder className='text-textGreen' />
        </a>
        <div className='flex flex-row gap-6 text-[24px]'>
          { github &&
            <a href={github} target='_blank'>
              <TbBrandGithub className='hover:text-textGreen' />
            </a>
          }
          { link &&
            <a href={link} target='_blank'>
              <RxOpenInNewWindow className='hover:text-textGreen' />
            </a>
          }
          {download &&
            <a href={download} target='_blank'>
              <RxDownload className='hover:text-textGreen' />
            </a>
          }
        </div>
      </div>
      <div>
        <a href={link} target='_blank'>
          <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>{title}</h2>
        </a>
        <p className='text-sm mt-3'>{des}</p>
      </div>
      <ul className='text-xs text-textDark flex items-center gap-4 justify-start flex-wrap'>
        {techs.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArchiveCard
