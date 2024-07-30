import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutImage from "../../Assets/images/about image.png";
import "./AboutUs.css";
import { Link } from 'react-router-dom';

function AboutUs() {
  const [firstRender, setFirstRender] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setFirstRender(false);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<div>

<div id='aboutUs' className={`sm:flex justify-center sm:w-full sm:h-full ${firstRender ? 'first-render' : ''} `}>
      <div className="sm:flex justify-center sm:mx-[149px] sm:h-screen  sm:mt-[136px] p-0">
        <div className="sm:flex-1 sm:justify-center sm:text-start sm:mr-[40px] font-urbanist">
          <div className={`text-start ml-[16px] mt-[33px] sm:mt-0 sm:mb-[24px] ${scrollY > 0 ? 'scroll-animate' : ''}`}>
            <h1 className='font-semibold sm:text-[81px] text-[40px] sm:translate-y-[59px]'>Who we</h1>
            <h1 className='font-thin sm:text-[81px] text-[30px]  text-[#9c9a9a] sm:translate-y-[24px]'>are?</h1>
          </div>
          <div className='m-[10px] pb-[48px] sm:hidden block'>
            <img src={AboutImage} alt="About image" className='about sm:w-[484px] sm:h-[431px] sm:hidden block' />
          </div>
          <motion.div
            className={`sm:text-[16px] sm:leading-[21px] text-[#AEAEAE]   leading-[28px] sm:mt-0 sm:tracking-tighter font-medium  text-justify ${scrollY > 0 ? 'scroll-animate' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.p className='mx-[10px] '>
              Solwyz Technologies is a modern technology solution provider founded on values of sustainability, scalability, and sophistication. Solwyz can get your business its most deserved technical perfection by offering cutting edge web, desktop, and mobile applications which can ease out the extra efforts of your business team. Be it sales, service, or product,
            </motion.p>
            <motion.p className='sm:mt-[35px] mt-[25px] mx-[10px] ' 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              viewport={{ once: false, amount: 0.5 }}
              >
              Solwyz can perfect it with its superior tech solutions developed by world-class software engineers and tech experts in its state-of-the-art development centers across multiple geo locations. Our happy clients across a multitude of industries such as hospitality, healthcare, transportation, aviation, F&B chains, logistics, and retail, no matter what industry your business operates in, Solwyz can serve you with a solution tailor-made for you
            </motion.p>
            <Link to='/aboutdetails'>
            <motion.button  className="sm:flex flex sm:justify-around mx-auto sm:ml-0 mb-[36px] mt-[24px] justify-center bg-banner-buttonBackground text-white hover:text-gray-300 font-bold py-2 px-4 rounded-full sm:w-[248px] w-[165px] sm:h-[66px] h-[48px]  sm:mt-[24px] "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              viewport={{ once: false, amount: 0.5 }}
              >
                    <div className='w-fit my-auto sm:text-[18px] text-[16px] font-medium '>Know More</div>
                    <div className='w-fit my-auto '>
                        
                        <button type="button" className="text-banner-buttonBackground  bg-white hover:bg-gray-300 font-medium rounded-full text-sm p-2.5 text-center sm:translate-y-0 translate-y-[-4px]  translate-x-[18px] sm:translate-x-[29px]">
                            <svg className="sm:w-7 w-[21px] sm:h-7 h-[20px]" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </motion.button>
                </Link>
          </motion.div>
        </div>
        
        <div className='m-[10px] sm:mt-[132px]'>
          <img src={AboutImage} alt="About image" className='about sm:w-[484px] sm:h-[431px] hidden sm:block sm:translate-y-[25px]' />
        </div>
      </div>
        
    </div>

    </div>
  );
}

export default AboutUs;
