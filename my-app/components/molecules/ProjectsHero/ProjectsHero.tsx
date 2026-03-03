'use client'
import ProjectItem from '@/components/atoms/ProjectItem/ProjectItem'
import Title from '@/components/atoms/Title/Title'
import { ProjectType } from '@/Types/Types'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { body } from 'motion/react-client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

type ProjectsHeroProps = {
  projects: ProjectType[];
};

const ProjectsHero = ({ projects }: ProjectsHeroProps) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);
    const sectionRef = useRef<HTMLDivElement>(null);

    const filteredProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory)

    const totalPages = Math.ceil(filteredProjects.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedProjects = filteredProjects.slice(startIndex, startIndex + pageSize);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory])

    return (
        <div className='w-full max-w-480 pt-[clamp(60px,12vh,155px)] flex flex-col gap-6 lg:gap-12'>
            <div className='w-full flex justify-between gap-8'>
                <Title title='Index of Works' subtitle='Our work' />
                <div className='mt-8 self-end sm:mt-0 flex flex-col md:flex-row gap-3 md:gap-10 md:items-end font-medium text-[12px] leading-[100%] tracking-[2px] sm:tracking-[2.5px] text-black uppercase'>
                    <p onClick={() => setActiveCategory('All')} className={`${activeCategory == 'All' ? 'opacity-100' : 'opacity-50'} cursor-pointer  hover:opacity-100`}>All</p>
                    <p onClick={() => setActiveCategory('architecture')} className={`${activeCategory == 'architecture' ? 'opacity-100' : 'opacity-50'} cursor-pointer  hover:opacity-100`}>Architecture</p>
                    <p onClick={() => setActiveCategory('interior')} className={`${activeCategory == 'interior' ? 'opacity-100' : 'opacity-50'} cursor-pointer  hover:opacity-100`}>interior</p>
                    <p onClick={() => setActiveCategory('product-design')} className={`${activeCategory == 'product-design' ? 'opacity-100' : 'opacity-50'} cursor-pointer  hover:opacity-100`}>Product</p>
                </div>
            </div>
            <div ref={sectionRef} className='w-full h-px bg-[#0000005f]'></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-stretch'>
                {paginatedProjects.map((project, i) => (
                    <Link href={`projects/${project.slug}`} key={project._id}>
                        <motion.div                            
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className='h-full'
                        >
                            <ProjectItem
                                name={project.name}
                                expertise={project.category}
                                location={project.location}
                                image={project.url}
                                year={project.year}
                            />
                        </motion.div>
                    </Link>
                ))}
            </div>
            {
                totalPages > 1 &&
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-[8px] tracking-[10%] uppercase text-gray-400 mb-4'>Showing {currentPage} of {totalPages} pages</p>
                    <div className='flex items-center gap-2 sm:gap-6 '>
                        <button
                            onClick={() => {
                                setCurrentPage(prev => Math.max(prev - 1, 1));
                                window.scrollTo(0, 0);
                            }}
                            disabled={currentPage === 1}
                            className='disabled:text-gray-400 disabled:opacity-50 disabled:border-0 disabled:hover:bg-transparent cursor-pointer border border-gray-400 rounded-full p-2 hover:bg-black hover:text-white'><ArrowLeft size={14} /></button>
                        <div className='flex gap-2 sm:gap-4 text-[10px] tracking-[20%] uppercase text-gray-400'>
                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .filter(page => {
                                    const start = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
                                    const end = Math.min(totalPages, start + 2);
                                    return page >= start && page <= end;
                                })
                                .map(page => (
                                    <button
                                        key={page}
                                        onClick={() => {
                                            setCurrentPage(page);
                                            sectionRef.current?.scrollIntoView({
                                                behavior: 'smooth'
                                            })
                                        }}
                                        className={`w-8 h-8 text-[10px] uppercase tracking-widest transition-all
                                                ${currentPage === page
                                                ? "font-bold border-b border-black"
                                                : "opacity-50 hover:opacity-100"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                        </div>
                        <button
                            onClick={() => {
                                setCurrentPage(prev => Math.min(prev + 1, totalPages));
                                window.scrollTo(0, 0);
                            }}
                            disabled={currentPage === totalPages}
                            className='disabled:text-gray-400 disabled:opacity-50 disabled:border-0 disabled:hover:bg-transparent cursor-pointer border border-gray-400 rounded-full p-2 hover:bg-black hover:text-white'><ArrowRight size={14} /></button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectsHero