import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [label, setLabel] = useState("A Button")

  const texts = [
    "Button-1",
    "Button-2",
    "Button-3",
    "Button-4",
    "Button-5",
    "Button-6"
  ];

  function changeBtnLabel(){
    const randomIndex = Math.floor(Math.random() * texts.length);
    setLabel(texts[randomIndex]);  
  }

  return (
    <div>
      <p><button id="dynamicbtn" className="logo" onClick={changeBtnLabel}>{label}</button></p>
    </div>
  )
}

export default App
