import React, { useEffect } from 'react'
import ApplyArrow from "../../Assets/Icons/Group 3888.svg"
import { Link } from 'react-router-dom';

function CareerDetails() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='sm:h-[100px] h-4'></div>
      <div className='bg-Career-Details-Banner h-[200px] sm:h-[375px] bg-cover text-white text-center justify-center mt-4'>
        <div className='text-[24px] sm:text-[36px] pt-12 sm:pt-[116px] uppercase leading-6 sm:leading-8 font-medium'>Product designer</div>
        <div className='flex flex-col sm:flex-row text-center font-normal text-[14px] sm:text-[16px] leading-5 sm:leading-6 mt-4 sm:mt-6 mx-auto sm:ml-[592px] tracking-wide'>
          <div>Job type: Full Time</div>
          <div className='mt-2 sm:mt-0 sm:ml-[55px]'>Experience : 2-4 yrs </div>
        </div>
        <button className='border bg-white rounded-lg text-[#007F97] px-2 py-2 sm:px-5 sm:py-2 mt-4 sm:mt-6 sm:text-[14px] sm:leading-6 font-semibold sm:w-[140px] w-[90px] sm:h-[40px] h-[30px] text-[10px] leading-3 '>Join the team</button>
      </div>

      <div className='w-[90%] sm:w-[820px] text-start mx-auto text-[14px] sm:text-[14px] mt-8'>
        <div>
          <h1 className='text-[16px] leading-6 font-semibold'>Responsibilities:</h1>
          <ol className='list-disc list-outside pl-5 pt-4 font-semibold'>
            <li className='pt-4'>Project Planning and Execution: Define project scope, objectives, and deliverables; develop detailed project plans, schedules, and timelines; monitor progress, identify risks, and implement corrective actions for on-time delivery.</li>
            <li className='pt-4'>Team Coordination: Coordinate with cross-functional teams; assign tasks, set priorities, and ensure clear communication channels; facilitate meetings, stand-ups, and reviews to track progress and address blockers.</li>
            <li className='pt-4'>Client Communication: Serve as the primary client contact; provide updates, address feedback, manage expectations; foster strong client relationships.</li>
            <li className='pt-4'>Resource Management: Manage budget, personnel, tools; optimize resource allocation; identify skill development opportunities.</li>
          </ol>
        </div>

        <div>
          <h1 className='mt-10 text-[16px] leading-6 font-semibold'>Qualifications:</h1>
          <ul className='list-disc list-outside pl-5 pt-4 font-semibold'>
            <li className='pt-4'>Project Planning and Execution: Define project scope, objectives, and deliverables; develop detailed project plans, schedules, and timelines; monitor progress, identify risks, and implement corrective actions for on-time delivery.</li>
            <li className='pt-4'>Team Coordination: Coordinate with cross-functional teams; assign tasks, set priorities, and ensure clear communication channels; facilitate meetings, stand-ups, and reviews to track progress and address blockers.</li>
            <li className='pt-4'>Client Communication: Serve as the primary client contact; provide updates, address feedback, manage expectations; foster strong client relationships.</li>
            <li className='pt-4'>Resource Management: Manage budget, personnel, tools; optimize resource allocation; identify skill development opportunities.</li>
          </ul>
        </div>

        <div className='flex mt-8 text-[14px] font-medium tracking-wide'>
          <span>Contact:</span>
          <div className='text-[#03434F] ml-1 cursor-pointer'>
            careerssolwyz@gmail.com
          </div>
        </div>
        <div className='flex mt-8 sm:mt-14 mb-10 sm:mb-20'>
          <button className='border rounded-lg border-black font-medium py-2 sm:py-4 px-4 sm:px-9 text-[#03434F]'>Back</button>
          <Link to='/careersApplication'>
            <button className='border rounded-lg bg-[#03434F] flex items-center py-2 sm:py-3 px-4 sm:px-4 text-white font-medium ml-4 sm:ml-10'>
              Apply
              <img className='w-4 h-4 sm:w-6 sm:h-6 ml-2' src={ApplyArrow} alt="Apply Arrow" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CareerDetails;
