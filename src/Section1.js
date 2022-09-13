import React from 'react'
function Section1() {

  return (
    <div className='min-h-screen relative bg-white bg-center bg-no-repeat bg-cover  lg:bg-scroll pb-[10%]'
    >
      <div className='flex flex-col justify-center w-[80%] mx-auto pt-[15%] relative z-10 lg:pt-[10%] lg:w-[20%] sm:w-[50%]'>
        <div className='w-full mx-auto mb-10' 
           >
            <img src={process.env.PUBLIC_URL+'/images/section1/section1_title1.png'} alt="" className='w-full' data-aos="fade-right" data-aos-duration="1500"/> 
            <img src={process.env.PUBLIC_URL+'/images/section1/section1_img1.png'} alt="" className='w-full mt-10' data-aos="fade" data-aos-duration="1500"/> 
        </div>

      </div>
      <div className='flex items-end  justify-between  ml-[10%]  lg:mx-auto lg:w-[20%] sm:w-[50%]' >
        <div>
          <img src={process.env.PUBLIC_URL+'/images/section1/section1_text1.png'} alt="" className='w-full' data-aos="fade-down" data-aos-duration="1500"/> 
        </div>
        <div className='flex items-center justify-end w-[70%] text-[#c79f62] text-sm font-bold '>
          <div className='w-[15%]'>綠意</div>
          <div className='w-[70%] h-[2px] bg-[#c79f62]'></div>
        </div>
      </div>

      {/* set 2 */}
      <div className='flex flex-col justify-center w-[80%] mx-auto pt-[15%] relative z-10 lg:pt-[10%] lg:w-[20%] sm:w-[50%]'>
        <div className='w-full center mb-10' 
           >
            <img src={process.env.PUBLIC_URL+'/images/section1/section1_title2.png'} alt="" className='w-full' data-aos="fade-right" data-aos-duration="1500"/> 
            <img src={process.env.PUBLIC_URL+'/images/section1/section1_img2.png'} alt="" className='w-full mt-5' data-aos="fade" data-aos-duration="1500"/> 
        </div>

      </div>
      <div className='flex items-end  justify-between  ml-[10%]  lg:mx-auto lg:w-[20%] sm:w-[50%]' >
        <div>
          <img src={process.env.PUBLIC_URL+'/images/section1/section1_text2.png'} alt="" className='w-full' data-aos="fade-down" data-aos-duration="1500"/> 
        </div>
        <div className='flex items-center justify-end w-[70%] text-[#c79f62] text-sm font-bold'>
          <div className='w-[15%]'>童趣體驗</div>
          <div className='w-[70%] h-[2px] bg-[#c79f62]'></div>
        </div>
      </div>

    
    </div>

  )
}

export default Section1