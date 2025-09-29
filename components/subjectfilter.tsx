"use client"

import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { subjects } from '@/constants'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [subject, setSubject] = useState(searchParams.get("subject") || "");

    const handleFilter = (newSubject: string) => {
        const params = new URLSearchParams(searchParams);
        if (newSubject) {
            params.set("subject", newSubject);
        } else {
            params.delete("subject");
        }
        router.push(`?${params.toString()}`);
    };

  return (
    <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">Subject</p>
            <Select onValueChange={(value) => setSubject(value)} value={subject || ""} onOpenChange={() => handleFilter(subject)}>
  <SelectTrigger className="input capitalize">
      <SelectValue placeholder="Select a subject" />
  </SelectTrigger>
  <SelectContent>
      {subjects.map((subject: string) => (
          <SelectItem value={subject} key={subject} 
          className="capitalize">
              {subject}
          </SelectItem>
      ))}
  </SelectContent>
</Select>
        </div>
    </div>
  )
}

export default SubjectFilter