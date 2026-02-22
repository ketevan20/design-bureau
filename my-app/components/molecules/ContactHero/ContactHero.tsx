import ContactForm from '@/components/atoms/ContactForm/ContactForm'
import Title from '@/components/atoms/Title/Title'
import React from 'react'

const ContactHero = () => {
  return (
    <div className='w-full max-w-360 pt-[clamp(60px,12vh,155px)] flex flex-col gap-6 lg:gap-12'>
        <Title title='Contact' subtitle='get in touch'/>
        <div className='w-full h-px bg-[#0000005f]'></div>
        <div className='flex justify-between'>
            <div className='font-normal text-[14px] tracking-[20%] leading-4.25'>
                <p>12 D.Chonqadze st.<br/>Tbilisi, Georgia, 0105 <br/ >contacts:<br/> +995 577 417 741<br/>+995 577 406 099<br/><span className='underline'>info@designbureau.ge</span></p>
            </div>
            <ContactForm />
        </div>
    </div>
  )
}

export default ContactHero