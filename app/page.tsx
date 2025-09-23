import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/companioncard'
import CompanionsList from '@/components/companionslist'
import CTA from '@/components/CTA'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular companions</h1>

      <section className=" home-section ">
        <CompanionCard
        id="456"
        name="Neura the brainy Explorer"
        topic="neural network of the brain"
        subject="science"
        duration="45 minutes"
        color="bg-blue-500"
         />
          <CompanionCard
        id="123"
        name="Countsy the number wizard"
        topic="Derivatives and integrals"
        subject="Derivatives"
        duration="30 minutes"
        color="bg-blue-500"
         />
          <CompanionCard
        id="789"
        name="Verba the vocabulary builde"
        topic="English literature"
        subject="english"
        duration="30 minutes"
        color="bg-blue-500"
         />
      </section>

      <section className='home-section'>
         <CompanionsList/>
         <CTA/>
        </section>
    </main>
  )
}

export default Page