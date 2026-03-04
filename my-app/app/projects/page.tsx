import Loader from '@/components/atoms/Loader/Loader';
import Projects from '@/components/organisms/Projects/Projects'
import React, { Suspense } from 'react'

const page = async () => {
  return (
    <Suspense fallback={<Loader />}>
      <Projects />
    </Suspense>
  )
}

export default page