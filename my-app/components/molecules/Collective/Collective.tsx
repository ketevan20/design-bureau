import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import TeamMember from '@/components/atoms/TeamMember/TeamMember';
import React from 'react'

const teamMembers = [
    {
        id: 1,
        name: 'Nia Mgaloblishvili',
        role: 'co founder',
        expertise: 'Interior',
        location: 'Tbilisi, Georgia',
        image: '/member1.svg',
        position: 'co founder'
    },
    {
        id: 2,
        name: 'Nia Mgaloblishvili',
        role: 'co founder',
        expertise: 'Interior',
        location: 'Tbilisi, Georgia',
        image: '/member2.svg',
        position: 'co founder'
    },
    {
        id: 3,
        name: 'Nia Mgaloblishvili',
        role: 'co founder',
        expertise: 'Interior',
        location: 'Tbilisi, Georgia',
        image: '/member3.svg',
        position: 'co founder'
    },
    {
        id: 4,
        name: 'Nia Mgaloblishvili',
        role: 'co founder',
        expertise: 'Interior',
        location: 'Tbilisi, Georgia',
        image: '/member4.svg',
        position: 'co founder'
    },
    {
        id: 5,
        name: 'Nia Mgaloblishvili',
        role: 'co founder',
        expertise: 'Interior',
        location: 'Tbilisi, Georgia',
        image: '/member1.svg',
        position: 'co founder'
    },
    {
        id: 6,
        name: 'Nia Mgaloblishvili',
        role: 'co founder',
        expertise: 'Interior',
        location: 'Tbilisi, Georgia',
        image: '/member1.svg',
        position: 'co founder'
    }
]

const Collective = () => {
    const gridColumns = teamMembers.length === 1 ? 'grid-cols-1' : teamMembers.length === 2 ? 'grid-cols-2' : 'grid-cols-3';
    return (
        <div className='w-full max-w-360'>
            <div>
                <Subtitle subtitle='collective' />
                <p className='max-w-112.5 my-3 sm:my-6 font-normal text-[16px] leading-[140%]'>Our strength lies in a collaborative spirit. We are a team of architects, designers, and strategists driven by curiosity.</p>
            </div>
            <div className={`grid grid-cols-1 sm:${gridColumns} gap-5`}>
                {teamMembers.map((member) => (
                    <TeamMember key={member.id} name={member.name} expertise={member.expertise} location={member.location} image={member.image} position={member.position}/>
                ))}
            </div>
        </div>
    )
}

export default Collective