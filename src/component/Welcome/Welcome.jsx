import React from 'react'

function Welcome() {
  //create state to hold user input
  const [username, setUsername] = React.useState('')

  const [message, setMessage] = React.useState('')


  const handleInput = (e) => {
    console.log('typing...', e.target.value)
    //e.target.value has user input in textbox 
    //store user input into state
    // setUsername(e.target.value)
  }

  //create function to handle button click
  const handleClick = () => {
    console.log('button clicked')
    //generate output message
    setMessage(`Hello, ${username}! How are you today?`);
    //clear the textbox
    setUsername('')
  }
  return (
    <div>
      <input type="text" placeholder='enter your name' value={username} onChange={(e) => setUsername(e.target.value)}/>
      <button onClick={handleClick}>Say Hello</button>
      <button onClick={() => setMessage('')}>Clear</button>
      <h3>{message}</h3>
    </div>
  )
}

export default Welcome