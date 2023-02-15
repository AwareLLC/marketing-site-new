import Head from 'next/head'

import Image from 'next/image'
const { loadIntercom } = require('next-intercom')

import { Container } from '@/components/Container'
import { CallToAction } from '@/components/CallToAction'
import { CallToAction2 } from '@/components/CallToAction2'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

import featureImage1 from '@/images/screenshots/feed-quick-reply.png'
import featureImage2 from '@/images/screenshots/users.png'

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
        <PrimaryFeatures />

				<section
					id="secondary-features"
					aria-label="Features for simplifying everyday business tasks"
					className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
				>
					<Container>
						<div className="mx-auto max-w-4xl md:text-center">
							<h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
								Keep the conversation going in the quick-reply feed
							</h2>
							<p className="mt-4 mb-8 text-lg tracking-tight text-slate-700">
								Quickly reply to everyone that's engaged with your content.
							</p>
              <Image
                className="w-full"
                src={featureImage1}
                alt=""
                sizes="52.75rem"
              />
						</div>
					</Container>
				</section>

        <SecondaryFeatures />

				<section
					id="secondary-features"
					aria-label="Features for simplifying everyday business tasks"
					className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
				>
					<Container>
						<div className="mx-auto max-w-4xl md:text-center">
							<h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
								And don't forget to bring your team along for the ride.
							</h2>
							<p className="mt-4 mb-8 text-lg tracking-tight text-slate-700">
								Include your team for exponential growth.
							</p>
              <Image
                className="w-full"
                src={featureImage2}
                alt=""
                sizes="52.75rem"
              />
						</div>
					</Container>
				</section>

        <CallToAction />

        <Testimonials />
        <Pricing />
        <CallToAction2 />
        <faqs />
      </main>
      <Footer />
			<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </>
  )
}
