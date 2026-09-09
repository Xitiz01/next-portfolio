'use client'

import { useState, useMemo } from 'react'
import { Project } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [showAll, setShowAll] = useState(false)

  // Sort projects numerically by priority before displaying
  const sortedProjects = useMemo(() => {
    if (!projects || !Array.isArray(projects)) return []
    return [...projects].sort(
      (a, b) => (a.priority ?? Infinity) - (b.priority ?? Infinity)
    )
  }, [projects])

  if (sortedProjects.length === 0) return null

  const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, 4)

  return (
    <section id="projects">
      <SectionHeading title="// Projects" />

      {/* Grid container */}
      <div className="my-8 grid grid-cols-1 gap-6 md:my-12 md:grid-cols-2 lg:gap-8">
        {visibleProjects.map((project, index) => {
          if (!project) return null
          return (
            <ProjectCard
              key={project.title ?? project.priority ?? index}
              data={project}
            />
          )
        })}
      </div>

      {/* Toggle Link */}
      {sortedProjects.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="text-accent flex items-center gap-2 text-sm font-medium underline underline-offset-[3px] transition-transform duration-150 hover:scale-105"
          >
            <svg
              className={`h-auto w-[18px] transition-transform duration-200 md:w-5 ${
                showAll ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span>{showAll ? 'See Less' : 'See More'}</span>
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectSection