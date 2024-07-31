import React from 'react'
import './WaveSection.css'; 

function Banner() {
  return (
    <div className="relative">
      <div id='home' className='w-full sm:bg-banner-background-2 bg-banner-background-mobile bg-cover h-[745px]'>
        <div className='flex-1 md:space-y-0 font-urbanist text-left  text-white pt-[243px]  sm:ml-[149px]  '>
          <div className='sm:mr-[269px] text-[40px] text-center sm:text-[77px] leading-normal sm:leading-[75px] sm:tracking-wide sm:text-left'><span className=' font-semibold'>Elevate </span><span className='font-thin'>your</span></div>
          <div className='font-extralight sm:text-[77px] text-[40px] sm:leading-[72px] ps-1 text-center sm:text-left'>business</div>
          <div className='text-[14px] font-extralight tracking-wide ps-1 sm:pt-1 text-center sm:text-left'>Pioneering business success through innovative solutions</div>
          <a className='content-center justify-center mx-auto' href='#services'>
            <button id='bannerButton' className="flex sm:ml-0 mx-auto bg-white text-banner-buttonBackground hover:text-gray-300 font-bold py-2 px-4 rounded-full w-[248px] h-[66px]">
              <div className='w-fit my-auto text-[18px] font-medium ml-auto'>What we do</div>
              <div className='w-fit my-auto ml-auto'>
                <button type="button" className="text-white bg-banner-buttonBackground hover:bg-gray-300 font-medium rounded-full text-sm p-2.5 text-center sm:translate-x-[7px]">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </button>
              </div>
            </button>
          </a>

        </div>
      </div>
      <div className="wave-container absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
          </defs>
          <g className="parallax">
            {/* <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" /> */}
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Banner
