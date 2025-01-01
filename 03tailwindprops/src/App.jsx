import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import suru from './assets/suru.jpg'
import aryan from './assets/aryan.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 rounded-xl text-black p-4 mb-4'>Tailwind React</h1>
     <Card userName="Aryan Wankhede" imgSrc={aryan}/>
     <Card userName="Surpreet Kaur" imgSrc={suru}/>
    </>
  )
}

export default App
 