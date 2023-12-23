import React from 'react'

export function HeroSection() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col align-middle justify-center px-4 py-10 lg:px-6">
          
          <h1 className="mt-8 align-middle max-w-1xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
           Join us on a journey to solve all your business queries.
          </h1>
          <p className="mt-8 max-w-6xl text-lg text-gray-700">
            Unlock a team that truly cares about your business. Together, we'll conquer every challenge. <br />
            We're committed to your success. 
          </p>
          {/* <div className="mt-8">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div> */}
        </div>
        <div className="rounded-lg bg-gray-200 p-4">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc1fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
