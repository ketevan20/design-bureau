'use client'
import { ProjectType } from '@/Types/Types';
import { Delete, Edit, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ProjectForm from '../ProjectsForm/ProjectForm';

const ManageProjects = () => {
    const [allProjects, setAllProjects] = useState<ProjectType[]>([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen ] = useState(false); 
    const [projectToEdit, setProjectToEdit ] = useState<ProjectType | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, { cache: "no-store" });
            const data = await res.json();
            data.sort((a: any, b: any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
            setAllProjects(data);
            setLoading(false);
        };
        fetchProjects();
    }, []);

    if (loading) return <div className='bg-white p-4'>Loading...</div>;

    const deleteProject = async (projectId: string) => {
        if (!projectId) {
            return alert("Invalid project ID");
        }

        if (!confirm("Are you sure you want to delete this project?")) return;

        try {
            const res = await fetch(`/api/admin/projects/${projectId}`, { method: "DELETE" });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Failed to delete project");

            setAllProjects(prev => prev.filter(p => p._id !== projectId));
            alert("Project deleted successfully");
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <div className='bg-white p-4'>
            <div className='flex justify-between'>
                <h1 className='font-cormorant font-bold text-xl'>Manage Projects</h1>
                <button onClick={() => {setIsOpen(!isOpen)}} className='bg-black text-white text-[12px] px-4 py-1 flex items-center gap-2 font-normal tracking-[10%] uppercase hover:opacity-70'><Plus size={12} /> Add Project</button>
            </div>
            <div className='w-full h-px bg-[#0000005f] my-4'></div>
            <div className='flex flex-col gap-4'>
                {
                    allProjects.map((project) =>
                        <div key={project._id} className='border border-[#00000030] p-3 flex justify-between hover:bg-[#F2F0EF]'>
                            <div className='flex items-center gap-4'>
                                <img src={project.url} alt="" className='w-12 h-12 object-cover' />
                                <div>
                                    <p className='font-regular text-[12px] sm:text-[clamp(0.75rem,2vh,0.9rem)] leading-4.25 tracking-[20%] uppercase'>{project.name}</p>
                                    <p className='font-regular text-[10px] leading-4.25 tracking-[20%] opacity-60'>{project.category} — {project.location}</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <button onClick={() => {setIsOpen(!isOpen); setProjectToEdit(project);}} className='hover:text-blue-600'><Edit size={14} /></button>
                                <button onClick={() => deleteProject(project._id)} className='hover:text-red-600'><Delete size={16} /></button>
                            </div>
                        </div>
                    )
                }
            </div>

            <ProjectForm isOpen={isOpen} setIsOpen={setIsOpen} project={projectToEdit} setProjectToEdit={setProjectToEdit}/>
        </div>
    )
}

export default ManageProjects