"use client"

import Image from 'next/image';
// components/ScrollDisplay.tsx
import React from 'react';






export default function Home() {

  return (
    <main className='  bg-white  '>
      <div className='h-screen bg-image'>
        {/* Background image */}
        <Image
          src="https://ichef.bbci.co.uk/images/ic/1008xn/p07w00j2.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        {/* Content */}

        <div>

          <nav className="bg-transparent  fixed w-full z-20 top-0 left-0  ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a className="flex items-center">

                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">logo </span>
              </a>
              <div className="flex md:order-2">

                <a href="#_" type="button" className="text-white bg-black  focus:ring-4 focus:outline-none focus:ring-black  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0   
                relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium  transition duration-300 ease-out  rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white font-bold uppercase transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                  <span className="relative invisible">Login</span>
                </a>
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
              </div>
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-transparent rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent ">
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black text-l font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:text-black ">Home</a>
                  </li>
                  <li>
                    <a href="#explore" className="block py-2 pl-3 pr-4 text-black text-l font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:text-black ">Explore</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black text-l font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:text-black ">Check-In</a>
                  </li>

                </ul>
              </div>
            </div>
          </nav>

        </div>
        <div className='absolute inset-0 flex items-center justify-around text-white'>
          <div>
            <p className='uppercase font-bold text-white mb-3'>
              Chase Horizons
            </p>
            <h1 className=' text-4xl md:text-6xl font-bold'>
              <p className="mb-3">The leader in</p>
              <p> travel and safety</p>
            </h1>
            <div className='mt-5 font-bold text-l'>
              <p>kdwidiwnfiwfiwjfiwjfiwkdwufiwjfivjiwjvwiviif</p>
              <p>dwjdijwfjwifjifwifjwiffivjijwi</p>
              <p>kdwidiwnfiwfiwjfiwjfiwkif</p>

            </div>
            <div className="mt-5 ">
              <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-black  group hover:bg-transparent">
                <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative">Get Started</span>
              </a>
            </div>
          </div>
          <div className='p-6 flex items-center border border-white border-4 hidden md:flex'>
            <div>
              <img
                src="https://imgmedia.lbb.in/media/2023/05/646e0964339307692de646b6_1684932964286.jpg"
                alt="Indian Aesthetic Dance"
                width={500}
                height={500}

              />
            </div>
          </div>
        </div>


      </div>
      <div id="explore" className='flex justify-center text-center items-center text-black text-xl font-bold '>
        <div
          className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-col items-center justify-center mt-6 md:mt-20">

          <div className="font-semibold text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10 md:mt-20">
            Places to explore !
          </div>

          <div className="mt-10 flex items-center justify-center ">
            <div className="flex flex-row sm:flex-row justify-center ">
              <div className="max-w-5xl mb-6 sm:mb-0 border rounded-lg shadow bg-black sm:mr-4">
                <a>
                  <img className="rounded-t-lg"
                    src="https://wallpapers.com/images/featured/rajasthan-background-szqcyb11dicz68ae.jpg" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-lg font-bold text-gray-900 dark:text-white uppercase">Rajasthan</h5>
                  </a>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                    Freshers' Day events are known for their diverse dance performances. Seniors showcase their experience with traditional,
                    contemporary, or fusion styles, while freshers bring youthful energy and creativity. External dance groups may join,
                    adding variety. These performances foster inclusivity, bringing students of all
                    backgrounds together to celebrate the universal language of dance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center ">
            <div className="flex flex-row sm:flex-row justify-center ">

              <div className="max-w-5xl  mb-6 sm:mb-0 border rounded-lg shadow bg-black sm:mr-4">
                <a>
                  <img className="rounded-t-lg"
                    src="https://wallpapercave.com/wp/wp9822330.jpg" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Assam</h5>
                  </a>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">Assam, located in northeastern India,
                    is a state known for its natural beauty, rich cultural heritage, and diverse wildlife.
                    It offers a unique blend of history, tradition, and stunning landscapes.
                    Assam's diverse landscapes, wildlife, and cultural richness make it a captivating destination
                    for travelers seeking an authentic and offbeat experience in India.
                    It provides a gateway to exploring the lesser-known northeastern states and their unique charm.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <div className="flex flex-row sm:flex-row justify-center ">

              <div className="max-w-5xl  border rounded-lg shadow bg-black">
                <a>
                  <img className="rounded-t-lg"
                    src="https://images.pexels.com/photos/6544756/pexels-photo-6544756.jpeg?cs=srgb&dl=pexels-jaiju-jacob-6544756.jpg&fm=jpg" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Kerala</h5>
                  </a>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                    Kerala, often referred to as "God's Own Country," is a picturesque state in the southwestern part of India
                    known for its lush green landscapes, backwaters, beautiful beaches, rich culture, and vibrant traditions.
                    Kerala's natural beauty, cultural richness, and wellness offerings make it a popular destination
                    for both domestic and international tourists.
                    Whether you seek relaxation, adventure, or cultural experiences, Kerala has something to offer for everyone.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <div className="flex flex-row sm:flex-row justify-center ">

              <div className="max-w-5xl  mb-6 sm:mb-0 border rounded-lg shadow bg-black sm:mr-4">
                <a>
                  <img className="rounded-t-lg"
                    src="https://images.pexels.com/photos/4481330/pexels-photo-4481330.jpeg?cs=srgb&dl=pexels-shivam-tak-4481330.jpg&fm=jpg" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Maharashtra</h5>
                  </a>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">Maharashtra is a diverse and culturally
                    rich state in western India that offers a wide range of attractions and experiences for tourists.
                    It is known for its bustling cities, historic sites, beautiful natural landscapes, and vibrant culture.
                    Maharashtra's rich history, natural beauty, and diverse culture make it a captivating
                    destination for travelers looking to explore India's multifaceted heritage and landscapes. Whether you're interested in history,
                    nature, or vibrant city life, Maharashtra has something to offer for every traveler.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <div className="flex flex-row sm:flex-row justify-center ">

              <div className="max-w-5xl  mb-6 sm:mb-0 border rounded-lg shadow bg-black sm:mr-4">
                <a>
                  <img className="rounded-t-lg"
                    src="https://cdn.wallpapersafari.com/25/43/shVYSl.jpg" />
                </a>
                <div className="p-4">
                  <a>
                    <h5 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Goa</h5>
                  </a>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">Goa, located on the western coast of India,
                    is one of the country's most popular tourist destinations. Known for its beautiful beaches, vibrant nightlife,
                    and rich cultural heritage, Goa attracts travelers from all over the world.
                    Goa is a destination that caters to a wide range of interests, from relaxation on the beach
                    to partying the night away and exploring the state's rich cultural heritage.
                    It offers a unique blend of Indian and Portuguese influences that make
                    it a must-visit destination for tourists in India.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      
      <footer className="bg-black  shadow m-4 ">
        <div className="max-width-full  flex items-center justify-center text-center  p-4  ">
          <span className="text-sm text-gray-500 sm:text-center text-right">@ All Rights Reserved.
          </span>

        </div>
      </footer>

    </main>
  );
}

