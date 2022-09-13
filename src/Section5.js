import React from 'react'
function Section5() {

  return (
    <div className='min-h-screen bg-[#003B8C]  relative'>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover   z-0  lg:hidden'
        style={{backgroundImage:`url(${process.env.PUBLIC_URL +'/images/section5/section5_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover  z-0 hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section5/section5_bg2.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>

      <div className='flex flex-col justify-center w-[80%] mx-auto pt-[15%] relative z-10 lg:pt-[10%] lg:w-[20%] md:w-[50%] lg:hidden'>
        <div className='w-full mx-auto mb-10 ' > 
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_title.png'} alt="" className='w-[70%] mx-auto mb-10' data-aos="fade" data-aos-duration="1500"/> 
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_subtitle.png'} alt="" className='w-full' data-aos="fade" data-aos-duration="1500"/> 
            <div className='rel z-1 grid grid-cols-2 gap-20 mt-30' data-aos="fade-up" data-aos-duration="1500" >
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_text_pic.png'} alt="" className='w-full'/>
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_text.png'} alt="" className='w-full'/>
            </div>
            <div className='w-full mt-[10%] relative flex gap-10'>
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_content.png'} alt="" className='w-[47%]'  data-aos="fade" data-aos-duration="1000" data-aos-delay="900"/> 
              <div className='w-[50%] flex flex-col justify-between mt-50' data-aos="fade" data-aos-duration="1000" data-aos-delay="900">
                <img src={process.env.PUBLIC_URL+'/images/section5/section5_p01.png'} alt="" className='w-full'/>
                <img src={process.env.PUBLIC_URL+'/images/section5/section5_p02.png'} alt="" className='w-full'/>
                <img src={process.env.PUBLIC_URL+'/images/section5/section5_p03.png'} alt="" className='w-full'/>
              </div>
            </div>
        </div>
      </div>
      <div className='hidden lg:flex'>
        <div className='w-2/5 p-[5%]' > 
          <img src={process.env.PUBLIC_URL+'/images/section5/section5_title.png'} alt="" className='w-[70%] mx-auto mb-10' data-aos="fade" data-aos-duration="1500"/> 
          <img src={process.env.PUBLIC_URL+'/images/section5/section5_subtitle.png'} alt="" className='w-full' data-aos="fade" data-aos-duration="1500"/> 
          <div className='w-full mt-[10%] relative flex gap-10'>
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_content.png'} alt="" className='w-[47%]'  data-aos="fade" data-aos-duration="1000" data-aos-delay="900"/> 
            <div className='w-50% flex flex-col justify-between mt-20' data-aos="fade" data-aos-duration="1000" data-aos-delay="900">
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_p01.png'} alt="" className='w-full'/>
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_p02.png'} alt="" className='w-full'/>
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_p03.png'} alt="" className='w-full'/>
            </div>
          </div>
        </div>
        <div className='absolute right-0 top-0 p-[5%] w-1/4'>
          <div className='relative z-10 mt-10' data-aos="fade-up" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_text.png'} alt="" className='w-full mb-10'/>
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_text_pic.png'} alt="" className='w-full'/>
          </div>
        </div>
      </div>



     
    </div>
  )
}

export default Section5