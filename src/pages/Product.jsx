import React, { useEffect, useState } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singleProductData } from '../Slice/ProductSlice';



function Product() {

const [productData,setProductData]= useState ([])

const navigate = useNavigate ()

const dispatch = useDispatch()

  useEffect(()=>{
   axios.get('https://api.jsonbin.io/v3/b/6666ceebe41b4d34e4012c66')

.then((res)=> setProductData (res.data.record))
.then((error)=> console.log (error))

  },[])
  
  console.log(productData)

const handalShow = (lala)=>{
 navigate('/Data')

 dispatch(singleProductData (lala))

}


  return (
    <>
   
   <section className=' p-10'>
    <div className=' container'>
      <div className=' menu_row flex gap-5 flex-wrap justify-center'>
       {

       productData.map((item , i)=>(

        <div key={i} className=' single_product_cart w-[250px] h-[650px] bg-white p-5'>
        <div className='product_image w-full h-[130px] overflow-hidden'>
          <img className=' w-full h-full' src={item.image} alt="img" />
        </div>
  <div className=' product-text'>
  <h2 className='text-[18px] font-semibold text-[#000] mt-5 mb-5'>{item.product_name}</h2>
  <ul className='list-disc p-5'>
      <li>{item.product_id}</li>
      <li>{item.Brightness}</li>
      <li>{item.features}</li>
      <li>{item.Generation}</li>
      <li>{item.RAM}</li>
      <li>{item.Color}</li>
      <li>{item.Microphone}</li>
   </ul>
   <hr />
       <h3 className=' mt-5 text-[20px]  font-bold text-[#EF4A23] text-center' >price: {item.product_price}</h3>
       <button onClick={()=> handalShow(item)}   className='w-full h-[40px] flex justify-center items-center  bg-[#FFDB00] mt-3 mb-3 text-[20px] font-semibold gap-2 text-[#000] hover:bg-[#FF8F00] hover:text-white rounded-sm'><IoNewspaper /> Show more</button>
        <button className='w-full h-[40px] flex justify-center items-center  bg-[#3749BB0D] mt-3 mb-3 text-[20px] font-semibold gap-2 text-[#3749BB] hover:bg-[#3749BB] hover:text-white rounded-sm'><MdShoppingCart /> Buy Now</button>
  </div>

      </div>

       ))

       }

      </div>
    </div>
   </section>
    </>
  )
}

export default Product