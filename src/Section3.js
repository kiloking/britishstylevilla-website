import React from 'react'
function Section3() {

  return (
    <div className='min-h-screen bg-white '>
       <div  className='min-h-[35vh]  relative md:min-h-[45vh]'>
        <div
          className='inset-0 absolute  bg-center bg-no-repeat bg-cover   z-0  lg:hidden'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section3/section3_bg.png'})`}}
          data-aos="fade" data-aos-duration="1500"
        ></div>
        <div
          className='inset-0 absolute  bg-center bg-no-repeat bg-cover  z-0 hidden lg:block'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section3/section3_bg2.jpg'})`}}
          data-aos="fade" data-aos-duration="1500"
        ></div>


        <div className='w-[20%] absolute bottom-5 right-5 md:w-32' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section3/section3_title.png'} alt="" className='w-full'/> 


        </div>
          
      </div>

      <div className='flex flex-col justify-center w-[80%] mx-auto pt-[15%] relative z-10 lg:pt-[5%] lg:w-[20%]  sm:w-[50%]'>
        <div className='w-full mx-auto mb-5' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section3/section3_subtitle.png'} alt="" className='w-full'/> 
            <div className='flex justify-center pt-[10%]'>
              <img src={process.env.PUBLIC_URL+'/images/section3/section3_text.png'} alt="" className=''  data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500"/> 
            </div>
        </div>

        
      </div>
      <div className='flex  justify-between items-center w-full pt-[12%] lg:w-[50%] sm:w-[50%] sm:mx-auto sm:pt-[5%]' data-aos="fade" data-aos-duration="1000">
        <img src={process.env.PUBLIC_URL+'/images/section3/section3_img1.png'} alt="" className='w-[48%]'/> 
        <img src={process.env.PUBLIC_URL+'/images/section3/section3_img2.png'} alt="" className='w-[48%]'/> 
      </div>

     
    </div>
  )
}

export default Section3