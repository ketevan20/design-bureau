import React from 'react'
import TimelineItem from '../TimelineItem/TimelineItem'

const Timeline = () => {
    return (
        <div className='relative flex flex-col sm:flex-row justify-between sm:border-t border-black/40 gap-6 sm:gap-0 lg:gap-8'>
            <div className='block sm:hidden absolute top-0 bottom-0 left-[11.5px] bg-black/40 w-px'></div>
            <TimelineItem year='2004' title='Foundation' description='Established in the heart of Georgia, focusing on local vernacular.' />
            <TimelineItem year='2010' title='Urban shift' description='Expansion into large-scale civic projects across Eastern Europe.' />
            <TimelineItem year='2018' title='Design georgia' description='Co-founded collective for sustainable craft in modern architecture.' />
            <TimelineItem year='...' title='the present' description='A global studio with a localized, thoughtful soul.' />
        </div>
    )
}

export default Timeline