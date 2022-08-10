import React from 'react'
function Section5() {

  return (
    <div className='min-h:100vh bg:white rel'
   
    >
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover  bg:scroll@lg z:0  hidden@lg'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section5/section5_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover bg:scroll@lg z:0  hidden block@lg'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section5/section5_bg2.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      
      <div className='flex flex:col jc:center w:80% mx:auto pt:15% rel z:1 pt:10%@lg w:20%@lg w:50%@sm'>
        <div className='w:full center mb:20' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_title.png'} alt="" className='w:70% mx:auto mb:20'/> 
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_subtitle.png'} alt="" className='w:full'/> 
            <div className='w:full mt:10% rel'>
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_block.png'} alt="" className=''  data-aos="fade" data-aos-duration="1000" data-aos-delay="900"/> 
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_text.png'} alt="" className='abs right:0 top:0'  data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1200"/> 
            </div>
        </div>

        
      </div>



     
    </div>
  )
}

export default Section5