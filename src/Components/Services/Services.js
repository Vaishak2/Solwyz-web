import React, { useEffect } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';



function Services() {

    useEffect (()=> {
        window.scrollTo(0, 0);
    },[])

    return (

        <div className='Services sm:bg-service-background bg-service-background-mobile bg-cover' id='services'>
            <div className="service_head sm:mr-[100px] sm:ml-[100px] font-urbanist text-white justify-center sm:pr-[50px] sm:pt-[136px] pt-[60px]">
                <div className='sm:text-right sm:font-thin sm:text-[13px] sm:leading-[15.6px] sm:mr-[83px] sm:opacity-60 hidden'>
                    Passionate About Technology, <br /> Committed to Excellence
                </div>
                <div className='sm:flex sm:ml-[300px] '>
                    <div className="sm:hover_btn sm:border-4 sm:border-white-950 sm:w-[252px] sm:h-[83px] rounded-full sm:p-[6px] sm:relative group sm:translate-y-[45px]">
                        <div className="small_btn bg-white sm:w-[117px] sm:h-[63px] rounded-full transition-transform transform translate-x-0 group-hover:translate-x-[115px] duration-1000"></div>
                    </div>
                    <div className=' sm:text-[71px] text-[40px] pt-[48px] text-center sm:justify-center sm:tracking-[5px] sm:ml-[23px] sm:translate-y-[-12px]'>
                        <h1 className='font-semibold'>Unique <span className='font-thin'>ideas</span> </h1>
                    </div>
                </div>
                <div className='sm:text-[88px] text-[30px] text-center sm:ml-[134px] sm:leading-[62px] '>
                    <h1 className='font-bold tracking-[2px]'><span className='font-thin tracking-[2px]'>For your</span> business </h1>
                </div>
                
             
     
                <div className='cards sm:mt-[136px] mt-[50px] pb-[58px]   flex flex-wrap gap-8 lg:w-full justify-center'>
               
                <div className='cards sm: mt-[50px] pb-[58px] lg:ml-[70px] flex flex-wrap gap-8 lg:w-full justify-center'>

                    <Link to='/servicemarketing'> <div className='first_section_card group w-fit'>
                        <div>
                            <div className='animation_section_card border border-white sm:w-[405px] w-[300px] h-[361px] lg:h-[315px] sm:group-hover:text-opacity-100 text-start'>
                                <div className='ml-[20px] mt-[27px]  font-bold text-[22px] leading-[26px]'>
                                    Marketing Services <br /> via Social media
                                </div>
                                <div className='text-[15px] leading-[18px] lg:w-[316px] w-[250px] h-[90px] ml-[20px] mt-[37px] font-thin opacity-[50%] sm:opacity-[10%] duration-500 group-hover:opacity-100 hover:duration-[2s]'>
                                    Whether you are looking to increase brand awareness, generate leads, or drive sales, our team of experts is dedicated to delivering measurable results that exceed your expectations.
                                </div>
                                <button type="button" className="text-banner-buttonBackground bg-white hover:bg-gray-300 font-medium rounded-full text-sm p-2.5 text-center ml-[20px] lg:mt-[37px] mt-[75px] sm:opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    </Link>

                    <Link to='/servicewebsite'> <div className='second_section_card group w-fit'>
                        <div>
                            <div className='animation_section_card border border-white sm:w-[405px] w-[300px] h-[361px] lg:h-[315px] sm:group-hover:text-opacity-100 text-start'>
                                <div className='ml-[20px] mt-[27px] font-bold text-[22px] leading-[26px]'>
                                    Website Engineering & Application Programming
                                </div>
                                <div className='text-[15px] leading-[18px] lg:w-[316px] w-[250px] h-[90px] ml-[20px] mt-[37px] font-thin opacity-[50%] sm:opacity-[10%] duration-500 group-hover:opacity-100'>
                                    Our cutting-edge website development and mobile application programming services are designed to provide you with the most innovative and high-quality websites and apps on the market.
                                </div>
                                <button type="button" className="text-banner-buttonBackground bg-white hover:bg-gray-300 font-medium rounded-full text-sm p-2.5 text-center ml-[20px] lg:mt-[37px] mt-[75px] sm:opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    </Link>

                    <Link to='/serviceenterprise'> <div className='first_section_card group w-fit'>
                        <div>
                            <div className='animation_section_card border border-white sm:w-[405px] w-[300px] h-[361px] lg:h-[315px] sm:group-hover:text-opacity-100 text-start'>
                                <div className='ml-[20px] mt-[27px] font-bold text-[22px] leading-[26px]'>
                                    EnterPrise Resource <br /> Planning
                                </div>
                                <div className='text-[15px] leading-[18px] lg:w-[316px] w-[250px] h-[90px] ml-[20px] mt-[37px] font-thin opacity-[50%] sm:opacity-[10%] duration-500 group-hover:opacity-100'>
                                    Our ERP services are designed to exceed expectations, offering top-notch solutions to streamline business operations and maximize efficiency. With a strong commitment to excellence, we help clients achieve their goals and drive sustainable growth.
                                </div>
                                <button type="button" className="text-banner-buttonBackground bg-white hover:bg-gray-300 font-medium rounded-full text-sm p-2.5 text-center ml-[20px] lg:mt-[37px] mt-[75px] sm:opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    </Link>

                    <Link to='/servicecustomer'> <div className='second_section_card group w-fit'>
                        <div>
                            <div className='animation_section_card border border-white sm:w-[405px] w-[300px] h-[361px] lg:h-[315px] sm:group-hover:text-opacity-100 text-start'>
                                <div className='ml-[20px] mt-[27px] font-bold text-[22px] leading-[26px]'>
                                    Customer Relationship <br /> Management
                                </div>
                                <div className='text-[15px] leading-[18px] lg:w-[316px] w-[250px] h-[90px] ml-[20px] mt-[37px] font-thin opacity-[50%] sm:opacity-[10%] duration-500 group-hover:opacity-100'>
                                    Our customer relationship management system is designed to provide exceptional services that enable clients to establish and nurture strong relationships with their customers. With our system, businesses can effectively drive sales growth and achieve remarkable success.
                                </div>
                                <button type="button" className="text-banner-buttonBackground bg-white hover:bg-gray-300 font-medium rounded-full text-sm p-2.5 text-center ml-[20px] lg:mt-[37px] mt-[75px] sm:opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    </Link>


                </div>
                <div className='cards mt-[-29px] pb-[58px] sm:flex flex-col px-2 sm:ml-[22px] text-left'>
                   
                </div>
            </div>
        </div>
        </div>
    );
}

export default Services;