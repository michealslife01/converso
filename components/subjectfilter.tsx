"use client"

import React, { useEffect, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { subjects } from '@/constants';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [subject, setSubject] = useState(searchParams.get("subject") || "");

    useEffect(() => {
        let newUrl = "";
        if (subject === "all") {
         newUrl = removeKeysFromUrlQuery ({
            params:searchParams.toString(),
            keysToRemove:['subject'],   
        })
    }else {
        newUrl = formUrlQuery({
            params:searchParams.toString(),
            key:'subject',
            value:subject,
        })
    }
    router.push(newUrl, {scroll:false})
    }, [subject])

    return (
        <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Subject">
                    {subject || "All Subjects"}
                </SelectValue>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                {subjects.map((subject: string) => (
                    <SelectItem key={subject} value={subject} className="capitalize">
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SubjectFilter;