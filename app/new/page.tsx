import CompanionForm from '@/components/companionform'
import React from 'react'

const newCompanion = () => {
  return (
    <main className="companion-form-container min-lg:w-1/3 min-md:w-2/4\3 items-center justify-center">
    <article className="w-full gap-4 flex flex-col">
        <h1>Build a New Companion</h1>
        <p>Pick a name, subject, voice, & personality and start learning through voice conversations that feel natural and fun.</p>
        
        <CompanionForm />
    </article>
    </main>
  )
}
export default newCompanion