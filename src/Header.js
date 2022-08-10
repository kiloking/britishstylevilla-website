import React from 'react'

function Header() {
  return (
    <div id="header" className='h:100vh rel bg:#0667A2  ' >
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover  bg:scroll@lg z:1  hidden@lg'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover bg:scroll@lg z:1  hidden block@lg'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg2.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div className='flex flex:col jc:center w:100% mx:auto pt:90 rel z:1 abs@lg w:35%@lg pt:0%@lg top:0@lg bottom:0@lg left:10%@lg' >
        <div className='w:3/5 center mb:30' 
        data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
          <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt="" className='w:full'/> 
        </div>
        <div className='w:3/5 center'
        data-aos="fade" data-aos-duration="1500" data-aos-delay="1500">
          <img src={process.env.PUBLIC_URL+'/images/header_title.png'} alt="" className='w:full'/>
        </div>
        
       

      </div>

    </div>
  )
}

export default Header