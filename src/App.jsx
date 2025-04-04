import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { About } from "./components/About";
import Login from "./components/Login";
import { Contact } from "./components/Contact";


function App() {
  const [count, setCount] = useState(1)
  const [data, setData] = useState([])


  function Fetchapi() {
    fetch(`https://randomuser.me/api/?results=50&nat=in`)
      .then((res) => res.json())
      .then((res) => setData(res.results))
    }
    console.log(data)

  useEffect(() => {
    Fetchapi()
  }, [count])


  const [login, setLogin] = useState(false)

  const navigate = useNavigate()


  useEffect(() => {
    !JSON.parse(sessionStorage.getItem("login")) ? navigate('/') : ``
  }, [])
  return (
    <>

      <Navbar login={login} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Login setLogin={setLogin} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product data={data}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>




    </>
  )
}

export default App
