'use client'
import Subtitle from "@/components/atoms/Subtitle/Subtitle";
import Title from "@/components/atoms/Title/Title";
import ManageProjects from "@/components/molecules/ManageProjects/ManageProjects";
import { useRouter } from "next/navigation";
import React, { useState } from 'react'

const AdminDashboard = () => {
    const router = useRouter();
    const [ page, setPage ] = useState('projects');

    const logout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    };
    return (
        <div className="w-full m-auto max-w-480 px-4 sm:px-8 py-4 font-inter">
            <div className="flex items-start justify-between">
                <div>
                    <Title title="Dashboard" subtitle="logged in as admin"/>
                </div>
                <button onClick={logout} className="opacity-50 hover:opacity-100 cursor-pointer"><Subtitle subtitle="logout"/></button>
            </div>
            <div className="mt-4 mb-8 flex gap-8 relative">
                <button onClick={() => setPage('projects')} className={`${page == 'projects' ? 'border-b-2': 'opacity-50'} cursor-pointer border-black leading-[300%] font-normal text-[clamp(0.75rem,1.2vw,14px)] tracking-[5%] uppercase`}>projects</button>
                <button onClick={() => setPage('team')} className={`${page == 'team' ? 'border-b-2': 'opacity-50'} cursor-pointer border-black leading-[300%] font-normal text-[clamp(0.75rem,1.2vw,14px)] tracking-[5%] uppercase`}>team</button>
                <button onClick={() => setPage('messages')}  className={`${page == 'messages' ? 'border-b-2': 'opacity-50'} cursor-pointer border-black leading-[300%] font-normal text-[clamp(0.75rem,1.2vw,14px)] tracking-[5%] uppercase`}>messages</button>
                <div className='absolute bottom-0 w-full h-px bg-[#0000005f]'></div>
            </div>

            <ManageProjects />
        </div>
    )
}

export default AdminDashboard