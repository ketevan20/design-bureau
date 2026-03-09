import TeamForm from '@/components/atoms/TeamForm/TeamForm';
import { TeamMemberType } from '@/Types/Types';
import { Delete, Edit, Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ManageTeam = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMemberType[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState<TeamMemberType | null>(null)

  const fetchTeamMembers = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/team-members`, { cache: "no-store" });
    const members = await res.json();
    setTeamMembers(members);
    setLoading(false);
  }

  useEffect(() => {
    fetchTeamMembers();
  }, [])

  if (loading) return <div className='bg-white p-4 min-h-20 h-[20vh]'>Loading...</div>;

  const deleteTeamMember = async (teamMemberId: string) => {
    if (!teamMemberId) {
      return alert("Invalid project ID");
    }

    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch(`/api/admin/teamMembers/${teamMemberId}`, { method: 'DELETE' });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete project");
      }

      setTeamMembers(teamMembers.filter(member => member._id !== teamMemberId));

      alert("Project deleted successfully");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <div className='bg-white p-4'>
      <div className='flex justify-between'>
        <h1 className='font-cormorant font-bold text-xl'>Manage members</h1>
        <button onClick={() => { setOpen(true) }} className='bg-black text-white text-[12px] px-4 py-1 flex items-center gap-2 font-normal tracking-[10%] uppercase hover:opacity-70'><Plus size={12} /> Add member</button>
      </div>
      <div className='w-full h-px bg-[#0000005f] my-4'></div>
      <div className='flex flex-col gap-4'>
        {
          teamMembers.map((member) =>
            <div key={member._id} className='border border-[#00000030] p-3 flex justify-between hover:bg-[#F2F0EF]'>
              <div className='flex items-center gap-4'>
                <img src={member.url} alt="" className='w-12 h-12 object-cover' />
                <div>
                  <p className='font-regular text-[12px] sm:text-[clamp(0.75rem,2vh,0.9rem)] leading-4.25 tracking-[20%] uppercase'>{member.name}</p>
                  <p className='font-regular text-[10px] leading-4.25 tracking-[20%] opacity-60'>{member.expertise} — {member.position}</p>
                </div>
              </div>
              <div className='flex gap-4'>
                <button onClick={() => { setMemberToEdit(member); setOpen(true) }} className='hover:text-blue-600' title='Edit'><Edit size={14} /></button>
                <button onClick={() => { deleteTeamMember(member._id) }} className='hover:text-red-600' title='Delete'><Delete size={16} /></button>
              </div>
            </div>
          )
        }
      </div>

      <TeamForm isOpen={open} setIsOpen={setOpen} member={memberToEdit} setMember={setMemberToEdit} fetchTeamMembers={fetchTeamMembers}/>
    </div>
  )
}

export default ManageTeam