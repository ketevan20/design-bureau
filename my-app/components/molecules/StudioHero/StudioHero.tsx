import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import Timeline from '@/components/atoms/Timeline/Timeline'
import Titile from '@/components/atoms/Title/Title'
import React from 'react'

const StudioHero = () => {
  return (
    <div className='w-full max-w-360 pt-[clamp(60px,12vh,155px)] flex flex-col justify-between gap-6 lg:gap-12'>
        <Titile title='Design as a dialogue' subtitle='The studio'/>
        <div className='w-full h-px bg-[#0000005f]'></div>
        
        <div className='flex gap-5 items-stretch'>
            <div className='shrink-0 max-w-[30%]'>
                <img 
                  src="team.svg" 
                  alt="The team" 
                  className='h-full aspect-square object-cover'
                />
            </div>
            <div className='flex flex-col gap-4 justify-between'>
                <p className='font-cormorant font-normal text-[clamp(1.75rem,2.5vw,40px)] leading-[125%] tracking-normal'>
                  "Design is not an addition to space; it is the space itself, given form and meaning through light and material."
                </p>
                <p className='xl:max-w-[60%] font-normal text-[clamp(0.875rem,1.5vw,16px)] leading-[140%] tracking-normal'>
                  The team’s deep knowledge of the local market combined with international experiences are the key elements that make DesignBureau one of the most well recognized company in the region.
                </p>
            </div>
        </div>

        <div className='w-full h-px bg-[#0000005f]'></div>

        <div className='flex gap-8 mt-16'>
            <h1 className='flex-1 whitespace-nowrap'><Subtitle subtitle='Origins & Evolution'/></h1>
            <Timeline />
        </div>
    </div>
  )
}

export default StudioHero