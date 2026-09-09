// src/services/index.ts
import { projects as staticProjects } from '@/appData'
import { Project, Testimonial } from '@/lib/types'

// Get all projects
const getAllProjects = async (): Promise<Project[]> => {
  const projects = staticProjects as unknown as Project[]
  return [...projects].sort(
    (a, b) => (a.priority ?? Infinity) - (b.priority ?? Infinity)
  )
}

// Get all testimonials directly without filesystem calls during Netlify bundling
const getAllTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const { promises: fs } = await import('fs')
    const path = await import('path')

    const testimonialsPath = path.join(process.cwd(), 'content/testimonials')
    const testimonialsName = await fs.readdir(testimonialsPath)

    const testimonials = await Promise.all(
      testimonialsName.map(async (fileName) => {
        const filePath = path.join(testimonialsPath, fileName)
        const fileContent = await fs.readFile(filePath, 'utf8')
        return JSON.parse(fileContent)
      })
    )

    return testimonials.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  } catch (error) {
    console.error('Error loading testimonials:', error)
    return []
  }
}

export { getAllProjects, getAllTestimonials }