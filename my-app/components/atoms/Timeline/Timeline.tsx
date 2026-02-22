import React from 'react'
import TimelineItem from '../TimelineItem/TimelineItem'

const Timeline = () => {
    return (
        <div className='flex justify-between border-t border-black/40 lg:gap-8'>
            <TimelineItem year='2004' title='Foundation' description='Established in the heart of Georgia, focusing on local vernacular.' />
            <TimelineItem year='2010' title='Urban shift' description='Expansion into large-scale civic projects across Eastern Europe.' />
            <TimelineItem year='2018' title='Design georgia' description='Co-founded collective for sustainable craft in modern architecture.' />
            <TimelineItem year='...' title='the present' description='A global studio with a localized, thoughtful soul.' />
        </div>
    )
}

export default Timeline