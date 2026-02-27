'use client'
import React, { useEffect, useState } from 'react'
import TimelineItem from '../TimelineItem/TimelineItem'
import { motion } from 'motion/react'

const Timeline = () => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile === null) return null;

    return (
        <div className='relative flex flex-col sm:flex-row justify-between sm:border-t border-black/40 gap-6 sm:gap-0 lg:gap-8'>
            <div className='block sm:hidden absolute top-0 bottom-0 left-[11.5px] bg-black/40 w-px'></div>
            <motion.div initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 50 : 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} viewport={{ once: true }}><TimelineItem year='2004' title='Foundation' description='Established in the heart of Georgia, focusing on local vernacular.' /></motion.div>
            <motion.div initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 50 : 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut', delay: !isMobile ? 0.2 : 0 }} viewport={{ once: true }}><TimelineItem year='2010' title='Urban shift' description='Expansion into large-scale civic projects across Eastern Europe.' /></motion.div>
            <motion.div initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 50 : 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut', delay: !isMobile ? 0.4 : 0 }} viewport={{ once: true }}><TimelineItem year='2018' title='Design georgia' description='Co-founded collective for sustainable craft in modern architecture.' /></motion.div>
            <motion.div initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 50 : 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut', delay: !isMobile ? 0.6 : 0 }} viewport={{ once: true }}><TimelineItem year='...' title='the present' description='A global studio with a localized, thoughtful soul.' /></motion.div>
        </div>
    )
}

export default Timeline