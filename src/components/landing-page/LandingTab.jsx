'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Use next/image for optimized image handling
import left from '@public/Images/landing/tab/left.png';
import right from '@public/Images/landing/tab/right.png';

const tabContent = {
    SEO: {
        heading: "Increase your organic traffic with fully enabled Search Engine Optimization",
        features: [
            "Keyword Research",
            "Content Generation",
            "Back-linking",
            "Technical SEO",
            "Local SEO"
        ]
    },
    Email: {
        heading: "Increase your organic traffic with fully enabled Search Engine Optimization",
        features: [
            "Keyword Research",
            "Content Generation",
            "Back-linking",
            "Technical SEO",
            "Local SEO"
        ]
    },
   Marketing: {
        heading: "Increase your organic traffic with fully enabled Search Engine Optimization",
        features: [
            "Keyword Research",
            "Content Generation",
            "Back-linking",
            "Technical SEO",
            "Local SEO"
        ]
    },
};

const tabs = Object.keys(tabContent);

const LandingTab = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0); // Track the active tab index
    const activeTab = tabs[activeTabIndex];

    const handleNext = () => {
        setActiveTabIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    };

    const handlePrev = () => {
        setActiveTabIndex((prevIndex) => (prevIndex - 1 + tabs.length) % tabs.length);
    };

    return (
        <div className='landing-tab'>
            <div className='landing-tab-container'>
                <div className='landing-tab-heading'>
                    <h2>Unify your marketing process</h2>
                </div>
                <div className='landing-tab-contents'>
                    {/* Desktop Tabs */}
                    <div className='landing-tab-options'>
                        {tabs.map((tab, index) => (
                            <div
                                key={tab}
                                className={`landing-tab-option-box ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTabIndex(index)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Navigation */}
                    <div className='landing-tab-navigation'>
                        <div  className="tab-image" onClick={handlePrev} disabled={activeTabIndex === 0}>
                            <Image src={left} alt="Previous" />
                        </div>
                        <div className='landing-tab-navigation-box'>
                            {activeTab}
                        </div>
                        <div className="tab-image" onClick={handleNext} disabled={activeTabIndex === tabs.length - 1}>
                            <Image src={right} alt="Next" />
                        </div>
                    </div>

                    {/* Display active tab content */}
                    <div className='landing-tab-option-content'>
                        <div className='landing-tab-option-content-heading'>
                            <h3>{tabContent[activeTab].heading}</h3>
                        </div>
                        <div className='landing-tab-option-content-keys'>
                            <h4>Features</h4>
                            <ul>
                                {tabContent[activeTab].features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingTab;
