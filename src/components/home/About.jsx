"use client"
import Lottie from 'lottie-react';
import React from 'react'
import animationData from '../../animation/aboutAnim2.json'
const About = () => {
  return (
    <div className="text-white py-16 flex justify-center items-center px-4 w-full overflow-x-hidden">
      <div className="max-w-screen-xl">
        <div className="sm:grid grid-cols-12 gap-8">
          <div className="md:col-span-6 col-span-12" data-aos="fade-right">
            <div className="w-full">
              <Lottie
                loop={true}
                autoplay={true}
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice"
                }}
                animationData={animationData}
                className='max-w-full'
                height={1000}
              />
            </div>
          </div>
          <div className="md:col-span-6 col-span-10 flex flex-col justify-center items-start sm:gap-6" data-aos="fade-left">
            <div className="text-5xl font-semibold text-primary max-sm:mb-5">
              About Us
            </div>
            <p className="text-lg max-sm:mb-5">Welcome to GFX Hawks, your destination for visionary design.  At our core, we're not just a design company – we're your partners in visual storytelling. With a dedicated team of experts, we elevate your concepts to extraordinary visuals in both 2D and 3D dimensions. Our skilled team specializes in crafting intricate 2D and 3D designs that resonate and inspire. Whether it's crafting eye-catching banners, breathing life into logos, designing custom avatars, or embarking on the journey of 3D models, we ensure every detail is meticulously crafted to perfection. Our passion for innovation, attention to detail, and commitment to excellence define us. Join us on this exhilarating journey – where imagination knows no limits.</p>
            <button className="text-white bg-primary px-6 py-2 rounded hover:bg-primary/75 transition-colors duration-200 ease-in-out">Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About