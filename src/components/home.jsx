import React from 'react'
import Header from './header'
import Landing from './landing'
import Charityoptions from './charityoptions'
const Home = () => {
  return (
    <div className='Home'>
        <Header/>
        <Landing/>
        <Charityoptions/>
        <div className='big-circle'/>
    </div>
  )
}

export default Home
