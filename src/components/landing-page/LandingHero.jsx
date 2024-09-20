'use client'

import React, { useState } from 'react';
import { ref, push } from "firebase/database";
import { database } from '@firebase'; // Adjust the import path accordingly

const LandingHero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      const emailRef = ref(database, 'landingpage-formdata');
      await push(emailRef, { email });

      setIsSubmitted(true);
      setEmail(''); // Clear input field
      setError('');
    } catch (err) {
      console.error("Error saving data to Firebase", err);
      setError('Error submitting form. Please try again later.');
    }
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
        {isSubmitted ? (
          <p>Thank you for joining the beta!</p>
        ) : (
          <form onSubmit={handleSubmit} className='landing-hero-form'>
            <input
              type="email"
              placeholder='Enter your email ID. Join beta'
              value={email}
              onChange={handleInputChange}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Get Started</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LandingHero;
