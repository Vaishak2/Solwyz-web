import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { ReactComponent as AddressIcon } from '../../Assets/Icons/distance.svg';
import { ReactComponent as EmailIcon } from '../../Assets/Icons/drafts.svg';
import { ReactComponent as SolwyzLogo } from '../../Assets/images/Solwyz logo white.svg';
import { ReactComponent as CallIcon } from '../../Assets/Icons/phone-call-svgrepo-com (1).svg';
import { ReactComponent as ArrowIcon } from '../../Assets/Icons/Arrow 1.svg'; // Adjust path to your Arrow icon
import '../Footer/Footer.css'

function Footer() {
    const [emailValue, setEmailValue] = useState('');
    const [emailError, setEmailError] = useState('');

    const subscribe = (event) => {
        event.preventDefault();

        // Validate email format
        const isValidEmail = validateEmail(emailValue);

        if (isValidEmail) {
            // Handle subscription logic
            console.log('Subscribed with email:', emailValue);

            // Clear email input
            setEmailValue('');

            // Show success message
            showSuccessToast();
        } else {
            // Show error message
            setEmailError('Please enter a valid email address.');
        }
    };

    const validateEmail = (email) => {
        // Email validation regex pattern
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const showSuccessToast = () => {
        Swal.fire({
            icon: 'success',
            title: 'Thank you for subscribing.',
            showConfirmButton: false,
            timer: 2300
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='main_footer_container bg-Footer_BackDrop bg-cover text-white h-auto text-left relative pb-10'>
            <div className='sm:flex justify-around sm:pt-[105px] pt-[52px] sm:mb-[118px] mb-3 ml-[10px]'>
                <div className='widen text-[16px]'>
                    <Link to='/'>
                        <SolwyzLogo className='w-[100px] h-auto text-white' /></Link>
                    <div className='opacity-[50%]'>
                        Widen the horizon of <br /> Your Business with Solwyz!
                    </div>
                </div>
                <div className='about_div lg:mt-0 mt-[48px] flex sm:text-[20px] text-[16px] text-gray-400 sm:leading-[28px] leading-[19px] font-semibold space-x-[90px] ml-[10px]'>
                    <ul className='space-y-[10px]'>
                        <li className='hover:scale-110 hover:text-white'><Link to='/' className="text-white">Home</Link></li>
                        <li className='hover:scale-110 hover:text-white'><Link to='/aboutdetails' className="text-white">About Us</Link></li>
                        <li className='hover:scale-110 hover:text-white'><Link to='/blogs' className="text-white">Blogs</Link></li>
                        <li className='hover:scale-110 hover:text-white'><Link to='/services' className="text-white">Services</Link></li>
                        <li className='hover:scale-110 hover:text-white'><Link to='/contactus' className="text-white">Contact Us</Link></li>
                    </ul>
                </div>

                {/* <div className='ml-[10px]'>
                    <h1 className='text-[18px] opacity-[50%]'>Subscribe our newsletter</h1>
                    <div className="flex justify-around bg-white bg-opacity-[50%] hover:bg-white duration-500 text-white hover:text-black font-bold rounded-full w-[289px] h-[55px] mt-[9px] mb-[9px] relative">
                        <div className='w-full my-auto text-[15px] font-medium ml-[10px]'>
                            <input
                                className='bg-transparent text-black placeholder-gray-300 focus:outline-none focus:ring-0 px-4 py-2 rounded-full w-full'
                                id='form_input'
                                type="email"
                                value={emailValue}
                                onChange={(e) => {
                                    setEmailValue(e.target.value);
                                    setEmailError('');
                                }}
                                placeholder='Enter your mail'
                                style={{ caretColor: 'black' }} // Ensure caret color is set
                            />
                            {emailError && <p className="text-red-500 text-xs mt-1 ml-1 absolute bottom-1 left-4">{emailError}</p>}
                        </div>
                        <div className='absolute right-0 top-0 bottom-0 flex items-center'>
                            <button type="button" onClick={subscribe} className="text-white bg-banner-buttonBackground hover:bg-gray-300 font-medium rounded-full text-sm w-[50px] h-[50px] translate-x-[-4px] flex justify-center items-center">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <h1 className='text-[13px] opacity-[50%] mt-2'>* Will send you weekly updates for your better <br /> tool management.</h1>
                </div> */}

            </div>

            <div className='sub_div ml-[10px]'>
                <div className='sm:flex justify-around'>
                    <div className='connect sm:pt-[86px] pt-[10px] ml-[10px] mt-[30px]'>
                        <h1 className='text-start text-[16px] mb-[17px] opacity-[50%] font-thin'>Connect with Us</h1>
                        <div className='icon flex justify-around gap-[30px] w-[159px] h-[20px] text-[20px]'>
                            <a href='https://www.facebook.com/people/Solwyz-Technologies/61559030405055/'><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href='https://wa.me/'><FontAwesomeIcon icon={faWhatsapp} /></a>
                            <a href='https://www.instagram.com/solwyz_technologies?igsh=MWlpcDAwa2RwMHAwMA%3D%3D&utm_source=qr'><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href='https://www.linkedin.com/in/solwyz-technologies-205930304/'><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                    <div className='sm:pt-[156px] opacity-[50%] font-thin text-[14px] sm:visible invisible'>
                        Copyright 2024 - All rights reserved
                    </div>
                    <div className='ml-[10px] mt-[30px]'>
                        <h1 className='text-[23px] leading-[27px] tracking-[3%] mb-[13px] font-semibold flex items-center'>
                            Address
                        </h1>
                        <div className='flex text-[14px] leading-[24px] '><AddressIcon className='w-[32px] h-[32px] mr-[8px]' />
                            <div className='opacity-[50%]'>

                                2nd floor, Asiatic Business Centre,<br />
                                NH Bypass, Near Technopark phase-1,<br />
                                Kazhakkoottam, Thiruvananthapuram
                            </div>
                        </div>
                        <div className='flex items-center mt-[10px]'>
                            <EmailIcon className='w-[24px] h-[24px] mr-[8px]' />
                            <h1 className='leading-[21px]'>connect@solwyz.com</h1>
                        </div>
                        <div className='flex items-center mt-[10px]'>
                            <CallIcon className='w-[24px] h-[24px] mr-[8px]' />
                            <h1 className='leading-[21px]'>+91 9778422854 , 9778699266</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='opacity-[50%] font-thin text-[14px] sm:invisible visible text-center'>
                Copyright 2024 - All rights reserved
            </div>
        </div>
    );
}

export default Footer;
