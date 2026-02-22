import Clients from '@/components/molecules/Clients/Clients'
import Collective from '@/components/molecules/Collective/Collective'
import Expertice from '@/components/molecules/Expertice/Expertice'
import Mission from '@/components/molecules/Mission/Mission'
import StudioHero from '@/components/molecules/StudioHero/StudioHero'
import React from 'react'

const Studio = () => {
  return (
    <div className='relative flex flex-col items-center gap-20 mb-20 px-3 sm:px-6 lg:px-16 font-inter'>
        <StudioHero />
        <Mission />
        <Expertice />
        <Collective />
        <Clients />
    </div>
  )
}

export default Studio