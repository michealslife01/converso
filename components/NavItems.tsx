'use client'


import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
    {label:"home", href:"/"},
    {label:"companions", href:"/companions"},
    {label:"my Journey", href:"/my-journey"},
    {label:"profile", href:"/profile"},
    {label:"subscription", href:"/subscription"},
]
const NavItems = () => {
    const pathname = usePathname();

  return (
    <nav className='flex items-center gap-8'>
        {navItems.map(({label, href}) => (
            <Link href={href} key={label} className={cn(pathname === href && 'text-primary font-semibold')}>
                {label}
            </Link>
        ))}
    </nav>
  )
}

export default NavItems