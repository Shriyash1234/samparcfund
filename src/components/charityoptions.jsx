import React from 'react'
import './CSS/charityoptions.css'
const Charityoptions = () => {
  return (
    <section className='charityoptions'>
        <h1 className='charityoptions-title'>We Serve <span>The Humanity</span> </h1>
        <p className='charityoptions-text'>The practice of charity means the voluntary giving of help to those in need as a humanitarian act. There are a number of philosophies about
            charity. Often associated With religion. Effective altruism is the of evidence and reasoning to determine the most
            effective ways to help others.</p>
        <div className='charity-options'>
            <div className='charity-option'>
                <img className='charity-option-icon' src={require('./Assests/Images/Icons/book.png')}></img>
                <p className='charity-option-text'>Charity for Education</p>
                <p className='charity-option-text-long'>Unlock potential through education. Donate now to empower future generations.</p>
            </div>
            <div className='charity-option'>
                <img className='charity-option-icon' src={require('./Assests/Images/Icons/health.png')}></img>
                <p className='charity-option-text'>Charity for Health</p>
                <p className='charity-option-text-long'>Transform lives with your donation. Support health initiatives and make a difference.</p>
            </div>
            <div className='charity-option'>
                <img className='charity-option-icon' src={require('./Assests/Images/Icons/startup.png')}></img>
                <p className='charity-option-text'>Charity for Startup</p>
                <p className='charity-option-text-long'>Support the dreams of aspiring entrepreneurs by making a donation to fuel their startup journey.</p>
            </div>
            <div className='charity-option'>
                <img className='charity-option-icon' src={require('./Assests/Images/Icons/ngo.png')}></img>
                <p className='charity-option-text'>Charity for NGO</p>
                <p className='charity-option-text-long'>Your contribution can change lives. Help us make a lasting impact through your donation to the NGO</p>
            </div>
        </div>
        <button className='get-started charityoptions-but'>Discover More</button>  
    </section>
  )
}

export default Charityoptions
