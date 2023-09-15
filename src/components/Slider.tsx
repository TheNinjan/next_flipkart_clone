import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image'
import { MdFavorite } from 'react-icons/md';
const Slider = ({product}:any) => {
    
  return (
    <Swiper
    spaceBetween={5}
    slidesPerView={5}
    navigation={true}
    
    >
    {product.map((item:any)=>(
           <SwiperSlide  > 
            <div key={item._id} className='p-1 min-w-[13rem] h-[20rem]  justify-center items-center shadow-sm relative'>
            <MdFavorite className="absolute right-5 mt-5 text-gray-400 hover:text-gray-500 "/>
              <Image  className=" mt-5 hover:scale-110 duration-300" src=
              {item.image} width={200 } height={200} alt={item.title} />
              <div className='absolute bottom-3'>
              <p className='ml-10 text-center text-black '>{item.title.substring(0,10)}</p>
              <p className='ml-5 text-green-500 text-center'>From {item.price}</p>
              </div>
              
            </div>
            </SwiperSlide>
          ))}
    
  </Swiper>
  )
}

export default Slider
