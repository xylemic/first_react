import React from 'react'
import './Hello.css'

function Hello({ name, color }) {
  return (
    <div className='hello-container'>
      <h2>Hello {name}</h2>
      <p>Your favorite color is: {color}</p>
    </div>
  )
}

export default Hello