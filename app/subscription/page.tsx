import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const subscription = () => {
  return (
    <div className='flex min-h-[70vh] items-center justify-center p-4'>
      <PricingTable />
    </div>
  )
}

export default subscription