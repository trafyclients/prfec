import React from 'react'
import Image from 'next/image'
import Amazon from '@public/Images/landing/partner/amazon.svg'
import Mailchimp from '@public/Images/landing/partner/mailchimp.svg'
import Meta from '@public/Images/landing/partner/meta.svg'
import Razorpay from '@public/Images/landing/partner/razorpay.svg'

const LandingPartner = () => {
  return (
    <div className='landing-partner'>
        <div className='landing-partner-container'>
            
            <div className='landing-partner-heading'>
                <h2>Partnered with world’s Leading companies</h2>
            </div>
            
            <div className='landing-partner-contents'>
                <div className='landing-partner-box'>
                    <Image src={Amazon} />
                </div>
                <div className='landing-partner-box'>
                    <Image src={Mailchimp} />
                </div>
                <div className='landing-partner-box'>
                    <Image src={Meta} />
                </div>
                <div className='landing-partner-box'>
                    <Image src={Razorpay} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPartner