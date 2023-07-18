import React from 'react'
import './CSS/middle.css'
const Middle = () => {
  return (
    <section className='middle'>
      <section className='middle-up'>
        <div className='middle-up-img-div'>
          <img className='middle-up-img' src={require('./Assests/Images/landing-picture-2.jpeg')}></img>
        </div>
        <div className='middle-up-text-div'>
          <p className='middle-up-text'>Tell your story and share <br/><span>it with the world</span></p>
          <p className='middle-up-text-long'>Open the doors to possibility through your generosity. Your support has the power to transform lives, fuel dreams, and create lasting impact. Join us in making a difference by donating today. Together, we can build a brighter future for those in need.</p>
          <button className='get-started middle-but'>Read More</button>
        </div>
      </section>
      <section className='middle-down'>
        <div className='middle-down-text-div'>
          <p className='middle-up-text'>Set up your fundraiser <br/><span>for free with charity</span></p>
          <p className='middle-down-text-long'>Embrace the transformative power of giving. Your generosity can turn dreams into reality, uplift lives, and create a ripple effect of positive change. Join our community of compassionate individuals, united in making a lasting impact. Together, we can build a brighter future and empower those in need. Donate today and be a beacon of hope.</p>
          <button className='get-started middle-but'>Read More</button>
        </div>
        <div className='middle-down-img-div'>
          <img className='middle-down-img' src={require('./Assests/Images/landing-picture-3.jpg')}></img>
        </div>
      </section>
    </section>
  )
}

export default Middle
