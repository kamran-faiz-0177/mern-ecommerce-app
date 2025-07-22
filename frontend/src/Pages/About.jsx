import React from 'react'
import Navbar from '../Components/Navbar'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <div className='w-[80%] mx-auto h-auto mt-40 text-center'>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">About Us ----</h1>
        <div className='my-10 flex flex-col lg:flex-row items-center justify-around gap-10'>
          <div>
            <img
              src="about_img.png"
              className='w-110 h-110'
              alt="About Trendify"
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              Welcome to Trendify, where style meets quality. Our mission is to bring you the latest fashion trends and must-have items, all curated with an eye for quality and design. We believe that everyone deserves to express themselves through fashion, and we're here to make that easier and more enjoyable. Our collections are carefully selected to offer you a range of options that cater to every taste and occasion.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              At Trendify, we prioritize your satisfaction. From the moment you browse our site to the day your order arrives, we are dedicated to providing a seamless shopping experience. Our team is always on the lookout for the latest trends, ensuring that you have access to the freshest styles as soon as they hit the runway. Thank you for choosing Trendify. We’re excited to be a part of your style journey.
            </p>
            <h2 className='text-4xl'>Our Mission</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              At Trendify, our mission is to empower you to express your unique style with high-quality, on-trend fashion. We strive to make fashion accessible to all, offering diverse products that inspire confidence.
            </p>
            <h2 className='text-4xl'>Our Vision</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500">
              At Trendify, our vision is to be a global fashion leader, known for cutting-edge style and quality. We aim to inspire confidence and creativity, making Trendify the go-to choice for individual expression.
            </p>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default About