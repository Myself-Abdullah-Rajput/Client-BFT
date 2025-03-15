"use client";

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from './utils/SendMail';
import { BadgeCheckIcon } from 'lucide-react';

export type FormData = {
    depDest: string;
    arrDest: string;
    email  : string;
    phone  : string;
    depDate: string;
    retDate: string;
}

export const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [ confirm, setConfirm ] = useState<boolean>(false);

    const OnSubmit = (Data: FormData) => {
        sendEmail(Data);
        setConfirm(true);
    }

    return (
    <form onSubmit={handleSubmit(OnSubmit)}>
        {confirm && (
            <div className="bg-green-300 flex items-center gap-x-1.5 rounded-md px-2 py-2 text-green-900 mb-3">
                <BadgeCheckIcon />
                Your request is recieved. We&apos;ll get back to you soon.
            </div>
        )}
        <input 
            type="text"
            placeholder="Enter your departure destination" 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black"
            {...register('depDest', { required: true })}
        />
        <input 
            type="text" 
            placeholder="Enter your arrival destination" 
            className="w-full border border-gray-300 rounded-lg px-3 mt-3 py-2 text-black" 
            {...register('arrDest', { required: true })}
        />
        <div className="flex items-center gap-x-2 mb-3">
        <input 
            required
            type="email" 
            placeholder="Email" 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-3 text-black"
            {...register('email', { required: true })}
        />
        <input 
            required
            type="tel"
            pattern="[0-9]*"
            minLength={8} 
            placeholder="Phone number" 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-3 text-black" 
            {...register('phone', { required: true })}
        />
        </div>
        <label htmlFor='depdate'>
            Departure Date
        </label>
        <input 
            required
            id='depdate' 
            type="date" 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 text-black"
            {...register('depDate', { required: true })}
        />
        <label htmlFor='retdate'>
            Return Date
        </label>
        <input 
            required
            id='retdate' 
            type="date" 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-black" 
            {...register('retDate', { required: true })}
        />
        <button type="submit" className="w-full bg-purple-500 text-white rounded-lg px-3 py-2 mt-3">Submit</button>
  </form>
  )
}
