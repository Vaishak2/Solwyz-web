import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Close } from '../../Assets/Icons/close.svg';
import logo from '../../Assets/images/new solwyz logo.png'
import BurgerIcon from '../../Assets/Icons/BurgerIcon.svg';
import getInTouchBtn from "../../Assets/Icons/Frame 1000001805.svg"
import Download from "../../Assets/Icons/download.png"



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="bg-white md:px-auto fixed lg:h-[100px] h-[60px] w-full z-50 start-0 font-urbanist">
      <div className="sm:pl-[72px] sm:pr-[40px] px-4 w-full text-white md:order-1 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse sm:mt-0 lg:pt-0 pt-3"
          >
            <img
              src={logo}
              className="lg:h-[60px] lg:w-[110px] w-[75px] h-[40px] sm:w-[130px] sm:h-[54px]  "
              alt="Flowbite Logo"
            />
          </Link>
        </div>
        <div className="large-screen hidden  sm:w-[351px] sm:h-[26px] sm:flex sm:text-black justify-between
         sm:text-[16px] sm:leading-4 sm:font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'font-semibold underline' : 'font-normal'
            }
            style={({ isActive }) =>
              isActive ? { textUnderlineOffset: '8px' } : {}
            }
            onClick={() => setActive('Home')}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutdetails"
            className={({ isActive }) =>
              isActive ? 'font-semibold underline' : 'font-normal'
            }
            style={({ isActive }) =>
              isActive ? { textUnderlineOffset: '8px' } : {}
            }
            onClick={() => setActive('About')}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'font-semibold underline' : 'font-normal'
            }
            style={({ isActive }) =>
              isActive ? { textUnderlineOffset: '8px' } : {}
            }
            onClick={() => setActive('Service')}
          >
            Service
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? 'font-semibold underline' : 'font-normal'
            }
            style={({ isActive }) =>
              isActive ? { textUnderlineOffset: '8px' } : {}
            }
            onClick={() => setActive('Blog')}
          >
            Blog
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? 'font-semibold underline' : 'font-normal'
            }
            style={({ isActive }) =>
              isActive ? { textUnderlineOffset: '8px' } : {}
            }
            onClick={() => setActive('Careers')}
          >
            Careers
          </NavLink>
        </div>

        <div className='flex items-center justify-center'>
          <div className='hidden sm:block'>
            <div className='flex'>
              <a href="/solwyz corporate revised.pdf" download="solwyz corporate revised.pdf" className='sm:w-[125px] sm:h-[40px] bg-[#03434F] rounded-lg pl-4 flex pt-2 pr-4 justify-between no-underline text-white'>
                <span>Brochure</span>
                <img className='sm:mt-1 sm:ml-2 sm:w-4 sm:h-4' src={Download} alt="Download icon" />
              </a>
            </div>
          </div>

          <Link to='contactus'>
            <button id='bannerButton' className="sm:flex hidden sm:block border border-black text-black hover:text-gray-300 font-bold py-2 px-4 rounded-full sm:ml-8  w-[178px] h-[48px] sm:translate-y-[-28px]">
              <div className=' my-auto text-[16px]  font-medium'>Get in Touch</div>

              <img className='translate-x-[30px]' src={getInTouchBtn} alt="" />

            </button>
          </Link>
        </div>
        <div
          className="sm:hidden block mt-2 cursor-pointer"
          onClick={toggleNavbar}
        >
          {!isOpen && <img src={BurgerIcon} alt="Menu" />}
          {isOpen && (
            <Close className="h-[40px] w-[40px] hover:rotate-90 transition-transform duration-500" />
          )}
        </div>
      </div>
      {isOpen ? (
        <div
          className={`h-svh w-full bg-white text-gray-500 flex justify-start ${isOpen ? 'translate-x-0' : '-translate-y-full'
            } transition duration-1000 ease-out`}
        >
          <div className="modal">
            <div
              className="sm:px-36 px-8 h-2/4 w-full flex flex-col justify-evenly items-start text-3xl"
              onClick={toggleNavbar}
            >
              <NavLink
                to="/"
                activeClassName="active"
                style={({ isActive }) => ({
                  color: isActive ? '#007F97' : 'inherit',
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/aboutdetails"
                activeClassName="active"
                style={({ isActive }) => ({
                  color: isActive ? '#007F97' : 'inherit',
                })}
              >
                About Us
              </NavLink>
              <NavLink
                to="/blogs"
                activeClassName="active"
                style={({ isActive }) => ({
                  color: isActive ? '#007F97' : 'inherit',
                })}
              >
                Blog
              </NavLink>
              <NavLink
                to="/services"
                activeClassName="active"
                style={({ isActive }) => ({
                  color: isActive ? '#007F97' : 'inherit',
                })}
              >
                Services
              </NavLink>
              <NavLink
                to="/contactus"
                activeClassName="active"
                style={({ isActive }) => ({
                  color: isActive ? '#007F97' : 'inherit',
                })}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/careers"
                activeClassName="active"
                style={({ isActive }) => ({
                  color: isActive ? '#007F97' : 'inherit',
                })}
              >
                Careers
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

    </div>
  );
}

export default Navbar;
