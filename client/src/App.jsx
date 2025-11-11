import { BrowserRouter as Router} from "react-router-dom";
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { NavBar } from './Components/NavBar'


function App() {
  const [data, setData] = useState([])  

  useEffect(()=>{
    fetch('http://localhost:8080/Test')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  },[])

  return (
    <>
    <Router>
      <NavBar />
    </Router>
      
    </>
  )
}

export default App
