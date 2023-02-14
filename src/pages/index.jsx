import Head from 'next/head'

import Image from 'next/image'
const { loadIntercom } = require('next-intercom')

import { Container } from '@/components/Container'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

import featureImage1 from '@/images/screenshots/contacts.png'

export default function Home() {
  loadIntercom({
    appId: 'rjg6lgu1',
  })

  return (
    <>
      <Head>
        <title>Aware: LinkedIn superpowers for creators and social sellers.</title>
        <meta name="description" content="Aware: LinkedIn superpowers for creators and social sellers." />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header />
      <main>
        <Hero />
      </main>

			<!-- Netlify Identity Widget -->
<!-- Needed only if you are using Netlify Identity feature -->
<script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </>
  )
}
