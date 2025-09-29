import { getAllCompanions } from '@/lib/actions/companion.action';
import CompanionCard from '@/components/companioncard';
import React from 'react'
import { getSubjectColor } from '@/lib/utils';
import SearchInput from '@/components/searchinput';
import SubjectFilter from '@/components/subjectfilter';

const companions = async ({searchParams}: SearchParams) => {
  const filters = await searchParams;

  const subject = typeof filters?.subject === 'string' ? filters.subject : '';
  const topic = typeof filters?.topic === 'string' ? filters.topic : '';

  const companions = await getAllCompanions({subject, topic});

  console.log(companions);

  return (
    <main>
     <section className=" flex justify-between gap-4 max-sm:flex-col">
        <h1>Companions</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
     </section>
     <section className="companions-grid">
      {companions.map((companion) => (
        <CompanionCard key={companion.id} {...companion} color = {getSubjectColor(companion.subject)} />
      ))}
      </section>
     
    </main>
  )
}

export default companions 