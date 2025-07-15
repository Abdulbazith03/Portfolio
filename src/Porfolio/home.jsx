import React, { useState, useEffect } from 'react';
import './port.css';
import img from '../assets/bazith.jpeg'

const Home = () => {
  const [isFrontend, setIsFrontend] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFrontend(prev => !prev); 
    }, 2000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div id="home"  className="home-section container my-5 " >
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>I am Abdul Bazith</h1>
          <h1 className='text-role'>
            {isFrontend ? 'Frontend Developer' : 'Backend Developer'}
          </h1>
          <p className='home-para'>
            I am Abdul Bazith, a professional Web Developer with a passion for
            building responsive and dynamic web applications. With extensive
            experience in HTML, CSS, JavaScript, and frameworks like React, I
            am committed to delivering high-quality web solutions for my clients.
          </p>
          <button className='cv'>Download Cv</button>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ height: '100%'}}>
          <img src={img} alt="Profile" className="img-fluid " />
        </div>
      </div>
    </div>
  );
};

export default Home;
