'use client'
import Subtitle from "@/components/atoms/Subtitle/Subtitle";
import Title from "@/components/atoms/Title/Title";
import ManageProjects from "@/components/molecules/ManageProjects/ManageProjects";
import Messages from "@/components/molecules/Messages/Messages";
import { useRouter } from "next/navigation";
import React, { useState } from 'react'

const AdminDashboard = () => {
    const router = useRouter();
    const [page, setPage] = useState('projects');

    const logout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    };
    return (
        <div className="flex flex-col items-center gap-20 mb-20 px-3 sm:px-6 lg:px-16 font-inter">
            <div className="w-full max-w-480 pt-[clamp(60px,12vh,155px)]">
                <div className="flex items-start justify-between">
                    <div>
                        <Title title="Dashboard" subtitle="logged in as admin" />
                    </div>
                    <button onClick={logout} className="opacity-50 hover:opacity-100 cursor-pointer"><Subtitle subtitle="logout" /></button>
                </div>
                <div className="mt-4 mb-8 flex gap-8 relative">
                    <button onClick={() => setPage('projects')} className={`${page == 'projects' ? 'border-b-2' : 'opacity-50'} cursor-pointer border-black leading-[300%] font-normal text-[clamp(0.75rem,1.2vw,14px)] tracking-[5%] uppercase`}>projects</button>
                    {/* <button onClick={() => setPage('team')} className={`${page == 'team' ? 'border-b-2': 'opacity-50'} cursor-pointer border-black leading-[300%] font-normal text-[clamp(0.75rem,1.2vw,14px)] tracking-[5%] uppercase`}>team</button> */}
                    <button onClick={() => setPage('messages')} className={`${page == 'messages' ? 'border-b-2' : 'opacity-50'} cursor-pointer border-black leading-[300%] font-normal text-[clamp(0.75rem,1.2vw,14px)] tracking-[5%] uppercase`}>messages</button>
                    <div className='absolute bottom-0 w-full h-px bg-[#0000005f]'></div>
                </div>

                {page === 'projects' && <ManageProjects />}
                {page === 'messages' && <Messages />}
            </div>
        </div>
    )
}

export default AdminDashboard