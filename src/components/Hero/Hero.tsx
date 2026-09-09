// import { Flag, Globe, GlobeIcon } from 'lucide-react'
'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
// import useRotatingAnimation from '@/hooks/useRotatingAnimation'
// import Image from 'next/image'
// import { HeroImage } from '../../utils/images'
// import Ellipse from './Ellipse'
const title = 'Crafting innovative solutions to solve real-world problems'

const description =
  'I create modern websites, smart marketing campaigns, and eye-catching designs to help your business grow.'

const Hero = () => {
    // const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({ roles: ['FULLSTACK DEVELOPER', 'WORDPRESS DEVELOPER', 'HEADLESS CMS', 'ELEMENTOR DEVELOPER', 'NEXTJS DEVELOPER'] })
  return (
    <section className="w-full rounded-3xl  px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-pulse-lightss mb-3 inline-flex items-center rounded-full bg-white/80s px-4 py-1.5 text-sm font-medium text-[#E07A5F]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">Hi - I'm Kshitiz Khanal</span>
            <span className="text-accent block text-[1.75rem] font-bold">{role}</span>
          </h1>
        </div>

        <h1 className="mb-4 text-4xl leading-snug font-bold text-[#ffffffab] md:text-5xl md:leading-snug lg:text-6xl lg:leading-snug">
          {title}
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-lg text-[#607b96] md:text-xl">{description}</p>

        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center space-x-2 rounded-full bg-white/70 px-4 py-2 backdrop-blur-sm">
            {/* <GlobeIcon color="#3D8690" size="18" /> */}
            <span className="text-sm font-medium text-[#2F4550]">
              Trusted by clients in 3+ countries
            </span>
          </div>
        </div>

        {/* <Ellipse
            ref={ellipseRef}
            className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
        /> */}
      </div>
    </section>
  )
}

export default Hero