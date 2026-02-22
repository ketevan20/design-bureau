import Collaboration from '@/components/molecules/Collaboration/Collaboration'
import Contexts from '@/components/molecules/Contexts/Contexts'
import HeroSection from '@/components/molecules/HeroSection/HeroSection'
import Philosophy from '@/components/molecules/Philosophy/Philosophy'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col gap-20 mb-20 font-inter'>
      <HeroSection />
      <Contexts />
      <Philosophy />
      <Collaboration />
    </div>
  )
}

export default Home