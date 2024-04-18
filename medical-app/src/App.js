// Import necessary libraries
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'; // Import Navbar component
import Landing_Page from './Components/Landing_Page/Landing_Page'; // Import Landing Page component
import FindDoctorSearch from './Components/BookingConsultation/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation'; // Import Sign Up component
import Sign_Up from './Components/Sign_Up/Sign_Up'; // Import Sign Up component
import Login from './Components/Login/Login'; // Import Login component
import Notification from './Components/Notification/Notification';
import Reviews from './Components/Reviews/Reviews';
import ProfileForm from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

// Define the App component as the main application entry point
function App() {

  // No useEffect or state used in this component for now

  // Return the JSX for the App component
  return (
    <div className="App">

      {/* Wrap the application with BrowserRouter from react-router-dom */}
      <BrowserRouter>
        <Notification>
        {/* Render the Navbar component at the top of every page */}
            <Navbar /> 
        {/* Define routes for different pages using Routes and Route components */}
            <Routes>
                <Route path="/" element={<Landing_Page />} /> {/* Route for home page */}
                <Route path="/booking-consultation" element={<BookingConsultation />} /> {/* Route for searching doctors */}
                <Route path='/finddoctor' element={<FindDoctorSearch />} />
                <Route path="/instant-consultation" element={<InstantConsultation />} /> {/* Route for instant consultation page */}
                <Route path="/login" element={<Login />} /> {/* Route for login page */}
                <Route path="/signup" element={<Sign_Up />} /> {/* Route for sign up page */}
                <Route path="/reviews" element={<Reviews />} /> {/* Route for sign up page */}
                <Route path='/profile' element={<ProfileForm />} />
                <Route path='/reports' element={<ReportsLayout />} /> 
            </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;
