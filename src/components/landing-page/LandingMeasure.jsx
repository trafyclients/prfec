import React from 'react'

const LandingMeasure = () => {
  return (
    <div className='landing-measure'>
        <div className='landing-measure-container'>
            <div className='landing-measure-heading'>
                <h2>Measure your Efficiency and Results</h2>
            </div>
            <div className='landing-measure-contents'>
                <div className='landing-measure-box' style={{backgroundColor:"#FF844B"}}>
                    <h4>100%</h4>
                    <p>Curated Original Content</p>
                </div>
                <div className='landing-measure-box' style={{backgroundColor:"#7E66F4"}}>
                    <h4>10x</h4>
                    <p>Lead 
                    Generation</p>
                </div>
                <div className='landing-measure-box' style={{backgroundColor:"#FA96A9"}}>
                    <h4>ONE</h4>
                    <p>AI Tool</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingMeasure