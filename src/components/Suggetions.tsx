import React from 'react'
import Slider from './Slider'
import { beautyData } from '@/constant/beaty'
import Offer from "@/Images/offer/travel.png"
import Image from "next/image"
const Suggetions = () => {
  return (
    <div className='bg-white mt-2 h-[25rem]'>
      <div className=' flex justify-between'> 
        <h1 className='text-black font-semibold text-lg mt-5 text-center'>Suggested for You </h1>
        <button className='text-white bg-flipkart_blue p-2 m-5'>View All</button>
        </div>
        <div className='w-[85%] h-[20rem] border-t-2'>
        <div className='flex flex-2 overflow-hidden '>
          <Image src={Offer} width={200} height={150}  alt='jj'/>
          <Slider product={beautyData} />
          
        </div>
      </div>
    </div>
  )
}

export default Suggetions
