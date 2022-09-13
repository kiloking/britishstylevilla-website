import React, { useState } from 'react'
import { useForm, reset } from "react-hook-form";
import axios from 'axios';
import { MdClear } from "react-icons/md";
function Section7() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      place: "",
    }
  });
  const [formStatus , setFormStatus] = useState(false)
  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },5000)
  }
  //Main: https://sheet.best/api/sheets/b6059729-a36d-40c1-8fcb-8e8f75e4fdd7
  //TEST: https://sheet.best/api/sheets/c045db18-f183-40d4-8e7f-ac7f53cb603f
  //https://sheet.best/api/sheets/63ce9bb5-7af0-4e09-99aa-22511e62f631
  const onSubmit = data => {
    console.log(data)
    axios.post('https://sheet.best/api/sheets/63ce9bb5-7af0-4e09-99aa-22511e62f631', data)
    .then(response => {
      console.log(response);
      sendFormStatusModal()
    })
    .catch(err=>{
      console.log(err)
    })
  };
  return (
    <div className='min-h-screen bg-[#0667A2] bg-center bg-no-repeat bg-cover  '
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section7/section7_bg.png'})`}}
    >
    {formStatus && <div className={'fixed w-full  z-40 inset-0 transition '} onClick={()=>setFormStatus(false)}>
        <div className={`w-3/5 mx-auto rounded-sm p-5 bg-[#000000b4] text-white text-sm top-[15%] relative transition duration-300 delay-1000   ${formStatus ? " opacity-1 blur(0) " : "opacity-0 blur(0.8) "}`}>
        表單已送出。我們將盡快電話聯絡您，詢問並安排您方便的賞屋時間。如有任何問題，歡迎直接聯繫我們，謝謝！
        <div className=' absolute -top-3 -right-3 p-3 bg-black rounded-sm cursor-pointer '><MdClear /></div>
        </div>
      
      </div>}
      <div className='flex flex-col justify-center w-[80%] mx-auto pt-[15%] relative z-10 lg:pt-[10%] lg:w-[20%] sm:w-[50%]'>
        <div className='w-full mx-auto mb-10' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section7/section7_title.png'} alt="" className='w-[90%] mx-auto mb-10'/> 
            <img src={process.env.PUBLIC_URL+'/images/section7/section7_subtitle.png'} alt="" className='w-[70%] mx-auto'/> 

          <div className='w-[2px] h-[35px] bg-white mx-auto mt-5'></div>
          <div className='flex gap-2 justify-center w-[90%] mx-auto mt-5 sm:w-[90%]'>
            <a href="https-//www.facebook.com/treasuredevelopments/" target="_blank" rel="noreferrer" title="link-fb" className='link-fb' data-aos="fade" data-aos-duration="1500">
              <img src={process.env.PUBLIC_URL+'/images/section7/fb.png'} alt="" className='w-full'/> 
            </a>
            <a href="tel-034986766" target="_blank" rel="noreferrer" title="link-tel" className='link-tel' data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
              <img src={process.env.PUBLIC_URL+'/images/section7/tel.png'} alt="" className='w-full' /> 
            </a>
            <a href="https-//goo.gl/maps/naQagjYP4K4obbzRA" target="_blank" rel="noreferrer" title="link-map" className='link-map' data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
              <img src={process.env.PUBLIC_URL+'/images/section7/map.png'} alt="" className='w-full'/> 
            </a>
          </div>
          <img src={process.env.PUBLIC_URL+'/images/section7/section7_text.png'} alt="" className='w-[80%] mx-auto mt-10'/> 

        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="relative w-full mx-auto mt-5 mb-16 lg:w-[100%] ">
        <img src={process.env.PUBLIC_URL+'/images/section7/section7_line.png'} alt="" className='w-[50%] absolute -top-10 -z-10 sm:hidden'/> 
          <div className='w-full flex items-center my-5 justify-end sm:flex-col sm:items-start '>
            <label htmlFor="" className='text-[#0667A2] font-bold mr-5 text-base md:mb-2'>姓名/</label>
            <input type="text" className="blockbg-white ml-3 md:ml-0 rounded-md md:w-full
                px-3 py-2 " placeholder="姓名"    {...register("name", { required: true})}/>
          </div>
          <div className='w-full flex items-center my-5 justify-end sm:flex-col sm:items-start '>
            <label htmlFor="" className='text-[#0667A2] font-bold mr-5 text-base md:mb-2'>電話/</label>
            <input type="text" className="blockbg-white ml-3 md:ml-0 rounded-md  md:w-full
                px-3 py-2" placeholder="電話"    {...register("tel", { required: true})}/>
          </div>
          <div className='w-full flex items-center my-5 justify-end sm:flex-col sm:items-start '>
            <label htmlFor="" className='text-[#0667A2] font-bold mr-5 text-base md:mb-2'>居住區域/</label>
            <input type="text" className="blockbg-white ml-3 md:ml-0 rounded-md  md:w-full
                px-3 py-2 " placeholder="居住區域"    {...register("place", { required: true})}/>
          </div>
          <div className='w-full flex items-center my-5 justify-end sm:flex-col sm:items-start '>
            <label htmlFor="" className='text-[#0667A2] font-bold mr-5 text-base md:mb-2'>預約訊息/</label>
            <input type="text" className="blockbg-white ml-3 md:ml-0 rounded-md  md:w-full
                px-3 py-2 " placeholder="預約訊息"    {...register("msg")}/>
          </div>
          <button className='bg-[#0667A2] px-4 py-6  rounded-md font-bold w-full text-sm text-white' type='submit'>送出表單</button>
        </form>

        
      </div>



     
    </div>
  )
}

export default Section7