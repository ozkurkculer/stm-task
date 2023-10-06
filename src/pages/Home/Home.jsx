"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'
import productUIService from '@/services/productUI.service'

function Home() {
    return (
        <>
            <div className="w-full h-full flex flex-col">
                <div className="relative flex flex-col gap-7 py-[80px]">
                    <h1 className='text-center text-slate-800 text-8xl font-bold whitespace-nowrap leading-tight'>Amazing technologies <br />for you</h1>
                    <span className="text-center text-zinc-500 text-xl font-normal leading-loose block">We think &quot;lorem ipsum&quot; is the most important piece of technology in your desktop. Because if you love <br /> &quot;lorem ipsum&quot; you believe in chances are you will love the rest of the desktop.</span>
                    <Image src="/images/arrow.svg" alt="Arrow Icon" className="right-72 top-36 absolute" width={300} height={300} />
                </div>
                <div className="m-auto -mb-10 z-40 w-1/2">
                    <SearchBar />
                </div>
                <img src="/images/home.jpg" alt="Homepage Photo" className="w-full h-[700px] object-cover" />
            </div>
        </>
    )
}

export default Home