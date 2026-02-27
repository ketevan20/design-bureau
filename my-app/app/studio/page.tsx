import Loader from '@/components/atoms/Loader/Loader'
import Studio from '@/components/organisms/Studio/Studio'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Studio />
    </Suspense>
  )
}

export default page