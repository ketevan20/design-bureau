import React from 'react'

const Subtitle = ({subtitle}: {subtitle: string}) => {
  return (
    <p className='font-normal text-[clamp(0.75rem,1.2vw,14px)] tracking-[30%] uppercase'>
        {subtitle}
    </p>
  )
}

export default Subtitle