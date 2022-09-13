import React from 'react'

function Header() {
  return (
    <div id="header" className='h-screen relative bg-[#0667A2] ' >
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover  lg:bg-scroll z-10  lg:hidden'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover lg:bg-scroll z-10  hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg2.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div className='flex flex-col justify-center w-full mx-auto pt-30 relative z-10  lg:absolute lg:w-[40%] lg:pt-0 lg:top-0 lg:bottom-0 lg:left-[10%]' >
        <div className='w-3/5 mx-auto mb-10' 
        data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
          <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt="" className='w-full'/> 
        </div>
        <div className='w-3/5 mx-auto'
        data-aos="fade" data-aos-duration="1500" data-aos-delay="1500">
          <img src={process.env.PUBLIC_URL+'/images/header_title.png'} alt="" className='w-full'/>
        </div>
        
       

      </div>

    </div>
  )
}

export default Header