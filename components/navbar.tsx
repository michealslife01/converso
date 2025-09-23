import Link from 'next/link';
import Image from 'next/image';
import NavItems from '@/components/NavItems';

const navbar = () => {
  return (
    <div className="navbar">
        <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer"> 
            <Image src="/images/logo.svg" alt="logo" width={44} height={44} />
            <h1 className="text-2xl font-bold">Converso</h1>
        </div>
        </Link>
        <div className="flex items-center gap-8">
            <NavItems />
        </div>
    </div>
)
}

export default navbar