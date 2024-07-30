import React, { useEffect } from 'react'
import webEng_img1 from '../../Assets/images/4421964 1.png'
import webEng_img2 from '../../Assets/images/4380747 1.png'
import { Link } from 'react-router-dom'

function WebsiteEngineering() {

    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);

  return (
    <div>
            <div className='sm:text-[16px] text-[10px] font-urbanist font-medium justify-center text-center sm:pt-[153px] pt-[100px] mx-auto '>
            <Link to='/'><span className='text-gray-400'>HOMEPAGE / </span></Link>   <Link to='/services'><span className='text-gray-400'>SERVICES / </span></Link> <span>WEBSITE ENGINEERING</span>
            </div>
            <div className='sm:flex sm:justify-center sm:w-full sm:h-full mx-[16px] mt-[24px]'>
                <div className="sm:flex sm:justify-center sm:w-[80%] sm:h-[95vh]  sm:pb-[95px] sm:my-0 p-0">
                    <div className="sm:flex-1 sm:justify-center sm:text-justify sm:mr-[84px] sm:my-0 font-urbanist text-justify">
                        <div className='sm:pt-1 sm:mt-0 sm:mb-[80px]  '>
                            <h1 className='font-semibold sm:text-[60px] text-[32px] sm:leading-[86px] sm:tracking-wide'>Website Engineering &</h1>
                            <h1 className='font-thin sm:text-[55px] text-[30px] sm:tracking-tight '>Application Programming </h1>
                        </div>
                        <div className='sm:hidden block' >
                        <img src={webEng_img1}
                            alt="About image"
                            className=' sm:w-[314px] sm:h-[314px]   sm:font-sans sm:font-bold sm:mt-[156px] p-[12px]'
                        />

                    </div>
                        <div className='sm:py-[31px] sm:text-[17px] opacity-[70%] font-medium  '>
                            <p className=''

                            >
Our innovative website development and mobile application programming services are designed to help you create the best websites and apps for your business. With our expertise and cutting-edge technology, we can transform your ideas into functional and visually appealing digital platforms that will engage your target audience and drive your business growth.

Our team of skilled developers and designers are well-versed in the latest web development and mobile application programming techniques. We stay up-to-date with the ever-evolving digital landscape to ensure that your websites and apps are built using the most advanced tools and frameworks. Whether you need a responsive website that adapts seamlessly to different devices or a feature-rich mobile app that enhances user experience, we have the expertise to deliver exceptional results.

</p>

                        </div>
                    </div>
                    <div className='hidden sm:block' >
                        <img src={webEng_img1}
                            alt="About image"
                            className=' sm:w-[484px] sm:h-[431px]   sm:font-sans sm:font-bold sm:mt-[156px] p-[12px]'
                        />

                    </div>
                </div>


            </div>
            <div className='sm:flex sm:justify-center sm:w-full sm:h-full mx-auto'>
                <div className="sm:flex sm:justify-center sm:w-[80%] sm:h-screen   sm:my-0 p-0">
                    <div  >
                        <img src={webEng_img2}
                            alt="About image"
                            className=' sm:w-[383px] sm:h-[319px] w-[291px] h-[243px] mx-auto  sm:font-sans sm:font-bold  '
                        />

                    </div>
                    <div className="sm:flex-1 sm:justify-center sm:ml-[84px]  sm:font-urbanist sm:text-justify  text-justify opacity-[70%] ">

                        <div className=' sm:text-[17px] sm:mt-[100px] mx-[16px] '>

                            <p>
                            
When you choose our website development and mobile application programming services, you can expect a collaborative approach that puts your business goals at the forefront. We take the time to understand your unique requirements and tailor our solutions to meet your specific needs. From conceptualization to deployment, we work closely with you to ensure that every aspect of your website or app aligns with your brand identity and delivers a seamless user experience. With our attention to detail and commitment to excellence, we strive to exceed your expectations and help you achieve online success.
</p>
                        </div>
                    </div>

                </div>


            </div>
            <div className='sm:w-[944px] sm:h-[432px] mx-[16px] sm:mx-auto bg-[#F7F7F7] sm:mb-[72px] sm:mt-[-224px] mt-[10px]  mb-[109px]'>
                <div className='sm:w-[712px] sm:h-[312px] py-[40px] mx-auto '>
                    <h1 className='sm:text-[72px] text-[30px] font-semibold tracking-[3%] sm:tracking-tight text-center  leading-[42px] sm:leading-[100px]'>Lets quote a <span className='font-light'> business </span>
                        <span className='font-thin '>today </span></h1>

                <Link to='/contactus'>    <button id='bannerButton' className="sm:flex flex sm:justify-around justify-center sm:m-auto bg-banner-buttonBackground text-white hover:text-gray-300 font-bold py-2 px-4 rounded-full sm:w-[261px] w-[223px] sm:h-[56px] h-[48px] sm:mt-[76px] mb-[24px] mx-auto">
                        <div className='w-fit my-auto sm:text-[18px] text-[14px] font-medium ml-auto'>Get an estiamte</div>
                        <div className='w-fit my-auto ml-auto'>
                            <button type="button" className="text-banner-buttonBackground bg-white hover:bg-gray-300 font-medium rounded-full text-sm p-2.5 text-center sm:translate-y-[-4px] translate-y-[-4px] translate-x-[10px]">
                                <svg className="sm:w-7 w-[21px] sm:h-7 h-[20px]" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                            
                        </div>
                    </button>
                    </Link>
                </div>

            </div>

        </div>
  )
}

export default WebsiteEngineering