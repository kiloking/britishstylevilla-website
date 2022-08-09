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
  const onSubmit = data => {
    console.log(data)
    axios.post('https://sheet.best/api/sheets/c045db18-f183-40d4-8e7f-ac7f53cb603f/tabs/web02', data)
    .then(response => {
      console.log(response);
      sendFormStatusModal()
    })
    .catch(err=>{
      console.log(err)
    })
  };
  return (
    <div className='min-h:100vh bg:white bg:center bg:no-repeat bg:cover   bg:scroll@lg'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section7/section7_bg.png'})`}}
    >
      <div className='flex flex:col jc:center w:80% mx:auto pt:15% rel z:1 pt:10%@lg w:20%@lg w:50%@sm'>
        <div className='w:full center mb:20' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section7/section7_title.png'} alt="" className='w:90% mx:auto mb:20'/> 
            <img src={process.env.PUBLIC_URL+'/images/section7/section7_subtitle.png'} alt="" className='w:70% mx:auto'/> 

          <div className='w:2 h:20 bg:white mx:auto mt:20'></div>
          <div className='flex gap:10 jc:center w:90% mx:auto mt:20 w:60%@sm'>
            <a href="https://www.facebook.com/profile.php?id=100083270795919" target="_blank" rel="noreferrer" title="link-fb" className='link-fb'>
              <img src={process.env.PUBLIC_URL+'/images/section7/fb.png'} alt="" className='w:full'/> 
            </a>
            <a href="tel:033811288" target="_blank" rel="noreferrer" title="link-tel" className='link-tel'>
              <img src={process.env.PUBLIC_URL+'/images/section7/tel.png'} alt="" className='w:full' /> 
            </a>
            <a href="https://goo.gl/maps/naQagjYP4K4obbzRA" target="_blank" rel="noreferrer" title="link-map" className='link-map'>
              <img src={process.env.PUBLIC_URL+'/images/section7/map.png'} alt="" className='w:full'/> 
            </a>
          </div>
          <img src={process.env.PUBLIC_URL+'/images/section7/section7_text.png'} alt="" className='w:80% mx:auto mt:20'/> 

        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="rel w:100% mx:auto my:30 w:40%@lg w:40%@sm">
        <img src={process.env.PUBLIC_URL+'/images/section7/section7_line.png'} alt="" className='w:50% abs top:-30 z:-1'/> 
          <div className='w:full flex ai:center my:10 jc:end flex:col@sm ai:start@sm '>
            <input type="text" className="block  bg:white ml:3 r:5  w:full@sm
                px:6 py:5 " placeholder="姓名"    {...register("name", { required: true})}/>
          </div>
          <div className='w:full flex ai:center my:10 jc:end flex:col@sm ai:start@sm '>
            <input type="text" className="block  bg:white ml:3 r:5 w:full@sm   
                px:6 py:5 " placeholder="電話"    {...register("tel", { required: true})}/>
          </div>
          <div className='w:full flex ai:center my:10 jc:end flex:col@sm ai:start@sm '>
            <input type="text" className="block  bg:white ml:3 r:5  w:full@sm
                px:6 py:5 " placeholder="居住區域"    {...register("place", { required: true})}/>
          </div>
          <div className='w:full flex ai:center my:10 jc:end flex:col@sm ai:start@sm '>
            <input type="text" className="block  bg:white ml:3 r:5  w:full@sm
                px:6 py:5 " placeholder="預約訊息"    {...register("msg")}/>
          </div>
          <button className='bg:#0667A2 px:8 py:12 r:5 f:bold w:full t:14 f:white' type='submit'>送出表單</button>
        </form>

        
      </div>



     
    </div>
  )
}

export default Section7