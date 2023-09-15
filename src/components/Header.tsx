'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/Images/flipkart-full.png"
import flip from "@/Images/flipkart-icon.png"
import {BsCloudPlus} from "react-icons/bs"
import {ImSearch} from "react-icons/im"
import {BsChevronDown} from "react-icons/bs"
import {BiChevronDown,BiChevronUp} from "react-icons/bi"
import {IoIosNotifications} from "react-icons/io"
import {BsFillQuestionSquareFill} from "react-icons/bs"
import {FaCartArrowDown} from "react-icons/fa"
import {HiArrowTrendingUp, HiShoppingCart} from "react-icons/hi2"
import {IoMdDownload} from "react-icons/io"

const Header = () => {
  
  return (
    <div className='w-full h-14 bg-flipkart_blue text-lightText sticky z-20 mt-0 '>
      <div className='h-full w-full max-w-[1250px]  mx-auto px-16 flex items-center justify-around  '>

      <div className='flex justify-between items-center  w-[60%]'>
      {/* Logo */}
      <div className='  '>
        <Image className='object-cover' src={logo} alt='logo' width={75} height={75}/>
        <p className='italic flex gap-1 text-[0.65rem] '>Explore <span className='text-flipkart_yellow2 flex font-bold '>Plus <span className=''><BsCloudPlus/></span></span></p>
      </div>
      {/* searchBar */}
      <div className='h-9 w-[25rem] flex items-center justify-between relative bg-white  shadow-md rounded-sm'>
        <input type="text" placeholder='Search for products,brand and more'
         className='text-black outline-none placeholder:text-sm rounded-sm pl-5 h-full w-[23rem]' />
        <ImSearch className="text-flipkart_blue absolute right-3"/>
      </div>
      {/* Login */}
      <div className='h-10 w-28 gap-1 p-1 '>
        <button className='bg-white text-flipkart_blue rounded-sm w-full h-full font-bold'>Login</button>
      </div>
      </div>

      <div className='flex justify-between items-center w-[30%]'>
      {/* seller */}
      <div className='h-10 gap-1 flex items-center justify-between '>
        <p className=' p-2 text-white cursor-pointer w-full h-full font-bold'>Become a seller</p>
      </div>
      {/* more */}
      <div className='h-full gap-1 relative group   '>
        <p className=' text-white w-full cursor-pointer font-bold p-2 h-full flex justify-center items-center'>More <span ><BiChevronDown className=' group-hover:hidden duration-300'/></span><span ><BiChevronUp className='hidden group-hover:block duration-300'/></span> </p>
        <div className='absolute top-12 -left-5 bg-white shadow-lg w-60 h-[12rem] hidden group-hover:block '>
            <div className='w-full  items-center justify-center p-2 '>
              <div className='flex gap-2 hover:bg-slate-50 p-3 shadow-sm'>
              < IoIosNotifications className="text-flipkart_blue"/>
              <span className='text-sm text-black  '>Notification Preferences</span>
              </div>
              <div className='flex gap-2 hover:bg-slate-50 p-3 shadow-sm'>
              < BsFillQuestionSquareFill className="text-flipkart_blue"/>
              <span className='text-sm text-black  '> 24 x 7 Customer care</span>
              </div>
              <div className='flex gap-2 hover:bg-slate-50 p-3 shadow-sm '>
              < HiArrowTrendingUp className="text-flipkart_blue"/>
              <span className='text-sm text-black  '>Adverties</span>
              </div>
              <div className='flex gap-2 hover:bg-slate-50 p-3 shadow-sm'>
              < IoMdDownload className="text-flipkart_blue"/>
              <span className='text-sm text-black  '>Downlaod App</span>
              </div>
              </div>
        </div>
      </div>
      {/* cart */}
      <div className='h-10 gap-1'>
        <button className='text-white cursor-pointer gap-2 p-2 w-full h-full flex'>
        <HiShoppingCart className='mt-1'/>
          <span className='flex items-center justify-center cursor-pointer font-bold'>Cart</span>
        </button>
      </div>
      </div>
      </div>
    </div>

  )
}

export default Header
