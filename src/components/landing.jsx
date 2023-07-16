import React from 'react'
import './CSS/landing.css'
const Landing = () => {
  return (
    <section className='landing'>
        <div className='landing-text'>
            <p className='landing-quote'>Empower childern through<br/><span>Education</span></p>
            <p className='landing-quote-long'>Education charities provide other educational services and opportunities that help make schools more effective and accessible to students of all backgrounds</p>
            <div className='points'>
                <p className='point'><img src={require('./Assests/Images/Icons/tick.png')}/>&nbsp; Funds go to directly to charity</p>
                <p className='point'><img src={require('./Assests/Images/Icons/tick.png')}/>&nbsp; No goal requirements</p>
            </div>
            <div className='points'>
                <p className='point'><img src={require('./Assests/Images/Icons/tick.png')}/>&nbsp; No fundraising deadlines</p>
                <p className='point'><img src={require('./Assests/Images/Icons/tick.png')}/>&nbsp; Best customer support ever</p>
            </div>
            <button className='get-started'>Get Started</button>
        </div>
        <div className='landing-picture'>
            <img className='landing-pic' src={require('./Assests/Images/landing-picture.jpeg')}/>
        </div>
    </section>
    
  )
}

export default Landing
