import React from 'react'
import Slider from "react-slick";
import {SamplePrevArrow, SampleNextArrow} from './Helper/helper'
function Section2() {
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
    <div className='min-h-screen bg-white '>
      <div className='flex flex-col justify-center w-[80%] mx-auto pt-[15%] relative z-10 lg:pt-[10%] lg:w-[20%] sm:w-[50%]'>
        <div className='w-[70%] mx-auto mb-10 ' 
          data-aos="fade" data-aos-duration="1000" >
            <img src={process.env.PUBLIC_URL+'/images/section2/section2_title.png'} alt="" className='w-full'/> 
        </div>
        
      </div>
      <div className='ml-[10%] sm:ml-0' data-aos="fade" data-aos-duration="1000">
        <div className='w-full mx-auto mb-10  lg:w-1/2'>
            <Slider {...settings} >
              {
                data.map((item,index)=>{
                  return(
                    <div key={index} className='rel w-full '>
                        <img src={process.env.PUBLIC_URL +'/images/section2/'+item} alt="" className='w-full'/>
                    </div>
                  )
                })
              }
            </Slider>
        </div>
      </div>
      <div  className='min-h-[60vh] relative  bg-[#deb968]'> 
        <div
          className='inset-0 absolute  bg-center bg-no-repeat bg-cover   z-0  lg:hidden'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section2/section2_bg.png'})`}}
          data-aos="fade" data-aos-duration="1500"
        ></div>
        <div
          className='inset-0 absolute  bg-center bg-no-repeat bg-cover  z-0  hidden lg:block'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section2/section2_bg2.jpg'})`}}
          data-aos="fade" data-aos-duration="1500"
        ></div>
        
        <div className='w-[70%] mx-auto mb-20 pt-[13%] sm:w-1/4 sm:pt-[5%]' 
          >
            <img src={process.env.PUBLIC_URL+'/images/section2/section2_subtitle.png'} alt="" className='w-full'  data-aos="fade" data-aos-duration="1000"/> 
            <div className='flex  justify-end pt-[10%]'>
              <img src={process.env.PUBLIC_URL+'/images/section2/section2_text.png'} alt="" className=''  data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500"/> 
            </div>
        </div>
          
      </div>
    </div>
  )
}

export default Section2