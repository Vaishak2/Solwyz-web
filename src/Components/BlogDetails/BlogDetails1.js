import React, { useEffect } from 'react'
import blogImg1 from '../../Assets/images/blogimg1.jpg'
import blogImg5 from '../../Assets/images/blogimg5.jpg'
import blogImg6 from '../../Assets/images/blogimg6.jpg'
import blogDetailImg1 from '../../Assets/images/blogdetailimg1.jpg'
import blogDetailImg2 from '../../Assets/images/blogdetailimg2.jpg'
import readMoreButton from '../../Assets/images/ReadMoreNew.png'
import { Link } from 'react-router-dom'

function BlogDetails1() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <div className='pt-28 mb-24'>
                <div className='sm:text-[16px] text-[10px] font-urbanist font-medium'>
                    <Link to='/'><span className='text-gray-400'>HOMEPAGE /</span></Link><Link to='/blogs'><span className='text-gray-400'>BLOG / </span></Link><span>BLOG DETAILS</span>
                </div>
                <div className='sm:text-[72px] text-[36px] tracking-wide font-urbanist mt-10'>
                    <div>
                        <span className='font-semibold'>The Power of </span><span className='font-thin '>Digital</span>
                    </div>
                    <div>
                        <span className='font-semibold '> Transformation </span><span className='font-thin'>in Business </span>
                    </div>
                </div>
                <div className='flex justify-center sm:mt-20 mt-8 md:mx-24 mx-4'>
                    <div className='font-urbanist'>
                        <img src={blogImg1} alt='blogimage' className='sm:w-full sm:h-[527px] object-cover'></img>
                        <div className='flex sm:justify-between sm:flex-row flex-col mt-4'>
                            <div className='text-[14px] font-semibold tracking-wide'>
                                <span className='text-gray-400'>CATEGORY: </span><span className='ml-2'>TECHNOLOGY</span>
                            </div>
                            <div className='text-[14px] font-semibold tracking-wide'>
                                <span className='text-gray-400'>DATE: </span><span className='ml-2'>JUNE 6 2024</span>
                            </div>
                            <div className='text-[14px] font-semibold tracking-wide'>
                                <span className='text-gray-400'>AUTHOR: </span><span className='ml-2'>ALEENA MATHEW</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='text-[18px] sm:mt-16 mt-4 font-medium tracking-wide leading-8 text-left'>The use of technology for digital transformation in business automation can significantly drive business growth. Here’s how:</div>
                            </div>
                            <div className='text-left sm:mt-16 mt-4 tracking-wide'>
                                <div className='text-[32px] font-semibold'> Efficiency and Productivity</div>
                                <div className='text-[18px] sm:mt-6 font-medium leading-8'>Automation of Routine Tasks: By automating repetitive tasks, businesses can free up valuable human resources to focus on more strategic activities. This not only increases productivity but also reduces the chances of errors.
                                    Process Optimization: Digital tools can streamline processes, eliminate bottlenecks, and ensure smoother operations.</div>
                            </div>
                            <div className='text-left sm:mt-16 mt-4 tracking-wide'>
                                <div className='text-[32px] font-semibold'>Cost Reduction</div>
                                <div className='text-[18px] sm:mt-6 font-medium leading-8'>Operational Costs: Automation reduces the need for manual intervention, leading to lower labor costs. Additionally, it minimizes errors and rework, further saving costs.
                                    Resource Management: Digital transformation helps in optimizing resource usage, thereby reducing wastage and improving overall efficiency.
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 sm:mt-16 mt-4'>
                                <div>
                                    <img src={blogDetailImg1} className='w-full h-[352px]' alt='blogdetailimg'></img>
                                </div>
                                <div>
                                    <img src={blogDetailImg2} className='w-full h-[352px]' alt='blogdetailimg'></img>
                                </div>
                            </div>

                            <div className='text-left sm:mt-16 mt-4 tracking-wide'>
                                <div className='text-[32px] font-semibold'> Improved Decision Making</div>
                                <div className='text-[18px] sm:mt-6 font-medium leading-8'>Data-Driven Insights: With digital transformation, businesses can collect and analyze vast amounts of data. This helps in gaining valuable insights, understanding market trends, and making informed decisions.<br />
                                    Real-Time Analytics: Access to real-time data allows businesses to respond quickly to changes in the market or operational conditions.
                                </div>
                            </div>

                            <div className='text-left sm:mt-16 mt-4 tracking-wide'>
                                <div className='text-[32px] font-semibold'> Enhanced Customer Experience</div>
                                <div className='text-[18px] sm:mt-6 font-medium leading-8'>Personalization: Digital tools enable businesses to offer personalized services and products based on customer preferences and behavior.
                                    <br />
                                    24/7 Availability: Automation and digital platforms ensure that businesses can cater to their customers’ needs round the clock, improving customer satisfaction and loyalty.
                                </div>
                            </div>

                            <div className='text-left sm:mt-16 mt-4 tracking-wide'>
                                <div className='text-[32px] font-semibold'> Scalability</div>
                                <div className='text-[18px] sm:mt-6 font-medium leading-8'>Flexible Operations: Digital systems can be easily scaled up or down based on the business requirements, allowing companies to grow without significant additional investments.
                                    <br />
                                    Global Reach: Digital platforms enable businesses to reach a global audience, opening up new markets and opportunities for growth.
                                </div>
                            </div>

                            <div className='text-left sm:mt-16 mt-4 tracking-wide'>
                                <div className='text-[32px] font-semibold'> Innovation and Agility</div>
                                <div className='text-[18px] sm:mt-6 font-medium leading-8'>New Business Models: Digital transformation often leads to the development of new business models, products, and services, driving innovation and competitiveness.
                                    <br />
                                    Agile Operations: Technology enables businesses to be more agile, adapting quickly to market changes and staying ahead of the competition.
                                </div>
                            </div>

                            <div className='text-left sm:mt-16 mt-4 tracking-wide'>
                                <div className='text-[32px] font-semibold'> Improved Collaboration and Communication</div>
                                <div className='text-[18px] sm:mt-6 font-medium leading-8'>Digital Tools: Technologies like cloud computing, collaboration platforms, and communication tools enhance teamwork and coordination among employees, leading to better project outcomes.
                                <br />
                                Remote Work: Digital transformation supports remote work, enabling businesses to tap into a global talent pool and maintain operations even during disruptions.
                                </div>
                            </div>

                            <div className='text-left sm:mt-16 mt-4 tracking-wide'>
                                <div className='text-[32px] font-semibold'>Conclusion</div>
                                <div className='text-[18px] sm:mt-6 font-medium leading-8'>The integration of technology for digital transformation in business automation not only streamlines operations but also paves the way for significant growth. By enhancing efficiency, reducing costs, improving decision-making, and enhancing customer experience, businesses can gain a competitive edge and achieve sustained growth.
                               </div>
                            </div>

                            <div className='sm:mt-16 mt-4'>
                                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            </div>
                        </div>
                        <div>
                            <div className='text-[48px] text-left font-semibold tracking-wide sm:mt-16 mt-4'>Similiar Blogs</div>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 sm:mt-10 mt-5'>
                                <div>
                                    <img className='h-[360px] w-full' src={blogImg5} alt='blogimage'></img>
                                    <div className='font-urbanist text-left sm:mt-7 mt-4'>
                                        <div className='text-[14px] font-semibold tracking-wide'>
                                            <span className='text-banner-buttonBackground'>TECHNOLOGY </span><span className='ml-4 text-gray-400'>JUNE 5 2024</span>
                                        </div>
                                        <div className='sm:text-[30px] text-[20px] font-semibold tracking-wide sm:mt-6 mt-4'>Revolutionizing Business Operations: The Power of Digital Transformation...</div>
                                        <div className='text-[18px] tracking-wide font-medium sm:mt-6 mt-4'>The use of technology for digital transformation in business automation can significantly drive business growth. Here’s...</div>
                                    </div>

                                    <div className='sm:mt-10 mt-6 sm:mb-5' onClick={scrollToTop}>
                                        <img src={readMoreButton} alt='buttonimg' className='hover:cursor-pointer sm:w-[204px] sm:h-[56px] w-[165px] h-[48px] '></img>
                                    </div>

                                </div>

                                <div>
                                    <img className='h-[360px] w-full' src={blogImg6} alt='blogimage'></img>
                                    <div className='font-urbanist text-left sm:mt-7 mt-4'>
                                        <div className='text-[14px] font-semibold tracking-wide'>
                                            <span className='text-banner-buttonBackground'>TECHNOLOGY </span><span className='ml-4 text-gray-400'>JUNE 5 2024</span>
                                        </div>
                                        <div className='text-[30px] font-semibold tracking-wide sm:mt-6 mt-4'>Boosting Efficiency and Productivity: How ERP Implementation Benefits...</div>
                                        <div className='text-[18px] tracking-wide font-medium sm:mt-6 mt-4'>Implementing an Enterprise Resource Planning (ERP) system can significantly boost efficiency and productivity for businesses...</div>
                                    </div>
                                    <Link to='/blogdetails2'>
                                        <div className='sm:mt-10 mt-6 sm:mb-5'>
                                            <img src={readMoreButton} alt='buttonimg' className='hover:cursor-pointer sm:w-[204px] sm:h-[56px] w-[165px] h-[48px] '></img>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails1
