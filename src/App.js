import Header from './Components/Header/Header';
import './App.css'
import Banner from './Components/Banner/Banner';
import AboutUs from './Components/AboutUs/AboutUs';
import CustomerVoices from './Components/CustomerVoices/CustomerVoices';
import ContactForm from './Components/ContactForm/ContactForm';
import Services from './Components/Services/Services';
import Blogs from './Components/Blogs/Blogs';
import BlogDetails1 from './Components/BlogDetails/BlogDetails1';
import BlogDetails2 from './Components/BlogDetails/BlogDetails2';
import Footer from './Components/Footer/Footer';
import SpeedDialComponent from './Components/SpeedDial/SpeedDial';
import AppsMenu from './Components/ToggleMenu/ToggleMenu';
import About_Detail_Page from './Components/AboutDetails/AboutDetails';
import GoogleMap from './Components/GoogleMap/GoogleMap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Marketing from './Components/ServiceDetails/Marketing';
import WebsiteEngineering from './Components/ServiceDetails/WebsiteEngineering';
import EnterpriseResource from './Components/ServiceDetails/EnterpriseResource';
import Customer_deatil from './Components/ServiceDetails/CustomerDetails';

import CareerDetails from './Components/CareerDeatils/CareerDetails';

import Careers from './Components/Careers/Careers';
import CareerDetailForm from './Components/CareerDetailForm/CareerDetailForm';



function App() {
  return (
    <div className="App">
      <div >
        <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/aboutus' Component={AboutUs} />
            <Route path='/aboutdetails' Component={About_Detail_Page} />
            <Route path='/blogs' Component={Blogs}/>
            <Route path='/contactus' Component={ContactForm} />
            <Route path='/blogdetails1' Component={BlogDetails1} />
            <Route path='/blogdetails2' Component={BlogDetails2} />
            <Route path='/services' Component={Services} />
            <Route path='/servicemarketing' Component={Marketing} />
            <Route path='/servicewebsite' Component={WebsiteEngineering} />
            <Route path='/serviceenterprise' Component={EnterpriseResource} />
            <Route path='/servicecustomer' Component={Customer_deatil} />

            <Route path='/careers/careerdetails' Component={CareerDetails} />
            <Route path='/careers/careersApplication' Component={CareerDetailForm} />
            <Route path='/careers/careerdetails/careersApplication' Component={CareerDetailForm} />

            <Route path='/careers' Component={Careers} />
          </Routes>
          <Footer />
        </Router>
        {/* <Home/> */}
        
        <SpeedDialComponent />


      </div>
    </div>
  );
}

export default App;
