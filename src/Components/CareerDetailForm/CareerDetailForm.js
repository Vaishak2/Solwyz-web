import React, { useEffect, useState } from 'react';
import UploadIcon from "../../Assets/Icons/upload.svg";
import ApplyBtn from "../../Assets/Icons/applyIcon.svg";
import DeleteIcon from "../../Assets/Icons/close.svg";

function CareerDetailForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    qualification: '',
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDeleteFile = () => {
    setFile(null);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { firstName, secondName, email, phoneNumber, dateOfBirth, qualification } = formData;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]+$/;
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!firstName || !secondName || !email || !phoneNumber || !dateOfBirth || !qualification) {
      alert('Please fill in all required fields.');
      return false;
    }
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (!phonePattern.test(phoneNumber)) {
      alert('Please enter a valid phone number.');
      return false;
    }
    if (!datePattern.test(dateOfBirth)) {
      alert('Please enter the date of birth in DD/MM/YYYY format.');
      return false;
    }
    if (!isChecked) {
      alert('You must accept the privacy policy to apply.');
      return false;
    }
    return true;
  };

  const handleApplyClick = () => {
    if (validateForm()) {
      alert('Form submitted!');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div> 
      <div className='pt-4 sm:pt-[100px]'></div>
      <div className='bg-Career-Details-Banner h-[200px] sm:h-[375px] bg-cover text-white text-center justify-center mt-4'>
        <div className='text-[24px] sm:text-[36px] pt-12 sm:pt-[116px] uppercase leading-6 sm:leading-8 font-medium'>Product designer</div>
        <div className='flex flex-col sm:flex-row text-center font-normal text-[14px] sm:text-[16px] leading-5 sm:leading-6 mt-4 sm:mt-6 mx-auto sm:ml-[592px] tracking-wide'>
          <div>Job type: Full Time</div>
          <div className='mt-2 sm:mt-0 sm:ml-[55px]'>Experience : 2-4 yrs </div>
        </div>
        {/* <button className='border bg-white rounded-lg text-[#007F97] px-2 py-2 sm:px-5 sm:py-2 mt-4 sm:mt-6 sm:text-[14px] sm:leading-6 font-semibold sm:w-[140px] w-[90px] sm:h-[40px] h-[30px] text-[10px] leading-3 '>Join the team</button> */}
      </div>

      <div className='border-black border w-[90%] sm:w-[1030px] h-auto mt-8 mx-auto mb-20'>
        <div>
          <h1 className='text-[24px] sm:text-[32px] leading-8 sm:leading-[48px] font-medium mt-8 sm:mt-12'>Job Application Form</h1>
          <div className='border w-[100px] sm:w-[272px] justify-center mx-auto mt-4 sm:mt-8'></div>
          <div className='ml-6 sm:ml-[105px] mt-8 sm:mt-[63px]'>
            <h1 className='text-start'>Name <span className='text-[#FF0000]'>*</span></h1>
            <div className='columns-2 flex flex-col sm:flex-row gap-5 pt-4 sm:pt-6'>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder='Enter first name'
                required
                className="w-full sm:w-[400px] py-2 border-b placeholder:text-[14px] placeholder:text-[#aaaaaa] focus:outline-none"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="secondName"
                name="secondName"
                placeholder='Enter second name'
                required
                className="w-full sm:w-[400px] sm:ml-[48px] py-2 border-b placeholder:text-[14px] placeholder:text-[#aaaaaa] focus:outline-none"
                value={formData.secondName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='ml-6 sm:ml-[105px] columns-2 mt-8 sm:mt-12'>
            <h1 className='text-start'>Email <span className='text-[#FF0000]'>*</span></h1>
            <div className='columns-2 flex flex-col gap-5'>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full sm:w-[400px] py-2 border-b pt-4 sm:pt-6 focus:outline-none"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <h1 className='text-start mt-4 sm:mt-8'>Phone Number <span className='text-[#FF0000]'>*</span></h1>
            <div className='columns-2 flex flex-col gap-5'>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                required
                className="w-full sm:w-[400px] py-2 border-b pt-4 sm:pt-6 focus:outline-none"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                pattern="[0-9]*"
              />
            </div>
          </div>
          <div className='ml-6 sm:ml-[105px] columns-2 mt-8 sm:mt-12'>
            <h1 className='text-start'>Date of Birth <span className='text-[#FF0000]'>*</span></h1>
            <div className='columns-2 flex flex-col gap-5'>
              <input
                type="text"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder='DD/MM/YYYY'
                required
                className="w-full sm:w-[400px] placeholder:text-[14px] placeholder:text-[#aaaaaa] py-2 border-b focus:outline-none pt-4 sm:pt-6"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />
            </div>
            <h1 className='text-start mt-4 sm:mt-8'>Highest Qualification <span className='text-[#FF0000]'>*</span></h1>
            <div className='columns-2 flex flex-col gap-5'>
              <input
                type="text"
                id="qualification"
                name="qualification"
                required
                className="w-full sm:w-[400px] py-2 border-b focus:outline-none pt-4 sm:pt-6"
                value={formData.qualification}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className='upload-section w-[90%] sm:w-[818px] h-auto mt-10 ml-6 sm:ml-[106px]'>
          <h1 className='text-[16px] font-normal text-start'>Upload Resume</h1>
          <div className='upload-box justify-center bg-[#F7F7F7] mt-4 pt-4 cursor-pointer' onClick={() => document.getElementById('fileInput').click()}>
            <img className='mx-auto' src={UploadIcon} alt="Upload" />
            <h1 className='text-[16px] font-semibold'>Upload a file</h1>
            <h1 className='text-[16px] leading-4 text-[#aaaaaa] mt-4 pb-4'>Drag and drop files here</h1>
          </div>
          <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
          {file && (
            <div className='flex items-center mt-2'>
              <p className='text-[14px]'>{file.name}</p>
              <img
                className='ml-2 cursor-pointer'
                src={DeleteIcon} 
                alt="Delete"
                onClick={handleDeleteFile}
                style={{ width: '16px', height: '16px' }}
              />
            </div>
          )}
        </div>

        <div className='accept-section flex text-[16px] font-medium leading-4 ml-6 sm:ml-[106px] mt-10'>
          <input type="checkbox" className='mr-2' checked={isChecked} onChange={handleCheckboxChange} />
          <h1 style={{ color: isChecked ? 'black' : 'initial' }}>I accept the electronic saving of my data according to the privacy policy.</h1>
        </div>
        <div>
          <img
            className='mt-10 sm:mt-20 mx-auto mb-12 cursor-pointer'
            src={ApplyBtn}
            alt="Apply"
            onClick={handleApplyClick}
          />
        </div>
      </div>
    </div>
  );
}

export default CareerDetailForm;
