import Footer from '@/components/atoms/Footer/Footer'
import Header from '@/components/atoms/Header/Header'
import Loader from '@/components/atoms/Loader/Loader'
import Studio from '@/components/organisms/Studio/Studio'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Studio />
      <Footer />
    </Suspense>
  )
}

export default page