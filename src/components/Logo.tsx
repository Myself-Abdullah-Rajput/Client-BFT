import { Plane } from 'lucide-react';
import React from 'react'

interface LogoProps {
    size?: "SM" | "LG";
}

export const Logo = ({
    size = "SM",
}: LogoProps) => {
  return (
    <div>
        {size === "SM" ? (
            <Plane className='size-5' />
        ) : (
            <Plane className='size-7' />
        )}
    </div>
  )
}
