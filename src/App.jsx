import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './component/Hello/Hello'

function App() {
  const myName1 = 'Daniel Johnson';
  const myName2 = 'Uzoamaka Nweze';

  return (
    <div>
      <Hello name = {myName1} color = 'brown'/>
      <Hello name = {myName2} color = 'burlywood'/>
    </div>
  )
}

export default App
