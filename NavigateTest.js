import React from 'react'
import { useNavigate } from "react-router";


function NavigateTest() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }  


  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default NavigateTest
