import React from 'react'
import logo from '../../Assets/images/Solwyz logo green.png'
import AppsMenu from '../ToggleMenu/ToggleMenu'
import { Link } from 'react-router-dom'

function Header() {
  return (
    // <nav class="bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 start-0  dark:border-gray-600">
    //   <div class=" flex flex-wrap items-center justify-between mx-auto p-4 h-[60px] w-[1334px] mt-[79px] ">
    //     <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
    //       <img src={logo} class="h-[60px] w-[110px]" alt="Flowbite Logo"></img>
    //     </a>

    //     <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    //       <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
    //         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
    //         </svg>
    //       </button>
    //     </div>

    //   </div>
    // </nav>

    <nav class="bg-white px-8 md:px-auto fixed  w-full z-20  start-0" >
      <div class="sm:h-24 h-32 sm:w-[1334px]  mx-auto md:px-4  container flex items-center justify-between flex-wrap md:flex-nowrap">

        <div class="text-white md:order-1">

          <Link to='/' class="flex items-center space-x-3 rtl:space-x-reverse sm:mt-6">
            <img src={logo} class="h-[60px] w-[110px]" alt="Flowbite Logo"></img>
          </Link>
        </div>

        <div className="order-3">

          
          <AppsMenu/>

          {/* <button class="px-4 py-2  text-white rounded-xl hover:bg-gray-100 flex items-center gap-2">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button> */}
        </div>
      </div>
    </nav>
  )
}

export default Header
