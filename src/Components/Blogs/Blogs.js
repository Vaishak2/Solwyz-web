import React, { useEffect } from 'react'
import blogImg1 from '../../Assets/images/blogimg1.jpg'
import blogImg2 from '../../Assets/images/blogimg2.jpg'
import blogImg3 from '../../Assets/images/blogimg3.jpg'
import blogImg4 from '../../Assets/images/blogimg4.jpg'
import blogImg5 from '../../Assets/images/blogimg5.jpg'
import blogImg6 from '../../Assets/images/blogimg6.jpg'
import readMoreButton from '../../Assets/images/ReadMoreNew.png'
import { Link } from 'react-router-dom'

function Blogs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div>
      <div className='sm:pt-30 pt-20 pb-[72px]' id='blogs'>
      <div className='sm:text-[16px] text-[10px] font-urbanist font-medium justify-center text-center sm:pt-[60px] pt-[20px] '>
        <Link to='/'> <span className='text-gray-400'>HOMEPAGE / </span></Link><span>BLOGS</span>
      </div>
        <div className='sm:text-[72px] text-[36px] tracking-wide font-urbanist sm:mt-10 mt-6'>
            <div>
                <span className='font-semibold'>Exploring </span><span className='font-thin '>the World</span>
            </div>
            <div>
                <span className='font-thin '>Through </span><span className='font-semibold'>Our Blog</span>
            </div>
        </div>
        <div className='text-[30px] mt-20 md:mx-28 mx-4'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
            <div>
              <img className='h-[360px] w-full' src={blogImg5} alt='blogimage'></img>
              <div className='font-urbanist text-left sm:mt-7'>
                <div className='text-[14px] font-semibold tracking-wide mt-3'>
                  <span className='text-banner-buttonBackground'>TECHNOLOGY </span><span className='ml-4 text-gray-400'>JUNE 5 2024</span>
                </div>
                <div className='sm:text-[30px] text-[20px] font-semibold tracking-wide sm:mt-6 mt-3'>Revolutionizing Business Operations: The Power of Digital Transformation...</div>
                <div className='text-[18px] tracking-wide font-medium sm:mt-6 mt-3'>The use of technology for digital transformation in business automation can significantly drive business growth. Here’s...</div>
              </div>
              <div className='sm:mt-10 mt-6 sm:mb-5'>
                 <Link to='/blogdetails1'>
                  <img src={readMoreButton} alt='buttonimg' className='hover:cursor-pointer sm:w-[204px] sm:h-[56px] w-[165px] h-[48px] '></img>
                </Link>
              </div>
            </div>

            <div>
            <img className='h-[360px] w-full' src={blogImg6} alt='blogimage'></img>
              <div className='font-urbanist text-left sm:mt-7'>
                <div className='text-[14px] font-semibold tracking-wide mt-3'>
                  <span className='text-banner-buttonBackground'>TECHNOLOGY </span><span className='ml-4 text-gray-400'>JUNE 5 2024</span>
                </div>
                <div className='sm:text-[30px] text-[18px] font-semibold tracking-wide sm:mt-6 mt-3'>Boosting Efficiency and Productivity: How ERP Implementation Benefits...</div>
                <div className='text-[18px] tracking-wide font-medium sm:mt-6 mt-3'>Implementing an Enterprise Resource Planning (ERP) system can significantly boost efficiency and productivity for businesses...
              </div>
              </div>
              <div className='sm:mt-10 mt-6 sm:mb-5'>
                <Link to='/blogdetails2'>
                <img cla src={readMoreButton} alt='buttonimg' className='hover:cursor-pointer sm:w-[204px] sm:h-[56px] w-[165px] h-[48px] '></img>
                </Link>
              </div>
            </div>

            {/* <div>
            <img className='h-[360px] w-full' src={blogImg3} alt='blogimage'></img>
              <div className='font-urbanist text-left sm:mt-7'>
                <div className='text-[14px] font-semibold tracking-wide'>
                  <span className='text-banner-buttonBackground'>TECHNOLOGY </span><span className='ml-4 text-gray-400'>JUNE 5 2024</span>
                </div>
                <div className='text-[30px] font-semibold tracking-wide sm:mt-6'>How To Become a Graphic Designer in 10 Simple Steps</div>
                <div className='text-[18px] tracking-wide font-medium sm:mt-6'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis</div>
              </div>
              <div className='sm:mt-10 sm:mb-5'>
                <img src={readMoreButton} alt='buttonimg' className='hover:cursor-pointer'></img>
              </div>
            </div>

            <div>
            <img className='h-[360px] w-full' src={blogImg4} alt='blogimage'></img>
              <div className='font-urbanist text-left sm:mt-7'>
                <div className='text-[14px] font-semibold tracking-wide'>
                  <span className='text-banner-buttonBackground'>TECHNOLOGY </span><span className='ml-4 text-gray-400'>JUNE 5 2024</span>
                </div>
                <div className='text-[30px] font-semibold tracking-wide sm:mt-6'>How To Become a Graphic Designer in 10 Simple Steps</div>
                <div className='text-[18px] tracking-wide font-medium sm:mt-6'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis</div>
              </div>
              <div className='sm:mt-10 sm:mb-5'>
                <img src={readMoreButton} alt='buttonimg' className='hover:cursor-pointer'></img>
              </div>
            </div> */}

            {/* <div>
            <img className='h-[360px] w-full' src={blogImg1} alt='blogimage'></img>
              <div className='font-urbanist text-left sm:mt-7'>
                <div className='text-[14px] font-semibold tracking-wide'>
                  <span className='text-banner-buttonBackground'>TECHNOLOGY </span><span className='ml-4 text-gray-400'>JUNE 5 2024</span>
                </div>
                <div className='text-[30px] font-semibold tracking-wide sm:mt-6'>How To Become a Graphic Designer in 10 Simple Steps</div>
                <div className='text-[18px] tracking-wide font-medium sm:mt-6'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis</div>
              </div>
              <div className='sm:mt-10 sm:mb-5'>
                <img src={readMoreButton} alt='buttonimg' className='hover:cursor-pointer'></img>
              </div>
            </div>

            <div>
            <img className='h-[360px] w-full' src={blogImg2} alt='blogimage'></img>
              <div className='font-urbanist text-left sm:mt-7'>
                <div className='text-[14px] font-semibold tracking-wide'>
                  <span className='text-banner-buttonBackground'>TECHNOLOGY </span><span className='ml-4 text-gray-400'>JUNE 5 2024</span>
                </div>
                <div className='text-[30px] font-semibold tracking-wide sm:mt-6'>How To Become a Graphic Designer in 10 Simple Steps</div>
                <div className='text-[18px] tracking-wide font-medium sm:mt-6'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis</div>
              </div>
              <div className='sm:mt-10 sm:mb-5'>
                <img src={readMoreButton} alt='buttonimg' className='hover:cursor-pointer'></img>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
