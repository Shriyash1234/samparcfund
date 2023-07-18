import React from 'react'
import Header from './header'
import Landing from './landing'
import Charityoptions from './charityoptions'
import Middle from './middle'
const Home = () => {
  return (
    <div className='Home'>
        <Header/>
        <Landing/>
        <Charityoptions/>
        <div className='big-circle'/>
        <Middle/>
    </div>
  )
}

export default Home
