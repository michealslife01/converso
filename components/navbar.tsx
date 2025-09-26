import Link from 'next/link';
import Image from 'next/image';
import NavItems from '@/components/NavItems';
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Button } from './ui/button';

const navbar = () => {
  return (
    <div className="navbar">
        <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer"> 
            <Image src="/images/logo.svg" alt="logo" width={44} height={44} />
        </div>
        </Link>
        <div className="flex items-center gap-8">
            <NavItems />
            <SignedOut>
                <SignInButton>
                    <button className="btn-signin ">
                        Sign In
                    </button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </div>
)
}

export default navbar