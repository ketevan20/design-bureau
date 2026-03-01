import Footer from '@/components/atoms/Footer/Footer';
import Header from '@/components/atoms/Header/Header';
import Loader from '@/components/atoms/Loader/Loader';
import Projects from '@/components/organisms/Projects/Projects'
import React, { Suspense } from 'react'

const page = async () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Projects />
      <Footer />
    </Suspense>
  )
}

export default page