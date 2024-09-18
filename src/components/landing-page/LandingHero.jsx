import React from 'react'

const LandingHero = () => {
  return (
    <div className='landing-hero'>
        <div className='landing-hero-container'>
            <div className='landing-hero-heading'>
                <h1>Increase your marketing performance on the go</h1>
            </div>
            <div className='landing-hero-para'>
                <p>Write a blog, do keyword research, measure your analytics all in one place. Gain more insights on your marketing performance.</p>
            </div>
            <form action="" className='landing-hero-form'>
                <input type="text" placeholder='Enter your email ID. Join beta ' />
                <button >Get Started</button>
            </form>
        </div>
    </div>
  )
}

export default LandingHero