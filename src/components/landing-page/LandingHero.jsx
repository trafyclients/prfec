'use client';

import React, { useState, useEffect, useRef } from 'react';

const LandingHero = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter an email address.");
      setShowPopup(true);
      return;
    }

    try {
      const response = await fetch('https://landingpage-formdata-default-rtdb.firebaseio.com/landingpage-formdata.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for joining our beta!");
        setEmail('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setMessage("Error submitting the form. Please try again later.");
    }

    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='landing-hero'>
      <div className='landing-hero-container'>
        <div className='landing-hero-heading'>
          <h1>Increase your marketing performance on the go</h1>
        </div>
        <div className='landing-hero-para'>
          <p>Write a blog, do keyword research, measure your analytics all in one place. Gain more insights on your marketing performance.</p>
        </div>
        <form onSubmit={handleSubmit} className='landing-hero-form'>
          <input
            type="email"
            placeholder='Enter your email ID. Join beta'
            value={email}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Get Started</button>
        </form>
      </div>

      {showPopup && (
        <div ref={popupRef} style={popupStyle}>
          <span>{message}</span>
          <button style={closeButtonStyle} onClick={handleClosePopup}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

const popupStyle = {
  position: 'fixed',
  top: '20px',
  left: '20px',
  padding: '8px 14px',
  backgroundColor: '#4c4c4c',
  color: 'white',
  borderRadius: '8px',
  zIndex: '1000',
  width: '300px',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
  alignItems: 'center',
  fontFamily:"Lato"
};

const closeButtonStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  border: 'none',
  fontSize: '18px',
  cursor: 'pointer',
  marginLeft: '10px',
};

export default LandingHero;
