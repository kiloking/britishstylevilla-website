import React from 'react'
function Section5() {

  return (
    <div className='min-h:100vh bg:#deb968 rel'>
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

      <div className='flex flex:col jc:center w:80% mx:auto pt:15% rel z:1 pt:10%@lg w:20%@lg w:50%@md hidden@md'>
        <div className='w:full center mb:20 ' > 
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_title.png'} alt="" className='w:70% mx:auto mb:20' data-aos="fade" data-aos-duration="1500"/> 
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_subtitle.png'} alt="" className='w:full' data-aos="fade" data-aos-duration="1500"/> 
            <div className='rel z:1 grid grid-cols:2 gap:20 mt:30' data-aos="fade-up" data-aos-duration="1500" >
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_text_pic.png'} alt="" className='w:full'/>
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_text.png'} alt="" className='w:full'/>
            </div>
            <div className='w:full mt:10% rel flex gap:20'>
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_content.png'} alt="" className='w:47%'  data-aos="fade" data-aos-duration="1000" data-aos-delay="900"/> 
              <div className='w:50% flex flex:col jc:space-between mt:50' data-aos="fade" data-aos-duration="1000" data-aos-delay="900">
                <img src={process.env.PUBLIC_URL+'/images/section5/section5_p01.png'} alt="" className='w:full'/>
                <img src={process.env.PUBLIC_URL+'/images/section5/section5_p02.png'} alt="" className='w:full'/>
                <img src={process.env.PUBLIC_URL+'/images/section5/section5_p03.png'} alt="" className='w:full'/>
              </div>
            </div>
        </div>
      </div>
      <div className='hidden flex@md'>
        <div className='w:2/5 p:5%' > 
          <img src={process.env.PUBLIC_URL+'/images/section5/section5_title.png'} alt="" className='w:70% mx:auto mb:20' data-aos="fade" data-aos-duration="1500"/> 
          <img src={process.env.PUBLIC_URL+'/images/section5/section5_subtitle.png'} alt="" className='w:full' data-aos="fade" data-aos-duration="1500"/> 
          <div className='w:full mt:10% rel flex gap:20'>
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_content.png'} alt="" className='w:47%'  data-aos="fade" data-aos-duration="1000" data-aos-delay="900"/> 
            <div className='w:50% flex flex:col jc:space-between mt:20' data-aos="fade" data-aos-duration="1000" data-aos-delay="900">
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_p01.png'} alt="" className='w:full'/>
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_p02.png'} alt="" className='w:full'/>
              <img src={process.env.PUBLIC_URL+'/images/section5/section5_p03.png'} alt="" className='w:full'/>
            </div>
          </div>
        </div>
        <div className='abs right:0 top:0 p:5% w:1/4'>
          <div className='rel z:1 mt:30' data-aos="fade-up" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_text.png'} alt="" className='w:full mb:20'/>
            <img src={process.env.PUBLIC_URL+'/images/section5/section5_text_pic.png'} alt="" className='w:full'/>
          </div>
        </div>
      </div>



     
    </div>
  )
}

export default Section5