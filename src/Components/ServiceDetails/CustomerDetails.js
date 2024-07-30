import React, { useEffect } from 'react'
import customer_img1 from '../../Assets/images/MyApril10 1.png'
import customer_img2 from '../../Assets/images/2002.i039 1.png'
import { Link } from 'react-router-dom'

function Customer_deatil() {

    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);

  return (
    
      
    <div>
            <div className='sm:text-[16px] text-[10px] font-urbanist font-medium justify-center text-center sm:pt-[153px] pt-[100px] mx-auto sm:mb-[88px] mb-[24px] '>
            <Link to='/'><span className='text-gray-400'>HOMEPAGE /  </span></Link> <Link to='/services'><span className='text-gray-400'>SERVICES /</span></Link> <br /> <span>CUSTOMER RELATIONSHIP MANAGEMENT</span>
            </div>
            <div className='sm:flex sm:justify-center sm:w-full sm:h-full mx-[16px]'>
                <div className="sm:flex sm:justify-center sm:w-[80%] sm:h-[80vh]  sm:my-0 p-0">
                    <div className="sm:flex-1 sm:justify-center sm:text-justify sm:mr-[84px] sm:my-0 font-urbanist sm:translate-y-[-72px] text-justify">
                        <div className='sm:pt-1 sm:mt-0 '>
                            <h1 className='font-semibold sm:text-[55px] text-[32px]'>Customer Relationship </h1>
                            <h1 className='font-thin sm:text-[60px] text-[30px] tracking-normal sm:mt-[-3px] '>Management </h1>
                        </div>
                        <div className='sm:hidden block' >
                        <img src={customer_img1}
                            alt="About image"
                            className=' sm:w-[314px] sm:h-[314px]   sm:font-sans sm:font-bold sm:mt-[156px] p-[12px]'
                        />

                    </div>
                        <div className='sm:py-[31px] sm:text-[17px] opacity-[60%] sm:translate-y-[-3.25rem] sm:mt-[103px]'>
                            <p className=''

                            >Our customer relationship management system is designed to provide the best services to businesses of all sizes. With our system, clients can easily build strong relationships with their customers, ensuring long-term loyalty and satisfaction. By centralizing customer data and interactions, our CRM system allows businesses to have a comprehensive view of their customers, enabling them to personalize their marketing efforts and provide exceptional customer service.</p>

                        </div>
                    </div>
                    <div className='hidden sm:block' >
                        <img src={customer_img1}
                            alt="About image"
                            className=' sm:w-[574px] sm:h-[382px]   sm:font-sans sm:font-bold sm:mt-[56px] p-[12px]'
                        />

                    </div>
                </div>


            </div>
            <div className='sm:flex sm:justify-center sm:w-full sm:h-full mx-auto sm:mt-[-120px]'>
                <div className="sm:flex sm:justify-center sm:w-[80%] sm:h-[69vh] sm:my-0 p-0">
                    <div  >
                        <img src={customer_img2}
                            alt="About image"
                            className=' sm:w-[383px] sm:h-[319px] w-[291px] h-[243px] mx-auto  sm:font-sans sm:font-bold p-[12px] '
                        />

                    </div>
                    <div className="sm:flex-1 sm:justify-center sm:ml-[84px]  sm:font-urbanist sm:text-justify p-[16px] text-justify opacity-[60%] ">

                        <div className=' sm:text-[17px] opacity-[70%] sm:mt-[100px] '>

                            <p>
                                
One of the key features of our CRM system is its ability to drive sales growth. By analyzing customer data and behavior, businesses can identify potential leads and target them with personalized marketing campaigns. Our system also provides sales teams with valuable insights and analytics, allowing them to prioritize leads, track sales performance, and forecast future sales. With our CRM system, businesses can streamline their sales processes, increase efficiency, and ultimately boost revenue.
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

export default Customer_deatil