/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useRef, useState } from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import { useEffect } from "react"
const HeroSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElementRef = useRef(new Audio('/images/song1.mp3'));
    const handleImageClick = () => {
        const audioElement = audioElementRef.current;
        if (isPlaying) {
          audioElement.pause();
        } else {
          audioElement.play();
        }
    
        setIsPlaying(!isPlaying);
      };
      useEffect(() => {
        const audioElement = audioElementRef.current;
        return () => {
          audioElement.pause();
          audioElement.currentTime = 0;
        };
      }, []);
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
                            Hello, I'm {" "}
                        </span>
                        <br></br>
            <TypeAnimation
              sequence={[
                "Amay Nayak",
                1000,
                "Web Developer",
                1000,
                "PHP Artisan Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Step into my digital world! I'm a creator, crafting immersive experiences where pixels and code converge to tell enchanting stories.
                    </p>
                    <div>
                        <Link
                        href="/#contact"                
                            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-400 via-blue-400 to-blue-600 hover:bg-slate-200 text-white"
                        >
                            Hire Me
                           
                           
                        </Link>
                        <Link
              href="/images/amay.pdf"
              download="amaynayak.pdf"
        
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-purple-400 via-blue-400 to-blue-600 hover:bg-slate-800 text-white mt-3" >
                             <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                
                Download CV
              </span>
            </Link>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">                    
                    <Image
                        src="/images/photo3.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                        onClick={handleImageClick}
                        style={{ cursor: 'pointer' }}
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection