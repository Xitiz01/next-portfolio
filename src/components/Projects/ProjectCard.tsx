import { Project } from '@/lib/types'
import Image, { StaticImageData } from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'

interface IconTextProps {
  icon: string | StaticImageData
  text: string
}

const IconText: React.FC<IconTextProps> = ({ icon, text }) => (
  <li className="flex items-center gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  if (!data) return null
  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    livePreview,
    githubLink,
    siteAge,
    type,
    cover,
  } = data

  const validCover = cover && cover.trim() !== '' ? cover : '/images/projects/percoid-academy.webp'

  return (
    <div className="bg-secondary border-border flex h-full flex-col justify-between rounded-[14px] border p-4 sm:p-5 transition-all duration-200 hover:border-accent/40">
      {/* Container: Stacks vertically on mobile, switches to row on sm screens (640px+) */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-secondary-content text-base font-semibold md:text-lg">{title}</h3>
            {type && (
              <span
                className={`rounded-md bg-[#FFFFFF1A] px-2 py-0.5 text-xs font-medium ${
                  type === 'New 🔥' ? 'animate-blink text-tag' : 'text-accent'
                } backdrop-blur-[80px]`}>
                {type}
              </span>
            )}
          </div>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {(visitors || numberOfSales) && (
              <IconText text={(visitors || numberOfSales)?.toString() || ''} icon={Likes} />
            )}
            {siteAge && <IconText text={siteAge} icon={Timer} />}
            {earned && <IconText text={earned} icon={Earning} />}
            {(ratings || githubStars) && (
              <IconText text={(ratings || githubStars)?.toString() || ''} icon={Star} />
            )}
          </ul>
        </div>

        {/* Fixed Aspect Image Box: Full width on mobile, thumbnail on tablet+ */}
        <figure className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg sm:h-[90px] sm:w-[150px]">
          <Image
            src={validCover}
            fill
            alt={title ? `${title} Cover` : 'Project Cover'}
            className="object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
            sizes="(max-width: 640px) 100vw, 150px"
          />
        </figure>
      </div>

      <div className="mt-4 flex flex-col justify-between gap-4">
        <div className="bg-primary text-primary-content h-[88px] overflow-y-auto rounded-xl p-3 scrollbar-thin">
          <p className="text-sm font-normal leading-relaxed">{shortDescription}</p>
        </div>

        <div className="flex flex-wrap items-center gap-5 pt-1">
          {livePreview && (
            <a
              href={livePreview}
              className="text-accent flex items-center gap-2 text-sm font-medium underline underline-offset-[3px] transition-transform duration-150 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer">
              <PreviewIcon className="h-auto w-[18px] md:w-5" />
              <span>Live Preview</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="text-accent flex items-center gap-2 text-sm font-medium underline underline-offset-[3px] transition-transform duration-150 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer">
              <GithubIcon className="w-[18px] md:w-5" />
              <span>Github Link</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard