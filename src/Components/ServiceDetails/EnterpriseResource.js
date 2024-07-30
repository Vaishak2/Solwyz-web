import React, { useEffect } from 'react'
import enter_img1 from '../../Assets/images/5031659 2.png'
import enter_img2 from '../../Assets/images/7040910 1.png'
import { Link } from 'react-router-dom'

function EnterpriseResource() {

    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);

  return (
   
    <div>
            <div className='sm:text-[16px] text-[10px] font-urbanist font-medium justify-center text-center sm:pt-[153px] pt-[100px] mx-auto '>
            <Link to='/'><span className='text-gray-400'>HOMEPAGE / </span></Link> <Link to='/services'><span className='text-gray-400'>SERVICES / </span></Link> <span>ENTERPRISE RESOURCE PLANNING</span>
            </div>
            <div className='sm:flex sm:justify-center sm:w-full sm:h-full mx-[16px]'>
                <div className="sm:flex sm:justify-center sm:w-[80%] sm:h-screen sm:pt-[141px] pt-[30px] sm:pb-[140px] sm:my-0 p-0">
                    <div className="sm:flex-1 sm:justify-center sm:text-justify sm:mr-[84px] sm:my-0 font-urbanist sm:translate-y-[-72px] text-justify">
                        <div className='sm:pt-1 sm:mt-0 '>
                            <h1 className='font-semibold sm:text-[72px] sm:mb-[15px] text-[32px]'>Enterprise Resource  </h1>
                            <h1 className='font-thin sm:text-[72px] tracking-normal text-[30px] sm:translate-y-[-2.25rem] '>Planning </h1>
                        </div>
                        <div className='sm:hidden block' >
                        <img src={enter_img1}
                            alt="About image"
                            className=' sm:w-[314px] sm:h-[314px]   sm:font-sans sm:font-bold sm:mt-[156px] p-[12px]'
                        />

                    </div>
                        <div className='sm:py-[31px] sm:text-[17px] opacity-[60%] sm:translate-y-[-3.25rem] sm:mt-[51px]'>
                            <p className=''

                            >Our ERP services are designed to meet the needs of businesses looking to optimize their operations and achieve their objectives. With our commitment to excellence, we strive to provide up-to-the-mark solutions that drive growth and help our clients stay ahead in today's competitive market.

Our team of experienced professionals understands the unique challenges faced by businesses in various industries. We work closely with our clients to analyze their current processes and identify areas for improvement. By implementing our ERP solutions, businesses can streamline their operations, automate manual tasks, and enhance overall efficiency.
</p>

                        </div>
                    </div>
                    <div className='hidden sm:block' >
                        <img src={enter_img1}
                            alt="About image"
                            className=' sm:w-[484px] sm:h-[431px]   sm:font-sans sm:font-bold sm:mt-[60px] p-[12px]'
                        />

                    </div>
                </div>


            </div>
            <div className='sm:flex sm:justify-center sm:w-full sm:h-full mx-auto sm:mt-[-120px]'>
                <div className="sm:flex sm:justify-center sm:w-[80%] sm:h-screen sm:pt-[141px] sm:pb-[140px] sm:my-0 p-0">
                    <div  >
                        <img src={enter_img2}
                            alt="About image"
                            className=' sm:w-[467px] sm:h-[467px] w-[291px] h-[243px] mx-auto  sm:font-sans sm:font-bold p-[12px] sm:mt-[-33px] '
                        />

                    </div>
                    <div className="sm:flex-1 sm:justify-center sm:ml-[84px]  sm:font-urbanist sm:text-justify p-[16px] text-justify opacity-[60%] ">

                        <div className=' sm:text-[17px] opacity-[70%] sm:mt-[61px] '>

                            <p>
                            Our ERP services offer a range of features and functionalities that cater to the specific requirements of each client. From inventory management and supply chain optimization to financial management and customer relationship management, our solutions cover all aspects of a business's operations. With real-time data analytics and reporting capabilities, our clients gain valuable insights into their business performance, enabling them to make informed decisions and drive growth.

In conclusion, our commitment to providing up-to-the-mark ERP services sets us apart from the competition. With our expertise and tailored solutions, businesses can optimize their operations, drive growth, and achieve their objectives. Whether it's streamlining processes, automating tasks, or gaining valuable insights, our ERP services are designed to help businesses stay competitive in today's dynamic market.
</p>
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



  )
}

export default EnterpriseResource