import Head from 'next/head'

const { loadIntercom } = require('next-intercom')

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  loadIntercom({
    appId: 'rjg6lgu1',
  })

  return (
    <>
      <Head>
        <title>Aware: LinkedIn superpowers for creators and social sellers.</title>
        <meta name="description" content="Aware: LinkedIn superpowers for creators and social sellers." />
      </Head>
      <Header />
      <main>
        <Hero />
        {/*         <PrimaryFeatures /> */}
        {/*         <SecondaryFeatures /> */}
        {/*         <CallToAction /> */}
        {/*         <Testimonials /> */}
        {/*         <Pricing /> */}
        {/*         <Faqs /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
