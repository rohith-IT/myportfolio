import React from 'react'
import { useState } from 'react';
import Myimage from '../../Images/Myimage.png'
import Myimage2 from '../../Images/Myimage2.png'

export default function section1() {
  return (
    <section class="pt-10 overflow-hidden bg-gradient-to-tr from-gray-100 to-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
    <div id='about' class="px-4 mx-auto  sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" style={{fontFamily:'Poppins'}}>Hey 👋 I'm 
                    <br class="block sm:hidden" /> Rohith
                </h2>
                <p class="italic max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8" style={{fontFamily:'Poppins'}}>
                    A <span className=' text-[#b700ff]'>Front-End Web Developer</span> passionate about creating
                    interactive applications and experiences on the web.
                </p>

                <p class="mt-4 text-xl text-gray-600 md:mt-8">
                    <span class="relative inline-block">
                        <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                    <span class="relative"> Have a question? </span>
                    </span>
                    
                    <br class="block sm:hidden" /> Ask me on
                </p>
                <div>
              <a
                href="https://www.linkedin.com/in/rohith-y-s/"
                className="inline-flex mt-4 items-center justify-center h-12 px-6 font-semibold tracking-wide text-white  rounded shadow-md  bg-purple-600 hover:scale-105 hover:shadow-purple-400 shadow-xl focus:shadow-outline focus:outline-none"
              >
                LinkedIn
              </a>
            </div>
            </div>

            <div class="relative">
                <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-52" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 " src={Myimage2} alt="" />
            </div>

        </div>
    </div>
</section>
  );
};