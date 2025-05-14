"use client";

import React, { useRef } from 'react'
import GLWButton from './GLWButton'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog';
import { ContactForm } from './ContactForm';

export const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section className='h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]' style={{
          backgroundImage: `url("/Stars.png")`,
          backgroundPositionY,
        }}
        animate={{
          backgroundPositionX: ["0%", "100%"],
        }}
        transition={{
          ease: "linear",
          duration: 100,
          repeat: Infinity,
        }}
        ref={sectionRef}
    >

      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className="absolute w-64 h-64 md:h-96 md:w-96 border border-white/20 bg-purple-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.45),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

      <motion.div className="absolute border rounded-full w-[344px] h-[344px] md:h-[580px] md:w-[580px] border-white top-1/2 left-1/2 opacity-20" style={{
          translateY: '-50%',
          translateX: '-50%',
        }}
        animate={{
          rotate: '1turn',
        }}
        transition={{
          ease: "linear",
          duration: 60,
          repeat: Infinity,
        }}
      >
        <div className="absolute top-1/2 h-2 w-2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <Plane className="absolute top-0 h-8 w-8 rotate-45 left-1/2 text-white -translate-x-1/2 fill-white -translate-y-1/2" />
        <div className="absolute top-1/2 h-5 w-5 border border-white left-full rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
            <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute border border-dashed rounded-full w-[444px] h-[444px] md:h-[780px] md:w-[780px] border-white top-1/2 left-1/2 opacity-20"
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          rotate: '-1turn',
        }}
        transition={{
          ease: "linear",
          duration: 60,
          repeat: Infinity,
        }}
      ></motion.div>

      <motion.div 
        className="absolute border rounded-full w-[544px] h-[544px] md:h-[980px] md:w-[980px] border-white top-1/2 left-1/2 opacity-20"
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          rotate: '1turn',
        }}
        transition={{
          ease: "linear",
          duration: 90,
          repeat: Infinity,
        }}
      >
        <div className="absolute top-1/2 h-2 w-2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <Plane className="absolute top-0 h-8 w-8 rotate-45 left-1/2 text-white -translate-x-1/2 fill-white -translate-y-1/2" />
      </motion.div>
      <div className="container relative mt-16">
        <h1 className='tracking-tighter text-8xl md:text-[168px] md:leading-none font-semibold bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.6))] text-center text-transparent bg-clip-text'>FLIGHTS</h1>
        <p className='text-center mt-4 text-lg md:text-xl max-w-xl mx-auto text-white/70'>Get most offorable & cheap flight tickets compared to the market just by giving a phone call.</p>
        <div className="flex justify-center mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <GLWButton>
                Get a quote
              </GLWButton>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>
                Get an estimate for your destination
              </DialogTitle>
              <DialogDescription>
                We will send you the best possible flight options for your destination and full refund on cancellation.
              </DialogDescription>

              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.section>
  )
}