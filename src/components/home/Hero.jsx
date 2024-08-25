import React from 'react'
// import video1 from '../../assets/video1.mp4'

const Hero = () => {
  return (
    <div className="h-screen w-full text-white">
    <video loop muted autoPlay className="w-full h-full object-cover">
      <source src="https://gallery.famewheels.com/portfolio/videos/section2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  )
}

export default Hero