import Footer from '@/components/atoms/Footer/Footer'
import Header from '@/components/atoms/Header/Header'
import Loader from '@/components/atoms/Loader/Loader'
import ProjectMeta from '@/components/organisms/ProjectMeta/ProjectMeta'
import React, { Suspense } from 'react'

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  return (
    <Suspense fallback={<Loader />}>
      <Header />
        <ProjectMeta slug={slug} />
      <Footer />
    </Suspense>
  )
}

export default Page