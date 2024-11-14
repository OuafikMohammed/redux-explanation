import './App.css'
import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { increment , decrement } from './Redux/Actions/action';
function App() {
  const count = useSelector(state => state.count );
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())} className='text-white bg-green-600'>increment</button>
      <button onClick={()=>dispatch(decrement())} className='text-white bg-red-600'>decrement</button>
    </>
  )
}

export default App
