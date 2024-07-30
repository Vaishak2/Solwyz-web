import React from 'react'
import doublequotes from '../../Assets/Icons/Double quotes Testimonial.svg'
import CarouselComponent from './Carousel/Carousel'

function CustomerVoices() {
  return (
    <div className='w-full font-urbanist pt-40 lg:pb-20'>
        <div className='sm:text-[70px] text-[36px] tracking-wide'>
            <div><span className='font-bold'>Customer </span><span className='font-thin'>Voices:</span></div>
            <div><span className='font-bold'>Here what </span><span className='font-thin'>they Say !</span></div>
        </div>
        <div className='mt-20' >
            <img src={doublequotes} className='w-[37px] h-[28px] mx-auto'></img>
        </div>
        <div className='w-full'>

          <CarouselComponent/>
        </div>




    </div>
  )
}

export default CustomerVoices
