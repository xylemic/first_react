import { useState } from 'react';
import './Counter.css'

function Counter() {
  // let count = 1;
  // create sate for count 
  const [ count, setCount ] = useState(0);
  //onClick event
  const increment = () => {
    console.log('increment')
    // increment counter
    // count++;
    setCount(count+1);
    console.log(`count is ${count}`)
    // document.getElementById('counter').innerHTML = `Count is ${count}`;
  }

  const decrement = () => {
    console.log('decrement')
    // decrement counter
    // count--;
    setCount(count-1);
    console.log(`count is ${count}`)
    // document.getElementById('counter').innerHTML = `Count is ${count}`;
  }
  return (
    <div className='counter-container'>
      <h3 id='counter'>Count is {count}</h3>
      <button onClick = {increment}>Incrementent</button>
      <button onClick = {decrement}>Decrement</button>
    </div>
  )
}

export default Counter