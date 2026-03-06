import ProjectsHero from '@/components/molecules/ProjectsHero/ProjectsHero'
import { ProjectType } from '@/Types/Types'
import React from 'react'

async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, { cache: "no-store" });
  return res.json();
}

const Projects = async () => {
  const allProjects = await getProjects();
  allProjects.sort((a: any, b: any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  return (
    <div className='relative flex flex-col items-center gap-20 mb-20 px-3 sm:px-6 lg:px-16 font-inter'>
        <ProjectsHero projects={allProjects}/>
    </div>
  )
}

export default Projects