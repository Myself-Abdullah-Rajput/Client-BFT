'use client';

import React from 'react'
import { Logo } from './Logo'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import GLWButton from './GLWButton'
import { useRouter } from 'next/navigation';

export const Header = () => {
    const router = useRouter();

  return (
    <header className='p-4 border-b border-white/15 md:border-none top-0 sticky z-10'>
        <div className='container'>
            <div className="flex justify-between items-center md:border md:border-white/15 md:p-2.5 md:rounded-xl max-w-[720px] mx-auto backdrop-blur">
                <div>
                    <div className="md:border-none border p-2 rounded-lg inline-flex justify-center items-center border-white/15">
                        <Logo size="LG" />
                    </div>
                </div>
                <div className='md:block hidden'>
                    <nav className='flex gap-8 text-sm'>
                        <Link href={"#test"} className='text-white/70 hover:text-white transition'>
                            Testimonials
                        </Link>
                        <Link href={"#cot"} className='text-white/70 hover:text-white transition'>
                            Pricing
                        </Link>
                        <Link href={"#"} className='text-white/70 hover:text-white transition'>
                            Changelog
                        </Link>
                    </nav>
                </div>
                <div className='flex gap-4 items-center' onClick={() => router.push(`/#cot`)}>
                    <GLWButton>
                        Get in touch
                    </GLWButton>
                    <Menu className='size-7 cursor-pointer md:hidden block' />
                </div>
            </div>
        </div>
    </header>
  )
}
