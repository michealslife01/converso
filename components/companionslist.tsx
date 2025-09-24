import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { icons } from 'lucide-react'
import Image from 'next/image'
import { getSubjectColor } from '@/lib/utils'

  interface CompanionListProps {
    title: string,
    companions?: Companion[],
    className?: string,
  }

const CompanionsList = ({title, companions, className}: CompanionListProps) => {
  return (
    <article className={cn('companion-list', className)}>
        <h2 className="text-2xl font-bold">{title}</h2>
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Lesson</TableHead>
      <TableHead>Subject</TableHead>
      <TableHead className="text-right text-lg">Duration</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {companions?.map(({id, subject, duration, name, topic}) => (
        <TableRow key={id}>
            <TableCell>
                <Link href={`/companions/${id}`}>
            <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-hd:hidden " style={{backgroundColor: getSubjectColor(subject)}}>
                    <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-xs text-muted-foreground">{topic}</p>
                </div>
            </div>
            </Link>
            </TableCell>
            <TableCell>
                <div className="subject-badge w-fit max-md:hidden">{subject}</div>
            <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" style={{backgroundColor: getSubjectColor(subject)}}> <Image src={`/icons/${subject}.svg`} alt={subject} width={15} height={15} /></div>
            </TableCell>
            <TableCell>
               <div className='flex items-center gap-2 w-full justify-end'> 
                <p className="text-2xl ">{duration} {''}<span className="max-md:hidden">mins</span></p>
                <Image src="/icons/clock.svg" alt="minutes" width={20} height={20} className='md:hidden' />
            </div>
             </TableCell>
        </TableRow>
    ))}
  </TableBody>
</Table>
</article>
  )
}

export default CompanionsList