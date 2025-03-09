import React from 'react'
import GLWButton from './GLWButton'
import Link from "next/link";

export const Cot = () => {
  return (
    <section className='py-20 px-3 md:px-5' id='cot'>
        <div className="container">
            <div className="border border-white/15 py-20 overflow-hidden rounded-xl relative" style={{
                backgroundImage: `url('/Stars.png')`,
            }}>
                <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{
                    backgroundImage: `url('/grid-lines.png')`,
                }}></div>

                <div className="relative">
                    <h2 className='text-5xl md:text-6xl tracking-tighter max-w-[480px] mx-auto text-center font-medium'>Affordable Flights For Everyone</h2>
                    <p className='text-center text-lg md:text-xl max-w-sm mx-auto text-white/70 px-4 mt-5 tracking-tight'>Achive clear, impactful, enjoyable trips without complexity.</p>
                    <div className="flex justify-center mt-7">
							<Link href={"mailto:gloria@bestflytoday.com"}>
								<GLWButton>
									gloria@bestflytoday.com
								</GLWButton>
							</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
