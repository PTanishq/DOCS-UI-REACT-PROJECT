import React from 'react'
import Background from './Components/Background';
import Foreground from './Components/Foreground';
function App() {
  return (
    <div id='full' className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App