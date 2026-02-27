import Loader from '@/components/atoms/Loader/Loader'
import ProjectMeta from '@/components/organisms/ProjectMeta/ProjectMeta'
import React, { Suspense } from 'react'

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  return (
    <Suspense fallback={<Loader />}>
      <ProjectMeta slug={slug} />
    </Suspense>
  )
}

export default Page