import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import TeamMember from '@/components/atoms/TeamMember/TeamMember';
import { TeamMemberType } from '@/Types/Types';
import React from 'react'

type CollectiveProps = {
    teamMembers: TeamMemberType[];
}

const Collective = ({teamMembers}: CollectiveProps) => {
    return (
        <div className='w-full max-w-480'>
            <div>
                <Subtitle subtitle='collective' />
                <p className='max-w-112.5 my-3 sm:my-6 font-normal text-[16px] leading-[140%]'>Our strength lies in a collaborative spirit. We are a team of architects, designers, and strategists driven by curiosity.</p>
            </div>
            <div className={`grid gap-5 grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2`}>
                {teamMembers.map((member) => (
                    <TeamMember key={member._id} name={member.name} expertise={member.expertise} location={member.location} image={member.url} position={member.position}/>
                ))}
            </div>
        </div>
    )
}

export default Collective