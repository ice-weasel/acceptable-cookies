import Image from 'next/image'


export default function Home() {
  return (
    <div className="h-screen bg-white md:h-screen md:bg-white">
     
     <nav className="bg-white  fixed w-full z-20 top-0 left-0  ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
<a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-black bg-white rounded-md hover:bg-white sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
BACK

</a>
              <div className="flex md:order-2">

               
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
              </div>
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-transparent rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black text-l font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:text-black ">Home</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black text-l font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:text-black ">Explore</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black text-l font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:text-black ">Check-In</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>


      <div className="flex  mb-5 px-6  mt-10 ">
        <div className="flex flex-col  justify-center px-6 py-5 mx-auto mt-20">
          <a href="#" className="flex items-center mb-6 text-2xl text-center justify-center font-semibold text-gray-900 dark:text-black">
            Log in
          </a>


          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex justify-center align-middle flex-col">
            <div className="relative h-11 w-full min-w-[200px] text-slate-500">
              <input

                placeholder="name@gmail.com"
                className="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-grey outline outline-0 transition-all  focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 text-sx font-bold  flex h-full w-full select-none text-sm font-normal leading-tight  transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-xs peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 black-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-slate-500">
                Email
              </label>
            </div>


            <div className="relative h-11 w-full min-w-[200px] text-slate-500">
              <input
                type="password"
                placeholder="password"
                className=" h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-grey outline outline-0 transition-all  focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 text-sx font-bold flex h-full w-full select-none text-sm font-normal leading-tight  transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-xs peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 black-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-slate-500">
                Password
              </label>
            </div>


            <button type="submit" className="flex w-full justify-center  bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Log in</button>
            <p className="text-sm font-light text-black dark:text-black">
              Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
            </p>
            <a href="#" className="font-medium text-primary-600 mx-auto text-black hover:underline dark:text-primary-500">Forgot password?</a>

          </div>
        </div>
      </div>
    </div>
  )
}


