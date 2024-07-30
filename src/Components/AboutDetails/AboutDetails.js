import React, { useEffect } from 'react'
import About_Detail_Image from "../../Assets/images/Frame 1000001810 1.png";
import About_Detail_Image2 from "../../Assets/images/aboutImg2.jpg"
import { Link } from 'react-router-dom';

function About_Detail_Page() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div>

      <div className='sm:text-[16px] text-[10px] font-urbanist font-medium justify-center text-center pt-[100px] '>

       <Link to='/'> <span className='text-gray-400'>HOMEPAGE / </span> </Link><span>ABOUT</span>


      </div>
      <div className='sm:flex sm:justify-center sm:w-full sm:h-full'>
        <div className="sm:flex sm:justify-center sm:w-[80%] sm:h-screen sm:pt-[141px] pt-[25px] sm:pb-[140px] sm:my-0 p-0">
          <div className="sm:flex-1 sm:justify-center sm:text-justify sm:mr-[84px] sm:my-0 font-urbanist sm:translate-y-[-72px]">
            <div className='sm:pt-1 sm:mt-0 text-start mx-[16px]'>
              <h1 className='font-semibold sm:text-[81px] text-[40px]'>Who we</h1>
              <h1 className='font-thin sm:text-[81px] text-[30px] sm:translate-y-[-2.25rem] '>are?</h1>
            </div>
            <div  >
            <img src={About_Detail_Image}
              alt="About image"
              className=' sm:hidden block sm:w-[484px] sm:h-[431px] sm:border-l-4  sm:font-sans sm:font-bold border-black border-opacity-[23%] sm:mt-[156px] p-[12px]'
            />

          </div>
            <div className='sm:py-[31px] sm:text-[17px] opacity-[70%] font-medium sm:translate-y-[-114px] sm:mt-[73px] p-[16px] text-justify'>
              <p className='py-4'

              >Solwyz Technologies is a modern technology solution provider
                founded on values of sustainability, scalability, and sophistication. Solwyz can get your business its most deserved technical perfection by offering cutting edge web, desktop, and mobile applications which can ease out the extra efforts of your business team. Be it sales, service, or product, </p>
              <p>
                Solwyz can perfect it with its superior tech solutions developed by world-class software engineers and tech experts in its state-of-the-art development centers across multiple geo locations. Our happy clients across a multitude of industries such as hospitality, healthcare, transportation, aviation, F&B chains, logistics, and retail, no matter what industry your business operates in, Solwyz can serve you with a solution tailor-made for you </p>
            </div>
          </div>
          <div  >
            <img src={About_Detail_Image}
              alt="About image"
              className='hidden sm:block sm:w-[484px] sm:h-[431px]   sm:font-sans sm:font-bold border-black border-opacity-[23%] sm:translate-y-[-35px] sm:mt-[156px] p-[12px]'
            />

          </div>
        </div>


      </div>
      <div className='sm:flex sm:justify-center sm:w-full sm:h-full'>
        <div className="sm:flex sm:justify-center sm:w-[80%] sm:h-[73vh] sm:pt-[141px] sm:my-0 p-0">
          <div  >
            <img src={About_Detail_Image2}
              alt="About image"
              className=' sm:w-[593px] sm:h-[428px] sm:translate-y-[-129px]   sm:font-sans sm:font-bold border-black sm:border-opacity-[23%] p-[12px] '
            />

          </div>
          <div className="sm:flex-1 sm:justify-center sm:ml-[6px] sm:my-0 sm:font-urbanist sm:text-justify p-[16px] ">

            <div className='sm:py-[31px] sm:text-[17px] opacity-[70%] font-medium sm:mt-0 sm:translate-y-[-155px] text-justify'>
              <p className='sm:py-4'

              >With our centralized approach, you can streamline your operations and eliminate the need for multiple service providers. Our goal is to provide a one-stop solution for all your business needs, saving you time, effort, and resources. By offering innovative solutions, we help you stay ahead of the competition and adapt to the ever-changing business landscape. </p>
              <p>
                Our team of experts is dedicated to understanding your business goals and tailoring our solutions to meet your specific needs. Whether you are looking to enhance your online presence, optimize your internal processes, or improve customer relationship management, we have the expertise and experience to deliver the right solutions for your business. Trust us to provide you with the tools and support you need to succeed in today's competitive market. </p>
            </div>
          </div>

        </div>


      </div>

    </div>

  );
}



export default About_Detail_Page