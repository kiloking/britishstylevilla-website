import React from 'react'
function Section1() {

  return (
    <div className='min-h:100vh rel bg:white bg:center bg:no-repeat bg:cover  bg:scroll@lg pb:10%'
    >
      <div className='flex flex:col jc:center w:80% mx:auto pt:15% rel z:1 pt:10%@lg w:20%@lg w:50%@sm'>
        <div className='w:full center mb:20' 
           >
            <img src={process.env.PUBLIC_URL+'/images/section1/section1_title1.png'} alt="" className='w:full' data-aos="fade-right" data-aos-duration="1500"/> 
            <img src={process.env.PUBLIC_URL+'/images/section1/section1_img1.png'} alt="" className='w:full mt:20' data-aos="fade" data-aos-duration="1500"/> 
        </div>

      </div>
      <div className='flex ai:flex-end jc:space-between ml:10%  w:20%@lg w:50%@sm mx:auto@sm' >
        <div>
          <img src={process.env.PUBLIC_URL+'/images/section1/section1_text1.png'} alt="" className='w:full' data-aos="fade-down" data-aos-duration="1500"/> 
        </div>
        <div className='flex ai:center jc:end w:70% f:#c79f62 t:14 f:bold'>
          <div className='w:15%'>綠意</div>
          <div className='w:70% h:2 bg:#c79f62'></div>
        </div>
      </div>

      {/* set 2 */}
      <div className='flex flex:col jc:center w:80% mx:auto pt:15% rel z:1 pt:10%@lg w:20%@lg w:50%@sm'>
        <div className='w:full center mb:20' 
           >
            <img src={process.env.PUBLIC_URL+'/images/section1/section1_title2.png'} alt="" className='w:full' data-aos="fade-right" data-aos-duration="1500"/> 
            <img src={process.env.PUBLIC_URL+'/images/section1/section1_img2.png'} alt="" className='w:full mt:20' data-aos="fade" data-aos-duration="1500"/> 
        </div>

      </div>
      <div className='flex ai:flex-end jc:space-between ml:10% w:20%@lg w:50%@sm mx:auto@sm' >
        <div>
          <img src={process.env.PUBLIC_URL+'/images/section1/section1_text2.png'} alt="" className='w:full' data-aos="fade-down" data-aos-duration="1500"/> 
        </div>
        <div className='flex ai:center jc:end w:70% f:#c79f62 t:14 f:bold'>
          <div className='w:15%'>童趣體驗</div>
          <div className='w:70% h:2 bg:#c79f62'></div>
        </div>
      </div>

    
    </div>

  )
}

export default Section1