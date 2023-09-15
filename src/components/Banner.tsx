import { Carousel } from "react-responsive-carousel";
import Image from "next/image"
import sl1 from "@/Images/sl1.png"
import sl2 from "@/Images/sl2.png"
import sl3 from "@/Images/sl3.png"
import sl4 from "@/Images/sl4.png"
import sl5 from "@/Images/sl5.png"
import sl6 from "@/Images/sl6.png"
import sl7 from "@/Images/sl7.png"

import Beauti from '@/components/best/Beauty'
import Electronics from '@/components/best/Electronics'
import Fashion from '@/components/best/Fashion'
import Home from "./best/Home";
import Slider from "./Slider";
import Suggetions from "./Suggetions";
import Footer from "./Footer";

const Banner = () => {
  return (
<div className=" shadow-md bg-gray-200 mt-2" >
      <Carousel
        autoPlay
        infiniteLoop={true}
        showThumbs={false}
        interval={3000}
        showArrows={true}
        showIndicators={false}
      >
        <div>
          <Image priority src={sl1} alt="sliderImg"  />
        </div>
        <div>
          <Image src={sl2} alt="sliderImg" />
        </div>
        <div>
          <Image src={sl3} alt="sliderImg" />
        </div>
        <div>
          <Image src={sl4} alt="sliderImg" />
        </div>
        <div>
          <Image src={sl5} alt="sliderImg" />
        </div>
        <div>
          <Image src={sl6} alt="sliderImg" />
        </div>
        <div>
          <Image src={sl7} alt="sliderImg" />
        </div>
        </Carousel>
        <div className="">
      <Electronics/>
      <Fashion/>
      <Beauti/>
      <Home />
      <Suggetions/>
        </div>
      
    </div>
  )
}

export default Banner
