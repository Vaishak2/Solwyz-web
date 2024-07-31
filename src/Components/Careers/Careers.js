import React, { useEffect } from 'react'
import People from '../../Assets/images/Frame people.png'
import Play from '../../Assets/images/Frame play.png'
import Cap from '../../Assets/images/Frame cap.png'
import Signal from '../../Assets/images/Frame signal.png'
import Search from '../../Assets/Icons/search.png'
import RightArrow from '../../Assets/Icons/right arrow.png'
import { Link, NavLink } from 'react-router-dom'

function Careers() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='font-urbanist'>

      <div className='sm:h-[100px] hidden sm:block'></div>

      <div className='bg-career-cover bg-cover sm:h-[550px] flex items-center justify-center'>
        <div className=' sm:w-[704px] w-[250px] pt-[72px] sm:pt-0 pb-4 sm:pb-0'>
          <div className='text-white sm:text-[36px] text-[18px] leading-8 font-medium'>JOIN US</div>
          <div className='text-[white] sm:text-[16px] text-[10px] sm:leading-6 leading-3 font-normal sm:mt-[24px] tracking-wide'>At Solwyz Technologies, we're committed to building a robust team filled with dynamic professionals. Our work atmosphere is a blend of fun and learning, fostering both personal and professional growth.<br></br> If you're looking to be part of a vibrant team where your skills are valued and your growth is nurtured, Solwyz Technologies is the place for you!<br></br>Apply now and be part of our journey towards excellence!</div>
          <div className='sm:text-[14px] text-[12px] text-[#007F97] bg-[#FFFFFF] hover:bg-gray-300 cursor-pointer sm:w-[140px] sm:h-[40px] w-[100px] h-[30px] font-normal flex items-center justify-center mx-auto sm:mt-[24px] mt-[16px] rounded-lg'>
          <NavLink to="#currentOpenings">
            Join the team
          </NavLink>
          </div>
        </div>
      </div>

      <div className='sm:w-[1142px] mx-auto sm:mt-[80px] mt-[20px] sm:flex sm:gap-[69px] p-5 sm:p-0'>
        <div className='sm:w-[461px]'>
          <div className='text-[16px] font-semibold leading-[27px] sm:text-left'>BENEFITS</div>
          <div className='sm:text-[36px] text-[22px] sm:leading-[54px] font-bold sm:text-left mt-[16px]'>Why you Should Join Our Awesome Team</div>
          <div className='sm:w-[439px] text-[14px] leading-[21px] font-normal sm:text-left mt-[16px]'>At Solwyz Technologies, we provide a friendly and supportive workspace that helps you grow and thrive. Our positive and efficient work environment nurtures the right talent, allowing you to reach your full potential.</div>
        </div>
        <div className='sm:w-[612px] sm:mt-0 mt-[48px] grid grid-cols-2 gap-6'>
          <div className='sm:w-[294px] w-[150px] sm:mt-[24px] mt-[8px] mx-auto'>
            <img className='sm:w-[74px] sm:h-[74px] w-[50px] h-[50px] sm:mx-0 mx-auto' src={People}></img>
            <div className='sm:text-[18px] leading-[27px] font-bold sm:text-left mt-[12px]'>Team work</div>
            <div className='sm:text-[14px] text-[12px] sm:leading-[24px] leading-[16px] font-light sm:text-left tracking-wide'>At Solwyz Technologies, we set our standards high and establish clear goals. With our well-coordinated and supportive team, we achieve these goals together. Our team is always there to help in any situation, ensuring a collaborative and successful work environment.</div>
          </div>
          <div className='sm:w-[294px] w-[150px] sm:mt-[24px] mt-[8px] mx-auto'>
            <img className='sm:w-[74px] sm:h-[74px] w-[50px] h-[50px] sm:mx-0 mx-auto' src={Play}></img>
            <div className='sm:text-[18px] leading-[27px] font-bold sm:text-left mt-[12px]'>Secured Future</div>
            <div className='sm:text-[14px] text-[12px] sm:leading-[24px] leading-[16px] font-light sm:text-left tracking-wide'>Choosing to work at Solwyz Technologies ensures a secure and prosperous future. We are dedicated to providing a stable environment that supports your long-term career growth, helping you achieve a bright and successful future.</div>
          </div>
          <div className='sm:w-[294px] w-[150px] sm:mt-[24px] mt-[12px] mx-auto'>
            <img className='sm:w-[74px] sm:h-[74px] w-[50px] h-[50px] sm:mx-0 mx-auto' src={Cap}></img>
            <div className='sm:text-[18px] leading-[27px] font-bold sm:text-left mt-[12px]'>Learning Opportunity</div>
            <div className='sm:text-[14px] text-[12px] sm:leading-[24px] leading-[16px] font-light sm:text-left tracking-wide'>Learn while you earn with Solwyz Technologies. We provide a wide spectrum of learning opportunities for young talent, ensuring that all your career goals are within reach. Learn along with us !</div>
          </div>
          <div className='sm:w-[294px] w-[150px] sm:mt-[24px] mt-[12px] mx-auto'>
            <img className='sm:w-[74px] sm:h-[74px] w-[50px] h-[50px] sm:mx-0 mx-auto' src={Signal}></img>
            <div className='sm:text-[18px] leading-[27px] font-bold sm:text-left mt-[12px]'>Upgrate Skills</div>
            <div className='sm:text-[14px] text-[12px] sm:leading-[24px] leading-[16px] font-light sm:text-left tracking-wide'>At Solwyz Technologies, working with us means continuously upgrading your skills and acquiring new ones. This dynamic environment ensures you evolve into an outstanding performer in your field.</div>
          </div>
        </div>
      </div>

      <div className='bg-[#F7F9FC] sm:mt-[80px] mt-[40px] sm:pb-[80px]'>
        <div className='sm:w-[1194px] bg-[#F7F9FC] mx-auto'>
          <div id="currentOpenings" className='sm:text-[38px] text-[24px] leading-[60px] font-normal sm:pt-[81px] pt-[40px]'>Current Openings</div>
          <div className='flex justify-between sm:mt-[80px] sm:p-0 p-5 sm:gap-0 gap-2'>
            <div className='sm:w-[287px]'>
              <div className='sm:h-[80px] sm:text-[20px] text-[12px] sm:leading-[32px] font-medium border-2 border-black rounded-lg sm:pt-[24px] text-start sm:pl-[24px] sm:px-0 px-2'>All positions (10)</div>
              <div className='sm:h-[60px] sm:text-[16px] text-[12px] sm:leading-[25px] font-medium text-[#253A67] sm:pt-[14px] pt-[8px] text-start sm:pl-[24px] sm:px-0 px-2'>Engineering (7)</div>
              <div className='sm:h-[60px] sm:text-[16px] text-[12px] sm:leading-[25px] font-normal text-[#253A67] sm:pt-[14px] pt-[8px] text-start sm:pl-[24px] sm:px-0 px-2'>Human Resource (0)</div>
              <div className='sm:h-[60px] sm:text-[16px] text-[12px] sm:leading-[25px] font-normal text-[#253A67] sm:pt-[14px] pt-[8px] text-start sm:pl-[24px] sm:px-0 px-2'>Design (1)</div>
              <div className='sm:h-[60px] sm:text-[16px] text-[12px] sm:leading-[25px] font-normal text-[#253A67] sm:pt-[14px] pt-[8px] text-start sm:pl-[24px] sm:px-0 px-2'>Operation (0)</div>
              <div className='sm:h-[60px] sm:text-[16px] text-[12px] sm:leading-[25px] font-normal text-[#253A67] sm:pt-[14px] pt-[8px] text-start sm:pl-[24px] sm:px-0 px-2'>Marketing (2)</div>
            </div>
            <div className='sm:w-[877px] bg-[#F7F9FC]'>
              <div className='border border-[#D7D7D7] rounded-lg flex sm:mb-[30px]'>
                <img className='sm:h-4 sm:w-4 h-3 w-3 my-auto sm:ml-6 ml-3' src={Search}></img>
                <input className='sm:ml-4 ml-2 w-full sm:h-[48px] sm:placeholder-[16px] placeholder-[12px] placeholder-[#A8A8A8] bg-[#F7F9FC] rounded-lg' type='text' placeholder='Search Position'></input>
              </div>

              <Link to='careerdetails'>
                <div className='bg-[#FFFFFF] sm:p-[24px] p-2 sm:mt-[16px] mt-2 hover:cursor-pointer'>
                  <div className='bg-[#FFFFFF] flex justify-between'>
                    <div>
                      <div className='sm:text-[16px] text-[14px] leading-6 font-semibold text-left'>Full-Stack Developer</div>
                      <div className='text-[12px] leading-[13px] font-medium sm:mt-4 text-left'>Trivandrum</div>
                      <div className='mt-4 flex gap-2'>
                        <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-[29px] rounded-md px-1'>2-4 yrs Experience</div>
                        <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-[29px] rounded-md px-1'>Full-time</div>
                        <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-[29px] rounded-md px-1'>Qualification- Any</div>
                      </div>
                    </div>
                    <Link to='careersApplication'>
                      <div className='sm:w-[111px] sm:h-[48px] w-[90px] h-[32px] bg-[#03434F] flex items-center justify-center gap-2 rounded-lg my-auto'>
                        <div className='sm:text-[16px] text-[12px] text-white leading-6 font-medium'>Apply</div>
                        <div><img className='sm:w-[16px] sm:h-[14px] w-[12px] h-[10px]' src={RightArrow}></img></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Link>

              <Link to='careerdetails'>
                <div className='bg-[#FFFFFF] sm:p-[24px] p-2 sm:mt-[16px] mt-2 hover:cursor-pointer'>
                  <div className='bg-[#FFFFFF] flex justify-between'>
                    <div>
                      <div className='sm:text-[16px] text-[14px] leading-6 font-semibold text-left'>UI Architect</div>
                      <div className='text-[12px] leading-[13px] font-medium sm:mt-4 text-left'>Trivandrum</div>
                      <div className='mt-4 flex gap-2'>
                        <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-[29px] rounded-md px-1'>7-8 yrs Experience</div>
                        <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-[29px] rounded-md px-1'>Full-time</div>
                        <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-[29px] rounded-md px-1'>Qualification- Any</div>
                      </div>
                    </div>
                    <Link to='careersApplication'>
                      <div className='sm:w-[111px] sm:h-[48px] w-[90px] h-[32px] bg-[#03434F] flex items-center justify-center gap-2 rounded-lg my-auto'>
                        <div className='sm:text-[16px] text-[12px] text-white leading-6 font-medium'>Apply</div>
                        <div><img className='sm:w-[16px] sm:h-[14px] w-[12px] h-[10px]' src={RightArrow}></img></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Link>

              <Link to='careerdetails'>
                <div className='bg-[#FFFFFF] sm:p-[24px] p-2 sm:mt-[16px] mt-2 hover:cursor-pointer'>
                  <div className='bg-[#FFFFFF] flex justify-between'>
                    <div>
                      <div className='sm:text-[16px] text-[14px] leading-6 font-semibold text-left'>Java Full-Stack Developer</div>
                      <div className='text-[12px] leading-[13px] font-medium sm:mt-4 text-left'>Trivandrum</div>
                      <div className='mt-4 flex gap-2'>
                        <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-[29px] rounded-md px-1'>2-4 yrs Experience</div>
                        <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-[29px] rounded-md px-1'>Full-time</div>
                        <div className='sm:h-[34px] sm:text-[12px] text-[10px] sm:leading-[18px] leading-3 font-medium sm:py-2 sm:px-4 border border-black sm:rounded-[29px] rounded-md px-1'>Qualification- Any</div>
                      </div>
                    </div>
                    <Link to='careersApplication'>
                      <div className='sm:w-[111px] sm:h-[48px] w-[90px] h-[32px] bg-[#03434F] flex items-center justify-center gap-2 rounded-lg my-auto'>
                        <div className='sm:text-[16px] text-[12px] text-white leading-6 font-medium'>Apply</div>
                        <div><img className='sm:w-[16px] sm:h-[14px] w-[12px] h-[10px]' src={RightArrow}></img></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Careers
