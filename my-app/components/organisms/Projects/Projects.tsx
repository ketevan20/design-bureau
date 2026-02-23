'use client'
import ProjectsHero from '@/components/molecules/ProjectsHero/ProjectsHero'
import React from 'react'

const Projects = () => {
  return (
    <div className='relative flex flex-col items-center gap-20 mb-20 px-3 sm:px-6 lg:px-16 font-inter'>
        <ProjectsHero />
    </div>
  )
}

export default Projects