import React from 'react'
import Banner from '../Banner/Banner'
import AboutUs from '../AboutUs/AboutUs'
import Services from '../Services/Services'
import CustomerVoices from '../CustomerVoices/CustomerVoices'
import ContactForm from '../ContactForm/ContactForm'
import GoogleMap from '../GoogleMap/GoogleMap'
import Blogs from '../Blogs/Blogs'
import EmpoweringSection from '../EmpoweringSection/EmpoweringSection'

function Home() {

  return (
    <div>
      <Banner/>
      <AboutUs/>
      <Services/>  
      <CustomerVoices/>
      {/* <Blogs/> */}
      <GoogleMap/>
      <ContactForm/>
      <EmpoweringSection/>
    </div>
  )
}

export default Home
