import React from 'react'
import Navbar from '../Components/Navbar'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='w-[80%] mx-auto h-auto mt-40'>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Contact Us ----</h1>
        <div className='my-10 flex flex-col lg:flex-row items-center justify-around gap-10'>
          <div>
            <img
              src="about_img.png"
              className='w-110 h-110'
              alt="About Trendify"
            />
          </div>
          <div className='w-full lg:w-1/2 space-y-4'>
            <h2 className='text-4xl'>Our Store</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              Trendify 354 Fashion Lane
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              Los Angeles, SC 45678, USA
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              Tel: (+11)-558-669-447
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              Email: contact.trendify@info.com
            </p>

            <h2 className='text-4xl'>Careers at Forever</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              Join us at Trendify! Explore job openings and help shape the future of fashion.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              Explore our current job openings and discover how you can contribute to our mission of setting trends and creating style.
            </p>
            <button className='border border-black py-3 px-6 text-lg my-3 hover:bg-black hover:text-white'>
              EXPLORE JOBS
            </button>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </>
  )
}

export default Contact