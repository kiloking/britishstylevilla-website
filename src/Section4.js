import React from 'react'
import Slider from "react-slick";
import {SamplePrevArrow, SampleNextArrow} from './Helper/helper'
function Section4() {
  const data = ['p01.jpg','p02.jpg','p03.jpg','p04.jpg','p05.jpg','p06.jpg']
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };
  return (
    <div className='min-h-screen bg-[#0667A2] relative'>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover   z-0  lg:hidden'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section4/section4_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover  z-0 hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section4/section4_bg2.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div className='flex flex-col justify-center w-[80%] mx-auto pt-[15%] relative z-10 lg:pt-[5%] lg:w-[20%]  sm:w-[50%]'>
        <div className='w-full mx-auto mb-10' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section4/section4_title.png'} alt="" className='w-[70%] mx-auto mb-10'/> 
            <img src={process.env.PUBLIC_URL+'/images/section4/section4_subtitle.png'} alt="" className='w-full'/> 
            <div className='flex justify-center pt-10%'>
              <img src={process.env.PUBLIC_URL+'/images/section4/section4_text.png'} alt="" className=''  data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000"/> 
            </div>
        </div>

        
      </div>
      <div className='pt-[15%] sm:pt-[5%] sm:pb-[10%]' data-aos="fade" data-aos-duration="1000">
        <div className='w-full mx-auto mb-10  lg:w-1/2'>
            <Slider {...settings} >
              {
                data.map((item,index)=>{
                  return(
                    <div key={index} className=' relative w-full '>
                        <img src={process.env.PUBLIC_URL +'/images/section4/'+item} alt="" className='w-full'/>
                    </div>
                  )
                })
              }
            </Slider>
        </div>
      </div>


     
    </div>
  )
}

export default Section4