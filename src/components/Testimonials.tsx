"use client";

import Image from "next/image";

import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "They have completely transformed how I travel across the world.",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: '/avatar-1.png',
  },
  {
    text: "Incredible service! Planning more international trips with Best Fly Today.",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: '/avatar-2.png',
  },
  {
    text: "Very Affordable, Got my ticket to Australia at 30% off from traditional market.",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: '/avatar-3.png',
  },
  {
    text: "I was planning a family trip to US and I found Best Fly Today and got my tickets in under a day.",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: '/avatar-4.png',
  },
];

const Testimonials = () => {
  return <section className="py-20" id="test">
    <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center">Beyond Expectations.</h2>
        <p className="text-white/70 text-center text-lg md:text-xl mt-5 tracking-tight max-w-sm mx-auto">Check out honset reviews of our existing customers before getting ahead.</p>
    
        <div 
          className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        >
            <motion.div
              className="flex gap-5 flex-none"
              initial={{
                translateX: '-50%',
              }}
              animate={{
                translateX: '0',
              }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <div 
                        key={index}
                        className="border border-white/15 p-6 md:p-8 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none"
                    >
                        <div className="tracking-tight text-lg md:text-2xl">{testimonial.text}</div>
                        <div className="flex items-center gap-3 mt-5">
                            <div className="relative after:rounded-lg after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,255)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                                <Image 
                                    src={testimonial.avatarImg}
                                    alt={`Avatar for ${testimonial.name}`}
                                    width={44}
                                    height={44}
                                    className="rounded-lg grayscale "
                                />
                            </div>
                            <div className="">
                                <div>{testimonial.name}</div>
                                <div className="text-white/50 text-sm">{testimonial.title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
  </section>;
};

export default Testimonials;