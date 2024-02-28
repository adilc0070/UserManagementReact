import './App.css'
import SignInPage from './components/SignInSignUp'
import HomePage from './components/HomePage'
import AdminDashBoard from './components/AdminDashBoard'
import AdminPage from './pages/AdminPage'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import UserProfile from './components/UserProfile'


function App() {


  return (
    <>
      <Router>
          <h1 className='text-3xl text-white-500 font-bold underline'>hello</h1>
        <Routes>
          <Route path='/register' element={<SignInPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/admin/dashboard' element={<AdminDashBoard />} />
          <Route path='/home' element={<UserProfile/>} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
