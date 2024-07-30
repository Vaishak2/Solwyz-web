import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function ContactForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const [formValues, setFormValues] = useState({ firstname: '', lastname: '', email: '', phone: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formValues);
    setFormValues({ firstname: '', lastname: '', email: '', phone: '', message: '' });

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-center',
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'Thank You.',
      text: 'Our Team will contact you soon!',
    });
  };

  return (
    <div className='bg-contact-formBackground pt-20 pb-28 ' id='contactUs'>
      <div className='font-urbanist'>
        <div className='text-[55px] tracking-wider'>
          <span className='font-semibold'>Let's </span>
          <span className='font-thin'>talk</span>
        </div>
        <div className='text-[18px]'>
          <span className='text-gray-500 font-normal'>Let's discuss something </span>
          <span className='font-semibold'>cool </span>
          <span className='text-gray-500 font-normal'>together</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='sm:px-24 px-5 py-5 border-2 border-black lg:w-[75%] w-[90%] mx-auto mt-10'>
        <div className='w-full text-[17px] font-urbanist font-medium text-gray-600 text-left grid sm:grid-cols-2 grid-cols-1 gap-16 mx-auto mt-10'>
          <div>
            <div>First Name</div>
            <div>
              <input
                required
                name="firstname"
                value={formValues.firstname}
                onChange={handleChange}
                type="text"
                className="border-0 border-b border-solid border-gray-600 bg-contact-formBackground w-full mt-3"
                id='input-outline'
              />
            </div>
          </div>
          <div>
            <div>Last Name</div>
            <div>
              <input
                required
                name="lastname"
                value={formValues.lastname}
                onChange={handleChange}
                type="text"
                className="border-0 border-b border-solid border-gray-600 bg-contact-formBackground w-full mt-3"
                id='input-outline'
              />
            </div>
          </div>
          <div>
            <div>Email</div>
            <div>
              <input
                required
                name="email"
                value={formValues.email}
                onChange={handleChange}
                type="email"
                className="border-0 border-b border-solid border-gray-600 bg-contact-formBackground w-full mt-3"
                id='input-outline'
              />
            </div>
          </div>
          <div>
            <div>Phone Number</div>
            <div>
              <input
                required
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                type="number"
                className="border-0 border-b border-solid border-gray-600 bg-contact-formBackground w-full mt-3"
                id='input-outline'
              />
            </div>
          </div>
        </div>

        <div className='w-full text-[17px] font-urbanist font-medium text-gray-600 text-left mt-14'>
          <div>Message</div>
          <div>
            <input
              required
              name="message"
              value={formValues.message}
              onChange={handleChange}
              className="text-[15px] border-0 border-b border-solid border-gray-600 bg-contact-formBackground w-full mt-8"
              placeholder='Write your message..'
              id='input-outline'
            />
          </div>
        </div>

        <button
          type="submit"
          id='bannerButton'
          className="flex justify-around bg-banner-buttonBackground text-white hover:text-gray-300 font-bold py-2 px-4 rounded-full sm:w-[248px] w-[170px] sm:h-[66px] h-[50px] sm:ml-auto ml-[-21px] mb-10"

        >
          <div className='w-fit my-auto sm:text-[18px] text-[14px] font-urbanist font-medium ml-auto'>
            Send Message
          </div>
          <div className='w-fit my-auto ml-auto'>
            <div className="text-banner-buttonBackground bg-white hover:bg-gray-300 font-medium rounded-full text-sm p-2.5 text-center">
              <svg className="sm:w-7 w-3 sm:h-7 h-3" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </div>
          </div>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
