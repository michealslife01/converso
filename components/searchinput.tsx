'use client'

import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';


const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const query = searchParams.get('topic') || '';
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() =>{
            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'topic',
                    value: searchQuery,
                })
    
                router.push(newUrl, {scroll: false});
    
            } else {
                if (pathname === '/companions') {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ['topic'],
                    })
    
                    router.push(newUrl, {scroll: false});
                }
            }

            return () => clearTimeout(delayDebounceFn);
        }, 300);
        

    }, [searchQuery, router, searchParams, pathname]);

  return (
    <div className=" flex items-center gap-2 relative border border-black rounded-lg px-2 py-1 w-full ">
        <Image src="/icons/search.svg" alt="search" width={20} height={20} />
        <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full outline-none" />
    </div>
  )
}

export default SearchInput