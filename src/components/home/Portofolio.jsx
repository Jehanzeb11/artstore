"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import img1 from "@/assets/img1.jpg"
import img2 from "@/assets/img2.jpg"
import img3 from "@/assets/img3.jpg"
import img4 from "@/assets/img4.jpg"
import img5 from "@/assets/img5.jpg"
import img6 from "@/assets/img6.jpg"
import img7 from "@/assets/img7.jpg"
import img8 from "@/assets/img8.jpg"
import img9 from "@/assets/img9.jpg"
import img10 from "@/assets/img10.jpg"
import img11 from "@/assets/img11.jpg"
import img12 from "@/assets/img12.jpg"
import img13 from "@/assets/img13.jpg"
import img14 from "@/assets/img14.jpg"
import img15 from "@/assets/img15.jpg"
import img16 from "@/assets/img16.jpg"
import img17 from "@/assets/img17.jpg"
import img18 from "@/assets/img18.jpg"
import img19 from "@/assets/img19.jpg"
import img20 from "@/assets/img20.jpg"
import img21 from "@/assets/img21.jpg"
import img22 from "@/assets/img22.jpg"
import img23 from "@/assets/img23.jpg"
import img24 from "@/assets/img24.jpg"
import img25 from "@/assets/img25.jpg"
import img26 from "@/assets/img26.jpg"
import img27 from "@/assets/img27.jpg"
import img28 from "@/assets/img28.jpg"
import img29 from "@/assets/img29.jpg"
import img30 from "@/assets/img30.jpg"
import avatar from "@/assets/avatar.png"

const Portofolio = () => {

    const [hoveredId, setHoveredId] = useState(null);

    const postofolios = [
        {
            id: 1,
            img: img1,
            changeImg:img12
        },
        {
            id: 2,
            img: img2,
            changeImg:img12
        },
        {
            id: 3,
            img: img3,
            changeImg:img12
        },
        {
            id: 4,
            img: img4,
            changeImg:img12
        },
        {
            id: 5,
            img: img5,
            changeImg:img12
        },
        {
            id: 6,
            img: img6,
            changeImg:img12
        },
        {
            id: 7,
            img: img7,
            changeImg:img12
        },
        {
            id: 8,
            img: img8,
            changeImg:img12
        },
        {
            id: 9,
            img: img9,
            changeImg:img12
        },
        {
            id: 10,
            img: img10,
            changeImg:img12
        },
        {
            id: 11,
            img: img11,
            changeImg:img12
        },
        {
            id: 12,
            img: img12,
            changeImg:img12
        },
        {
            id: 13,
            img: img13,
            changeImg:img12
        },
        {
            id: 14,
            img: img14,
            changeImg:img12
        },
        {
            id: 15,
            img: img15,
            changeImg:img12
        },
        {
            id: 16,
            img: img16,
            changeImg:img12
        },
        {
            id: 17,
            img: img17,
            changeImg:img12
        },
        {
            id: 18,
            img: img18,
            changeImg:img12
        },
        {
            id: 19,
            img: img19,
            changeImg:img12
        },
        {
            id: 20,
            img: img20,
            changeImg:img12
        },
        {
            id: 21,
            img: img21,
            changeImg:img12
        }, {
            id: 22,
            img: img22,
            changeImg:img12
        }, {
            id: 23,
            img: img23,
            changeImg:img12
        }, {
            id: 24,
            img: img24,
            changeImg:img12
        }, {
            id: 25,
            img: img25,
            changeImg:img12
        }, {
            id: 20,
            img: img20,
            changeImg:img12
        }, {
            id: 26,
            img: img26,
            changeImg:img12
        }, {
            id: 27,
            img: img27,
            changeImg:img12
        }, {
            id: 28,
            img: img28,
            changeImg:img12
        },
        {
            id: 29,
            img: img29,
            changeImg:img12
        },
        {
            id: 30,
            img: img30,
            changeImg:img12
        },

    ]



    return (
        <div className="text-white py-16 flex flex-col justify-center items-center sm:px-6 w-full">
            <h1 className="text-5xl font-semibold text-white max-sm:px-4 mb-5 w-full">All Channels</h1>
            <div className="grid grid-cols-12 gap-1 w-full">
            {postofolios.map(({ id, img, changeImg }) => (
        <div
          key={id}
          className="relative xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-6 rounded group"
          data-aos="zoom-in"
          onMouseEnter={() => setHoveredId(id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Image
            src={ img}
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full object-contain transition-all duration-300 ease-in-out"
          />
          <Image
            src={changeImg}
            alt="img"
            width={1000}
            height={1000}
            className={`absolute top-0 ${hoveredId === id ? "opacity-100" : "opacity-0"} w-full h-full object-contain transition-all duration-500 ease-in-out`}
          />
          <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black/70 to-black/0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="flex items-end justify-start sm:gap-2 sm:p-2 w-full h-full transform -translate-x-6 group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
              <Image
                src={avatar}
                alt="avatar"
                width={1000}
                height={1000}
                className="w-14 h-14 object-contain"
              />
              <div className="text-white">
                <h4 className="sm:text-xl text-base font-semibold">Sample Image</h4>
                <p className="text-sm font-medium">John Doe</p>
              </div>
            </div>
          </div>
        </div>
      ))}



            </div>
        </div>
    )
}

export default Portofolio