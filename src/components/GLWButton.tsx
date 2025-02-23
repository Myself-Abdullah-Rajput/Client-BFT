import React, { ButtonHTMLAttributes } from 'react'

interface GLWButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const GLWButton = ({
    children,
}: GLWButtonProps) => {
  return (
        <button
            className='relative px-3 py-2 font-medium text-sm rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_8px_#8c45ff]'
        >
            <div className="absolute inset-0">
                <div className="border border-white/15 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="absolute inset-0 border border-white/30 rounded-lg [mask-image:linear-gradient(top_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_6px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
            </div>
            <span>
                {children}
            </span>
        </button>
  )
}

export default GLWButton