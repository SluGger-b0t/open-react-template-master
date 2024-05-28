export const metadata = {
  title: 'GrowthHub',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Zigzag /> */}
      {/* <Logoslider/> */}
      <Testimonials />
      <Newsletter />
    </>
  )
}
