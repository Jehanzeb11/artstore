"use client"
import Lottie from 'lottie-react';
import React from 'react'
import animationData from '../../animation/aboutAnim2.json'
const About = () => {
  return (
    <div className="text-white py-16 flex justify-center items-center px-4 w-full">
      <div className="max-w-screen-xl">
        <div className="sm:grid grid-cols-12 gap-8">
          <div className="md:col-span-6 col-span-12">
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
          <div className="md:col-span-6 col-span-10 flex flex-col justify-center items-start sm:gap-6">
            <div className="text-5xl font-semibold text-primary max-sm:mb-5">
              About Us
            </div>
            <p className="text-lg max-sm:mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sequi vitae quidem. Voluptate libero nihil perspiciatis nam totam, aliquam voluptatum et impedit cupiditate neque obcaecati eum omnis? Recusandae, libero tempore autem facere quidem sed commodi mollitia repudiandae beatae, reprehenderit rerum? Placeat alias hic et beatae repellendus est nam repellat, eaque cumque incidunt. Itaque ratione repudiandae, error sed provident ullam natus officiis neque harum laborum aperiam excepturi iure quo, aspernatur soluta consectetur delectus a perferendis temporibus eius, tempore eos expedita at! Commodi et laboriosam ex repellendus nihil doloremque, libero perspiciatis fuga at eius porro praesentium, earum odio reiciendis beatae, maxime recusandae?</p>
            <button className="text-white bg-primary px-6 py-2 rounded hover:bg-primary/75 transition-colors duration-200 ease-in-out">Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About