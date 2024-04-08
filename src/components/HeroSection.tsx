import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'

const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 border-blue-500 '>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className='p-4 relative z-10 w-full text-center  '>
                <h1 className='mt-10 md:mt-0 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-50 font-bold '>Master the art of Tabla</h1>
                <p
                    className='mt-4 font-normal text-base md:text-lg text-neutral-300 mx-auto max-w-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ipsum voluptatibus, alias dolorum recusandae laudantium. Quo tenetur possimus molestias nostrum.
                </p>
                <div className='mt-4'>
                    <Link href={"/courses"}>
                        Explore Music
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default HeroSection