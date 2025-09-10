import React from 'react'
import PropsPractice from '../PropsPractice/PropsPractice'
import './Home.css'
const Home = () => {
  return (
    <div>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230926163338/Java-Full-Stack.png" alt="Full Stack" className='w-full' />
      <br /><br />
      <p style={{color:'red'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi cumque quos similique, delectus repellendus, reiciendis animi saepe voluptate temporibus sapiente harum aliquam quia, alias exercitationem minima soluta deserunt unde.</p>
      <PropsPractice abc='home' xyz='home.com' />
    </div>
  )
}

export default Home
