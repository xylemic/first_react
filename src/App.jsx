import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './component/Hello/Hello'
import Counter from './component/Counter/Counter'
import Welcome from './component/Welcome/Welcome'
import Header from './component/Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 

  return (
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App



//  {

//         <Welcome />
//         // users.map(item => <Hello user = {item} key = {item.id}/>)
//         // users.map(item => <Hello key= {item} name = {item} color= 'blue'/>)
//       }
//       {/* <Counter /> */}
//       {/* <Hello name = {myName1} color = 'brown'/>
//       <Hello name = {myName2} color = 'burlywood'/> */}

/*
 const myName1 = 'Daniel Johnson';
  const myName2 = 'Uzoamaka Nweze';

  // const users = ["Goodness", "Daniel", "Jacob"]

  const users = [
    {
      name: 'Goodness',
      color: 'brown',
      city: 'Port-harcourt',
      id: 0
    },
    {
      name: 'Daniel',
      color: 'blue',
      city: 'Port-harcourt',
      id: 1
    },
    {
      name: 'Jacob',
      color: 'green',
      city: 'New York',
      id: 2
    },
    {
      name: 'Uzoamaka',
      color: 'yellow',
      city: 'Lekki',
      id: 3
  }
  ]

  */