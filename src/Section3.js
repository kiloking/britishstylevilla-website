import React from 'react'
function Section3() {

  return (
    <div className='min-h:100vh bg:white bg:scroll@lg'>
       <div  className='min-h:35vh bg:beryl-14 bg:center bg:no-repeat bg:cover  bg:scroll@lg rel'
       style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section3/section3_bg.png'})`}}
      >
        <div className='w:20% abs bottom:10 right:10' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section3/section3_title.png'} alt="" className='w:full'/> 


        </div>
          
      </div>

      <div className='flex flex:col jc:center w:80% mx:auto pt:15% rel z:1 pt:10%@lg w:20%@lg w:50%@sm'>
        <div className='w:full center mb:20' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section3/section3_subtitle.png'} alt="" className='w:full'/> 
            <div className='flex jc:center pt:10%'>
              <img src={process.env.PUBLIC_URL+'/images/section3/section3_text.png'} alt="" className=''  data-aos="fade" data-aos-duration="1000" data-aos-delay="500"/> 
            </div>
        </div>

        
      </div>
      <div className='flex jc:space-between ai:center w:full pt:12%' data-aos="fade" data-aos-duration="1000">
        <img src={process.env.PUBLIC_URL+'/images/section3/section3_img1.png'} alt="" className='w:48%'/> 
        <img src={process.env.PUBLIC_URL+'/images/section3/section3_img2.png'} alt="" className='w:48%'/> 
      </div>

     
    </div>
  )
}

export default Section3