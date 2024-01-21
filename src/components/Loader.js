import React from 'react'
import Bhau from '../assests/bhau.jpg';

export default function Spinner() {
  return (
    <div>
        <img src={Bhau} alt="bhau" className='loader' />
    </div>
  )
}
