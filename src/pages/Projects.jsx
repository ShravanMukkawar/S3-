import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

export default function Projects(){
  const projects = [
    {
      title: 'Legal Beacon Search',
      description: 'A smart legal research platform that helps lawyers find case laws and documents quickly and easily. Search, upload files, and organize your research all in one place.',
      tech: 'React · TypeScript · Supabase',
      url: 'https://legal-beacon-search.vercel.app/',
      image: 'https://kroolo.com/_next/image?url=https%3A%2F%2Fd1x9j2lb4srxrw.cloudfront.net%2Fmedia%2Fhome%2Fpost%2Fimages%2Ffeature%2FThumbnails_sRMs3kk.png&w=1200&q=75'
    },
    {
      title: 'SwapSpot (Student Marketplace)',
      description: 'A marketplace built for students to buy and sell used textbooks, gadgets, and items. Sign in with Google and start trading with other students instantly.',
      tech: 'Next.js · Prisma · MongoDB · Cloudinary',
      url: 'https://sarthak-swapspot.vercel.app/',
      image: 'https://arateg.com/static/images/case-education-marketplace_1920.jpg'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <Reveal>
        <h2 className="text-4xl font-black mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Our Works</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 150}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
