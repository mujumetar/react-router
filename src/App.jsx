import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { Contact } from "./components/Contact";


function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")


  function handleuser() {
    if (username == "muju" || password == "1234") {
      console.log(username , password);
    }

  }


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login handleuser={handleuser} setUsername={setUsername} setPassword={setPassword}/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
