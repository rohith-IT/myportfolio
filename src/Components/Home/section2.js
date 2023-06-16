import React from 'react'
import Arrowup from '../../Images/icons8-arrow-up.gif'

export default function section2() {
  return (
    <div className=' pt-10'>
        <div className="px-4 py-16 mx-auto bg-[#bd00ff] sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
           <div className="flex  justify-center flex-col mb-6 lg:flex-row md:mb-10">
          <h2 className="max-w-md  mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none xl:max-w-lg">
          Education
            
          </h2>
        </div>
          <div className="grid px-2 ml-5 gap-6 row-gap-10 lg:grid-cols-2">
            <div className="lg:py-6 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border-2 border-white  rounded-full">
                    <svg
                    className="w-4 text-white rotate-180"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24" 
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22" className=' animate-bounce' 
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15" className=' animate-bounce' 
                    />
                  </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-white text-lg font-bold">Master Of Computer Applications</p>
                  <p className="text-white">
                    Surana College - 2023
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white  rounded-full">
                  <svg
                    className="w-4 text-white rotate-180"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24" 
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22" className=' animate-bounce' 
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15" className=' animate-bounce' 
                    />
                  </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-white text-lg font-bold">Bachelor Of Computer Applications</p>
                  <p className="text-white">
                    Dayananda Sagar College - 2021
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-white  rounded-full">
                  <svg
                    className="w-4 text-white rotate-180"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24" 
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22" className=' animate-bounce' 
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15" className=' animate-bounce' 
                    />
                  </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-white text-lg font-bold">Pre University Education</p>
                  <p className="text-white">
                    Dayananda Sagar College - 2018
                  </p>
                </div>
              </div>
              </div>
            <div className="relative">
              <img
                className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-full lg:absolute lg:h-full"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
        </div>
      );
    };