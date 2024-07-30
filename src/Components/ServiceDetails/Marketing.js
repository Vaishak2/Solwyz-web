import React, { useEffect } from 'react'
import market_image from '../../Assets/images/social 1.png'
import market_img2 from '../../Assets/images/5149654 1.png'
import { Link } from 'react-router-dom';


function Marketing() {

    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);

    return (


        <div>
            <div className='sm:text-[16px] text-[10px] font-urbanist font-medium justify-center text-center sm:pt-[153px] pt-[100px] mx-auto '>
            <Link to='/'><span className='text-gray-400'>HOMEPAGE / </span> <Link to='/services'><span className='text-gray-400'>SERVICES / </span></Link> </Link> <span>MARKETING</span>
            </div>
            <div className='sm:flex sm:justify-center sm:w-full sm:h-full mx-[16px]'>
                <div className="sm:flex sm:justify-center sm:w-[80%] sm:h-screen sm:pt-[85px] pt-[30px] sm:pb-[140px] sm:my-0 p-0">
                    <div className="sm:flex-1 sm:justify-center sm:text-justify sm:mr-[84px] sm:my-0 font-urbanist sm:translate-y-[-72px] text-justify">
                        <div className='sm:pt-1 sm:mt-0 '>
                            <h1 className='font-semibold sm:text-[72px] text-[32px]'>Marketing Services </h1>
                            <h1 className='font-thin sm:text-[60px] text-[30px] sm:translate-y-[-2.25rem] '>via social media </h1>
                        </div>
                        <div className='sm:hidden block' >
                        <img src={market_img2}
                            alt="About image"
                            className=' sm:w-[314px] sm:h-[314px]   sm:font-sans sm:font-bold sm:mt-[156px] p-[12px]'
                        />

                    </div>
                        <div className='sm:py-[31px] sm:text-[17px] opacity-[70%] font-medium sm:translate-y-[-3.25rem] sm:mt-[80px]'>
                            <p className=''

                            >Our online marketing services are designed to help your business thrive in the digital world. With a focus on social media and other online channels, we provide the best strategies and techniques to drive exceptional results for your business growth. Our team of experts understands the ever-changing landscape of online marketing and stays up-to-date with the latest trends and algorithms to ensure your business stays ahead of the competition.When you choose our services, you can trust us to deliver the best online marketing solutions tailored to your business needs. We start by conducting a thorough analysis of your target audience, industry, and competitors to develop a comprehensive marketing strategy. Our team then implements this strategy across various social media platforms and online channels, ensuring maximum visibility and engagement for your brand.. </p>

                        </div>
                    </div>
                    <div className='hidden sm:block' >
                        <img src={market_img2}
                            alt="About image"
                            className=' sm:w-[484px] sm:h-[431px]   sm:font-sans sm:font-bold sm:mt-[134px] p-[12px]'
                        />

                    </div>
                </div>


            </div>
            <div className='sm:flex sm:justify-center sm:w-full sm:h-full mx-auto sm:mt-[-120px]'>
                <div className="sm:flex sm:justify-center sm:w-[80%] sm:h-screen sm:pt-[100px] sm:pb-[140px] sm:my-0 p-0">
                    <div  >
                        <img src={market_image}
                            alt="About image"
                            className=' sm:w-[383px] sm:h-[319px] w-[291px] h-[243px] mx-auto  sm:font-sans sm:font-bold p-[12px] '
                        />

                    </div>
                    <div className="sm:flex-1 sm:justify-center sm:ml-[84px]  sm:font-urbanist sm:text-justify p-[16px] text-justify opacity-[70%] font-medium ">

                        <div className=' sm:text-[17px] sm:mt-[100px] '>

                            <p>
                                Our team of experts is dedicated to understanding your business goals and tailoring our solutions to meet your specific needs. Whether you are looking to enhance your online presence, optimize your internal processes, or improve customer relationship management, we have the expertise and experience to deliver the right solutions for your business. Trust us to provide you with the tools and support you need to succeed in today's competitive market. </p>
                        </div>
                    </div>

                </div>


            </div>
            <div className='sm:w-[944px] sm:h-[432px] mx-[16px] sm:mx-auto bg-[#F7F7F7] sm:mb-[72px] sm:mt-[-116px]  mb-[109px]'>
                <div className='sm:w-[712px] sm:h-[312px] py-[40px] mx-auto '>
                    <h1 className='sm:text-[72px] text-[30px] font-semibold tracking-[3%] sm:tracking-tight text-center sm:pt-[60px] leading-[42px] sm:leading-[100px]'>Lets quote a <span className='font-light'> business </span>
                        <span className='font-thin '>today </span></h1>
                    <Link to='/contactus'>
                    <button id='bannerButton' className="sm:flex flex sm:justify-around justify-center sm:m-auto bg-banner-buttonBackground text-white hover:text-gray-300 font-bold py-2 px-4 rounded-full sm:w-[261px] w-[223px] sm:h-[56px] h-[48px] sm:mt-[76px] mb-[24px] mx-auto">
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

    );
}




export default Marketing