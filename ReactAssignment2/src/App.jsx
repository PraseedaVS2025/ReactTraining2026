import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainForm from './MainForm.jsx'
import Header from './Header.jsx'
import UserForm from './UserForm.jsx'
import UserList from './UserList.jsx'
import Footer from './Footer.jsx'

function App() {
  
  const [users, setUsers] = useState([
      { id: 1, name: 'John Doe', age: 30, state: 'Kerala' },
      { id: 2, name: 'Jane Smith', age: 25, state: 'Tamil Nadu' },
      { id: 3, name: 'Alice Johnson', age: 28, state: 'Karnataka' },
      { id: 4, name: '', age: '', state: '' }
    ]);

  return (
    <>        
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainForm />} />
        <Route path="/add-user" element={<UserForm users={users} setUsers={setUsers} />} />        
        <Route path="/list-users" element={<UserList users={users} setUsers={setUsers} /> } />  
      </Routes>
    </BrowserRouter>      
    <Footer />
    </>
  )
}

export default App
