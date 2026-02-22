'use client'
import ProjectItem from '@/components/atoms/ProjectItem/ProjectItem'
import Title from '@/components/atoms/Title/Title'
import React, { act, useState } from 'react'

const projects = [
    {
        id: '1',
        name: 'APARTMENT WITH CITYSCAPE',
        expertise: 'Interior',
        location: 'Tbilisi, Georgia',
        image: '/project.svg',
        year: '2024',
        category: 'Interior'
    },
    {
        id: '2',
        name: 'Tskneti Architecture',
        expertise: 'Architecture',
        location: 'Tbilisi, Georgia',
        image: '/Tskneti_Architecture.svg',
        year: '2024',
        category: 'Architecture'
    },
    {
        id: '3',
        name: 'APARTMENT WITH CITYSCAPE',
        expertise: 'Interior',
        location: 'Tbilisi, Georgia',
        image: '/project.svg',
        year: '2024',
        category: 'Interior'
    },
    {
        id: '4',
        name: 'Tskneti Architecture',
        expertise: 'Architecture',
        location: 'Tbilisi, Georgia',
        image: '/Tskneti_Architecture.svg',
        year: '2024',
        category: 'Architecture'
    },
    {
        id: '5',
        name: 'APARTMENT WITH CITYSCAPE',
        expertise: 'Interior',
        location: 'Tbilisi, Georgia',
        image: '/project.svg',
        year: '2024',
        category: 'Interior'
    },
    {
        id: '6',
        name: 'Tskneti Architecture',
        expertise: 'Architecture',
        location: 'Tbilisi, Georgia',
        image: '/Tskneti_Architecture.svg',
        year: '2024',
        category: 'Architecture'
    },
    {
        id: '7',
        name: 'APARTMENT WITH CITYSCAPE',
        expertise: 'Interior',
        location: 'Tbilisi, Georgia',
        image: '/project.svg',
        year: '2024',
        category: 'Interior'
    },
    {
        id: '8',
        name: 'Tskneti Architecture',
        expertise: 'Architecture',
        location: 'Tbilisi, Georgia',
        image: '/Tskneti_Architecture.svg',
        year: '2024',
        category: 'Architecture'
    },
    {
        id: '9',
        name: 'APARTMENT WITH CITYSCAPE',
        expertise: 'Interior',
        location: 'Tbilisi, Georgia',
        image: '/project.svg',
        year: '2024',
        category: 'Interior'
    },
    {
        id: '10',
        name: 'Tskneti Architecture',
        expertise: 'Architecture',
        location: 'Tbilisi, Georgia',
        image: '/Tskneti_Architecture.svg',
        year: '2024',
        category: 'Architecture'
    }
]

const ProjectsHero = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory)

    return (
        <div className='w-full max-w-360 min-h-screen pt-[clamp(60px,12vh,155px)] flex flex-col gap-6 lg:gap-12'>
            <div className='w-full flex justify-between'>
                <Title title='Index of Works' subtitle='Our work' />
                <div className='flex gap-10 items-end font-medium text-[12px] leading-[100%] tracking-[2.5px] text-black uppercase'>
                    <p onClick={() => setActiveCategory('All')} className={`${activeCategory == 'All' ? 'opacity-100' : 'opacity-50'} cursor-pointer  hover:opacity-100`}>All</p>
                    <p onClick={() => setActiveCategory('Architecture')} className={`${activeCategory == 'Architecture' ? 'opacity-100' : 'opacity-50'} cursor-pointer  hover:opacity-100`}>Architecture</p>
                    <p onClick={() => setActiveCategory('Interior')} className={`${activeCategory == 'Interior' ? 'opacity-100' : 'opacity-50'} cursor-pointer  hover:opacity-100`}>interior</p>
                </div>
            </div>
            <div className='w-full h-px bg-[#0000005f]'></div>
            <div className='grid grid-cols-3 gap-5'>
                {filteredProjects.map((project) => (
                    <ProjectItem
                        key={project.id}
                        name={project.name}
                        expertise={project.expertise}
                        location={project.location}
                        image={project.image}
                        year={project.year}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectsHero