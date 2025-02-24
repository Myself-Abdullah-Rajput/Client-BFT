import React from 'react'
import { Logo } from './Logo'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='border-t py-4 px-3 md:px-5 border-white/15'>
        <div className="container">
            <div className="flex flex-col md:items-center gap-5 md:flex-row md:justify-between">
                <div className="flex gap-2 items-center">
                    <Logo size="LG" />
                    <div className="font-medium">Best Fly Today</div>
                </div>
                <div className="">
                    <nav>
                        <Link href={"mailto:gloria@bestflytoday.com"} className='underline cursor-pointer font-light'>
                            Gloria@bestflytoday.com
                        </Link>
                    </nav>
                </div>
                <div className="text-sm text-white/70">
                    <p>&copy; 2025 - All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
