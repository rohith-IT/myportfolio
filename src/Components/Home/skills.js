import React from 'react'
import Image1 from '../../Images/reactjs.gif'
import Image3 from '../../Images/icons8-java.gif'
import Image2 from '../../Images/icons8-html.gif'
import Image4 from '../../Images/icons8-javascript.gif'
import Image5 from '../../Images/icons8-css-48.png'
import Image6 from '../../Images/icons8-django-48.png'

export default function skills() {
  return (
    <div className=' pt-10'>
            <div className="px-4 py-16 bg-gray-100 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" style={{fontFamily:'Poppins'}}>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">My Skills</span>
          </span>{' '}
          
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Learning Never Stops For Me 
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            < img src={Image1}></img>
            
          </div>
          <h6 className="mb-2 text-lg font-semibold leading-5">React</h6>
        </div>
    
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            < img src={Image2}></img>
            
          </div>  
          </div>
          <h6 className="mb-2 text-lg font-semibold leading-5">HTML</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            < img src={Image3}></img>
            
          </div>
          <h6 className="mb-2 text-lg font-semibold leading-5">Java</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            < img src={Image4}></img>
            
          </div>  
          </div>
          <h6 className="mb-2 text-lg font-semibold leading-5">JavaScript</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            < img src={Image5}></img>
            
          </div>  
          </div>
          <h6 className="mb-2 text-lg font-semibold leading-5">CSS</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            < img src={Image6}></img>
            
          </div>  
          </div>
          <h6 className="mb-2 text-lg font-semibold leading-5">Django</h6>
        </div>
      </div>
      
    </div>
    </div>
  )
}
