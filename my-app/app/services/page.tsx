import Footer from '@/components/atoms/Footer/Footer'
import Header from '@/components/atoms/Header/Header'
import Services from '@/components/organisms/Services/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
        <Services />
      <Footer />
    </div>
  )
}

export default page