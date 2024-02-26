import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [count, setCount] = useState('')
  useEffect(()=>{
    axios.get("http://localhost:9001").then((res)=>{
      setCount(res.data.success)
    })
  },[])
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

export default App
