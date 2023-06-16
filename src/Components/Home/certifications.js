import React from "react";
import Image1 from "../../Images/cisco.png";
import Image2 from "../../Images/azure.png";
import Image3 from "../../Images/aws.png";
import Image4 from "../../Images/python.png";

export default function certifications() {
  return (
    <div className=' pt-10 ' >
      <div className="px-4 py-16 bg-gray-100 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" >
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
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">My Certifications</span>
            </span>{" "}
          </h2>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full hover:scale-125 bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <img className=" w-16" src={Image1}></img>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Cisco Cyber Security Essentials
            </h6>
            <p className="mb-3 text-lg text-gray-900" style={{fontFamily:'Montserrat'}}>
              Foundational knowledge of cybersecurity, including the basics of
              network security, encryption and cybersecurity laws.
            </p>
            <a
              href="https://shorturl.at/knqvG"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-700"
            >
              Learn more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full hover:scale-125 bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <img className=" w-14" src={Image2}></img>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Microsoft Azure Cloud Fundamentals
            </h6>
            <p className="mb-3 text-lg text-gray-900" style={{fontFamily:'Montserrat'}}>
              Fundamental knowledge of cloud concepts, along with Azure
              services, workloads, security, privacy, pricing, and support.
            </p>
            <a
              href="https://shorturl.at/qTVX9"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-700"
            >
              Learn more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full hover:scale-125 bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <img className=" w-16" src={Image3}></img>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              AWS Cloud Fundamentals
            </h6>
            <p className="mb-3 text-lg text-gray-900" style={{fontFamily:'Montserrat'}}>
              Understanding of cloud computing concepts, independent of specific
              technical roles, cloud concepts, AWS core services, security,
              architecture.
            </p>
            <a
              href="https://shorturl.at/dpzA8"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-700"
            >
              Learn more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full hover:scale-125 bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <img className=" w-16" src={Image4}></img>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Python & django
            </h6>
            <p className="mb-3 text-lg text-black" style={{fontFamily:'Montserrat'}}>
              Programming concepts including data structures,
              networked application program interfaces, and databases, using the
              Python programming language.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    
    </div>
   
  );
}
