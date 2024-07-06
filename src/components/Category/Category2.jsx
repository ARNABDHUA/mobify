import React from 'react'
import Button from '../Shared/Button'
import Image3 from '../../assets/category/gaming.png'
import Image1 from '../../assets/category/vr.png'
import Image2 from '../../assets/category/speaker.png'
const Category2 = () => {
  return (
    <div className='py-8'>
        <div className=' container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                 {/* 1st col */}
                 <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative  h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='mb-[2px] text-white'>enjoy</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>PS-5</p> 
                            <Button text="Browse" 
                                bgColor="bg-primary"
                                textColor="text-white"/>
                        </div>
                    </div>
                    <img src={Image3} alt="" className='w-[170px] sm:w-[250px] absolute -right-0 top-1/2 -translate-y-1/2 ' />
                </div>

                {/* 2nd col */}
                <div className=' col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative  h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='mb-[2px] text-white'>enjoy</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>VR</p> 
                            <Button text="Browse" 
                                bgColor="bg-white"
                                textColor="text-brandGreen"/>
                        </div>
                    </div>
                    <img data-aos="zoom-out" data-aos-once="true" data-aos-duration="0" src={Image1} alt="" className='w-[320px] absolute bottom-0' />
                </div>
                {/* 3rd col */}
                <div className='col-span-2 sm:col-span-1 py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative  h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='mb-[2px] text-white'>enjoy</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speaker</p> 
                            <Button text="Browse" 
                                bgColor="bg-white"
                                textColor="text-brandBlue"/>
                        </div>
                    </div>
                    <img src={Image2} alt="" className='w-[200px] absolute -right-3 top-[10px] lg:top-[20px]' />
                </div>

                

            </div>
        </div>
    </div>
  )
}

export default Category2