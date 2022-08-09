import React from 'react'
import Slider from "react-slick";
import {SamplePrevArrow, SampleNextArrow,fakeData} from './Helper/helper'
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
    <div className='min-h:100vh bg:white bg:scroll@lg'>
      <div className='flex flex:col jc:center w:80% mx:auto pt:15% rel z:1 pt:10%@lg w:20%@lg w:50%@sm'>
        <div className='w:70% left mb:20' 
          data-aos="fade" data-aos-duration="1000" >
            <img src={process.env.PUBLIC_URL+'/images/section2/section2_title.png'} alt="" className='w:full'/> 
        </div>
        
      </div>
      <div className='ml:10%' data-aos="fade" data-aos-duration="1000">
        <div className='w:full center mb:20  w:1/2@lg'>
            <Slider {...settings} >
              {
                data.map((item,index)=>{
                  return(
                    <div key={index} className='rel w:full '>
                        <img src={process.env.PUBLIC_URL +'/images/section2/'+item} alt="" className='w:full'/>
                    </div>
                  )
                })
              }
            </Slider>
        </div>
      </div>
      <div  className='min-h:60vh bg:beryl-14 bg:center bg:no-repeat bg:cover bg:fixed bg:scroll@lg'
       style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section2/section2_bg.png'})`}}
      >
        <div className='w:70% center mb:20 pt:13%' 
          >
            <img src={process.env.PUBLIC_URL+'/images/section2/section2_subtitle.png'} alt="" className='w:full'  data-aos="fade" data-aos-duration="1000"/> 
            <div className='flex jc:flex-end pt:10%'>
              <img src={process.env.PUBLIC_URL+'/images/section2/section2_text.png'} alt="" className=''  data-aos="fade" data-aos-duration="1000" data-aos-delay="500"/> 
            </div>

            
        </div>
          
      </div>
    </div>
  )
}

export default Section2