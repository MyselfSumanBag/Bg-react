import React, { useState } from 'react'

function App() {
  const [color,setColor] =useState('black')
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center flex-wrap' style={{backgroundColor:color}}>
        <div className='fixed bottom-12  rounded-3xl flex flex-wrap justify-center items-center gap-3'>
          <button className='px-6 py-3 rounded-full' style={{backgroundColor:'red'}}
            onClick={() => setColor("red")}
          >Red</button>
          <button className='px-6 py-3 rounded-full' style={{backgroundColor:'green'}}
            onClick={() => setColor("green")}
          >Green</button>
          <button className='px-6 py-3 rounded-full' style={{backgroundColor:'blue'}}
            onClick={() => setColor("blue")}
          >Blue</button>
          <button className='px-6 py-3 rounded-full' style={{backgroundColor:'pink'}}
            onClick={() => setColor("pink")}
          >Pink</button>
          <button className='px-6 py-3 rounded-full' style={{backgroundColor:'orange'}}
            onClick={() => setColor("orange")}
          >Orange</button>
          <button className='px-6 py-3 rounded-full' style={{backgroundColor:'aqua'}}
            onClick={() => setColor("aqua")}
          >Aqua</button>
          <button className='px-6 py-3 rounded-full' style={{backgroundColor:'crimson'}}
            onClick={() => setColor("crimson")}
          >Crimson</button>
          <button className='px-6 py-3 rounded-full' style={{backgroundColor:'skyblue'}}
            onClick={() => setColor("skyblue")}
          >Sky Blue</button>
          <button className='px-6 py-3 rounded-full' style={{backgroundColor:'salmon'}}
            onClick={() => setColor("salmon")}
          >Salmon</button>
          <button className='px-6 py-3 rounded-full' style={{backgroundColor:'grey'}}
            onClick={() => setColor("grey")}
          >Grey</button>
          <button className='px-6 py-3 rounded-full' style={{backgroundColor:'maroon'}}
            onClick={() => setColor("maroon")}
          >Maroon</button>
          
        </div>
      </div>
    </> 
    
  )
}

export default App