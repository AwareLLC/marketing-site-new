import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction2() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary py-32"
    >
      {/* <Image */}
      {/*   className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" */}
      {/*   src={backgroundImage} */}
      {/*   alt="" */}
      {/*   width={2347} */}
      {/*   height={1244} */}
      {/*   unoptimized */}
      {/* /> */}
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            You&apos;re still reading? What are you waiting for?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Start your 7-day free trial. You&apos;ve got nothing to lose, plus, you won&apos;t regret it.
          </p>
          <Button href="https://app.useaware.co" color="white" className="mt-10">
            Let&apos;s go!
          </Button>
        </div>
      </Container>
    </section>
  )
}
