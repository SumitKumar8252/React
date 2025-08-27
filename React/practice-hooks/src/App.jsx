import { useState } from 'react'
import './App.css'
import FetchData from './components/FetchData'
import TimerComponent from './components/TimerComponent'


function App() {
  const [show, setShow] =useState(false)

  return(
    <>
      {/* <FetchData /> */}

      {show && <TimerComponent />}
      <button onClick={()=> setShow(!show)}>Show Timer </button>
      
    </>
  )
}

export default App
