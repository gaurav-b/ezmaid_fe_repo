import React from 'react';
import './App.css';
import './style.css';
import { Navbar } from './layouts/Navbar';
import { Redirect, Route } from 'react-router-dom';
import { Footer } from './layouts/Footer';
import { HomePage } from './layouts/home-page/HomePage';
import { SignUp } from './layouts/home-page/SignUp';
import { AboutUs } from './layouts/home-page/AboutUs';
import { ContactUs } from './layouts/home-page/ContactUs';
import { SignIn } from './layouts/home-page/SignIn';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />

      <div className='flex-grow-1'>
        {/* Components Routing goes here */}

        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>

        <Route path='/home'>
          <HomePage />
        </Route>

        <Route path='/signup'>
          <SignUp />
        </Route>

        <Route path='/contactus'>
          <ContactUs />
        </Route>

        <Route path='/aboutus'>
          <AboutUs />
        </Route>

        <Route path='/signin'>
          <SignIn />
        </Route>

      </div>

      <Footer />
    </div>
  );
}

export default App;
