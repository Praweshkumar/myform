import { useState } from 'react'
import './App.css'
import SHA256 from "crypto.js/sha256"
import axios  from "axios"

function App() {
  const [count, setCount] = useState(0)
  const [email ,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit =async() =>{
   e.preventDefault();
   await
   axios.post("")
  }
  const hashed = SHA256("your text").toString();

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" placeholder='email' required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='password' required onChange={(e)=>{setPassword(e.target.value)}} />
        <button>Login</button>
      </form>
    </>
  )
}

export default App
