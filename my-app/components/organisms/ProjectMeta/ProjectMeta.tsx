import MetaItem from '@/components/molecules/MetaItem/MetaItem'
import React from 'react'

async function getProject(slug: string) {
  const res = await fetch(
    `https://design-bureau-api.onrender.com/projects/slug/${slug}`)
  return res.json()
}

const ProjectMeta = async ({ slug }: { slug: string }) => {
  const project = await getProject(slug);

  return (
    <div className='flex flex-col items-center gap-20 mb-20 px-3 sm:px-6 lg:px-16 font-inter'>
      <MetaItem project={project}/>
    </div>
  )
}

export default ProjectMeta