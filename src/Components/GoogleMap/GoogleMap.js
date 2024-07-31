import React from 'react';

function GoogleMap() {
    return (
        <div className="Location pt-12">
            <div className='text-[55px] tracking-wider'>
                <span className='font-semibold'>Locate </span>
                <span className='font-thin'>Us</span>
            </div>
            <div className="map_container flex flex-col lg:flex-row justify-center lg:gap-12 lg:pl-[150px] lg:pt-[20px] lg:pb-[52px] lg:pr-[150px] gap-6 items-center" >
                <div className="lg:w-1/2 w-full p-4">
                <div className='sm:text-[18px] font-medium text-left'>INDIA :</div>
                    <div className="border-4 border-gray-300 sm:mt-2">
                        <iframe
                            title="map"
                            width="100%"
                            className="lg:h-[512px] h-[360px]"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://www.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=6th%20floor,%20Solwyz%20Technologies%20Centre,%20near%20Technopark%20phase%201,%20Karyavattom,%20Kazhakkoottam,%20Thiruvananthapuram,%20Kerala%20695582+(Solwyz%20Technologies%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        />
                    </div>
                    <div className="text-start mt-5">
                        <h6 className="address_title text-sm">6th floor, Asiatic Business Centre, NH Bypass, Near Technopark Phase-1, Kazhakkoottam, Thiruvananthapuram</h6>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full p-4">
                <div className='sm:text-[18px] font-medium text-left'>UAE :</div>
                    <div className="border-4 border-gray-300 sm:mt-2">
                        <iframe
                            title="map"
                            width="100%"
                            className="lg:h-[512px] h-[360px]"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://www.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Room%20207,Bussiness%20point%20building,%20Port%20Saeed%20Street,%20Deira-UAE+(Solwyz%20Technologies%20Pvt%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        />
                    </div>
                    <div className="text-start mt-5">
                        <h6 className="address_title text-sm">Room 207, Bussiness point building,<br></br>Port Saeed Street, Deira-UAE</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoogleMap;
