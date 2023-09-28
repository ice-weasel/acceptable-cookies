"use client";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="bg-white h-screen">
      <div className="h-screen bg-white md:bg-white md:h-screen">
        <div>
          <nav className="bg-white fixed w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a className="flex items-center">
                <span className="self-center text-2xl font-semibold  text-black">
                  GS
                </span>
              </a>
              <div className="flex md:order-2">
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto "
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:bg-white">
                  <li>
                    <Link
                      href={{ pathname: "/" }}
                      className="block py-2 pl-3 pr-4 text-black text-l font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:text-black"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-black text-l font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:text-black"
                    >
                      Explore
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="mt-20 flex flex-col md:flex-row justify-around">
          <div className="bg-white text-orange-500 flex items-start flex-col mt-20 mx-0 md:mx-40">
            <div className="flex items-center mb-4 mt-20">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6 text-blue-600 bg-gray-100 0 rounded focus:ring-blue-500  "
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black "
              >
                Rajasthan
              </label>
            </div>
            <div className="flex items-center mt-20">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 "
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black "
              >
                Assam
              </label>
            </div>
            <div className="flex items-center mt-20">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6 text-black bg-gray-100  rounded focus:ring-black  "
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black "
              >
                Kerala
              </label>
            </div>
            <div className="flex items-center mt-20">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 "
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black "
              >
                Maharashtra
              </label>
            </div>
            <div className="flex items-center mt-20">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black "
              >
                Goa
              </label>
            </div>
          </div>
          <div className="mt-20 text-black">
            <div>
              <div className="flex max-w-sm w-full bg-white mt-20 overflow-hidden mx-auto">
                <div className="flex items-center flex-col px-2 py-3 ">
                  <form className="w-full max-w-sm">
                    <div className="flex items-center border-b border-black py-2">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Hotel Name"
                        aria-label="Full name"
                      />
                    </div>
                  </form>
                  <form className="w-full max-w-sm mt-10">
                    <div className="flex items-center border-b border-black py-2">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Address"
                        aria-label="Full name"
                      />
                    </div>
                  </form>
                  <form className="w-full max-w-sm mt-10">
                    <div className="flex items-center border-b border-black py-2">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Time for check in"
                        aria-label="Full name"
                      />
                    </div>
                  </form>
                  <div className="flex items-center mt-20 text-m">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 font-medium text-black"
                    >
                      Do you want to send emergency messages in case of late or
                      no check-in?
                    </label>
                  </div>
                  <form className="w-full max-w-sm mt-10 text-m">
                    Enter phone number of someone you trust :
                    <div className="flex items-center border-b border-black py-2 mt-2">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Phone No"
                        aria-label="Full name"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
