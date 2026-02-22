import React from 'react'

type TeamMemberProps = {
    name: string;
    expertise: string;
    location: string;
    image: string;
    position: string;
}
const TeamMember = ({ name, expertise, location, image, position }: TeamMemberProps) => {
    return (
        <div className='group p-3 bg-white flex flex-col gap-3 h-full overflow-hidden'>
            <div className='overflow-hidden'>
                <img src={image} alt="" className='aspect-400/267 w-full object-cover overflow-hidden group-hover:scale-110 origin-center transition-all duration-1000 ease-out' />
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='font-cormorant font-light text-[14px] leading-[20.1px] text-[rgba(26,26,26,1)]'>{name}</p>
                    <p className='font-light text-[8px] leading-[12.3px] text-[rgba(156,163,175,1)] uppercase'>{expertise} — {location}</p>
                </div>
                <p className='font-light text-[8px] leading-[12.3px] text-[rgba(156,163,175,1)] uppercase'>{position}</p>
            </div>
        </div>
    )
}

export default TeamMember