import ServiceItem from '@/components/atoms/ServiceItem/ServiceItem'
import Title from '@/components/atoms/Title/Title'
import React from 'react'

const ServicesHero = () => {
    return (
        <div className='w-full max-w-480 pt-[clamp(60px,12vh,155px)] flex flex-col gap-6 lg:gap-12'>
            <Title subtitle='expertise' title='From concept to creation, across all scales.' />
            <div className='w-full h-px bg-[#0000005f]'></div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-[80px_1fr_220px] items-center gap-x-4 gap-y-4 sm:gap-10 md:gap-16'>
                <ServiceItem
                    number='01'
                    text='We conceive building as enduring contributions to the landscape, balancing conceptual rigor with technical excelence '
                    categories={['Residential', 'Commercial', 'Public', 'Public spaces']}
                />
                <ServiceItem
                    number='02'
                    text='Creating immersive environments that tell a story, prioritizing human experience through light, material, and scale. '
                    categories={['Hospitality', 'Retail', 'Public', 'Residential']}
                />
                <ServiceItem
                    number='03'
                    text='Functional objects that double as sculptural elements, exploring the boundaries of material and craft.'
                    categories={['Furniture', 'Lighting', 'Home objects', 'Limited editions']}
                />
            </div>
        </div>
    )
}

export default ServicesHero