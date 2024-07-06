import React from 'react'
import { useSelector } from 'react-redux'

function Data() {

const Data = useSelector((state)=> state.counter.value)
console.log(Data)
   
const handalShow = (lala)=>{
    navigate('/Card')
}
  return (
   <>
   <section className='pt-20 bg-white' >
            <div className="container">
                <div className="main_row flex gap-40 pb-5">
                    <div className="product_image w-[500px]">
                        <img src={Data.image} alt="product image" />
                    </div>
                    <div className="product_text w-[900px]">
                        <h2 className='text-[25px]  font-semibold  italic mb-[50px]'>{Data.image_description}</h2>
                        <h3 className='text-2xl font-semibold'>{Data.product_name}</h3>
                        <ul className='mt-[50px] text-[18px] font-normal'>
                            <li>product_id:{Data.product_id}</li>
                            <li>Brightness:{Data.Brightness}</li>
                            <li>features:{Data.features}</li>
                            <li>Generation:{Data.Generation}</li>
                            <li>RAM:{Data.RAM} </li>
                            <li>Color:{Data.Color}</li>
                            <li>Microphone:{Data.Microphone}</li>
                        </ul>
                        <div className=' flex gap-10'>
                        <h2 className='text-3xl font-bold italic mt-5 text-[#FFA62F]'>price:{Data.product_price} </h2>
                        <button  className='w-[160px] h-[40px] flex justify-center items-center  bg-[#FFDB00] mt-3 mb-3 text-[20px] font-semibold gap-2 text-[#000] hover:bg-[#FF8F00] hover:text-white rounded-sm'>Buy Now</button>
                        <button  className='w-[160px] h-[40px] flex justify-center items-center  bg-[#3749BB0D] mt-3 mb-3 text-[20px] font-semibold gap-2 text-[#3749BB] hover:bg-[#3749BB] hover:text-white rounded-sm'>Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='pt-20'>
            <div className="container">
                <div className="main_data bg-white p-5 rounded-lg">
                    <h2 className=' text-xl font-bold text-black'>Specification</h2>
                    <div className="singel_part">
                        <div className="part_head mt-5">
                            <h4 className='p-2 bg-[#F5F6FC] text-[16px] font-bold text-[#3749BB] '>Processor Model</h4>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>Processor Model</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.Processor_Model}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>operating_system</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.Operating_System}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                        </div>
                    </div>
                    <div className="singel_part">
                        <div className="part_head mt-5">
                            <h4 className='p-2 bg-[#F5F6FC] text-[16px] font-bold text-[#3749BB] '>Memory</h4>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>Ram</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.RAM}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>Storage Capacity</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.Storage_Capacity}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                        </div>
                    </div>
                    <div className="singel_part">
                        <div className="part_head mt-5">
                            <h4 className='p-2 bg-[#F5F6FC] text-[16px] font-bold text-[#3749BB] '>Display</h4>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>Display Resolution</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.Display_Resolution}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>display_type</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.Display_Type}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>display_resolution</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.Display_Resolution}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>Touch Screen</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.Touch_Screen}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                        </div>
                    </div>
                    <div className="singel_part">
                        <div className="part_head mt-5">
                            <h4 className='p-2 bg-[#F5F6FC] text-[16px] font-bold text-[#3749BB] '>Battery Capacity</h4>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>{Data.Battery_Capacity}</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.Battery_Type}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>Bluetooth</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.Bluetooth}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                        </div>
                    </div>
                    <div className="singel_part">
                        <div className="part_head mt-5">
                            <h4 className='p-2 bg-[#F5F6FC] text-[16px] font-bold text-[#3749BB] '>Other Features</h4>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>Weight</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.Weight}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                            <div>
                                <div className="data_row flex gap-[100px] mt-5">
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-normal'>Warranty Details</h5>
                                    </div>
                                    <div className="data_tittle w-[400px]">
                                        <h5 className=' text-lg font-semibold'>{Data.Warranty_Details}</h5>
                                        
                                    </div>
                                </div>
                                <hr className='mt-4' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
   </>
  )
}

export default Data