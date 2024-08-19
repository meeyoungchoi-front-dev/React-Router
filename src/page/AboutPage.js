import React from 'react'
import { useNavigate } from 'react-router'

const AboutPage = () => {
 const navigate = useNavigate();
 const  goToHompage  = () => {
    navigate('/');
 }


  return (
    <div>
      <h1>About Page</h1>
      <button onClick={goToHompage}>Go To Homepage</button>
    </div>
  )
}

export default AboutPage