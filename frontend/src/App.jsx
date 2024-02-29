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
        <Routes>
          <Route path='/register' element={<SignInPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/admin/dashboard' element={<AdminDashBoard />} />
          <Route path='/' element={<UserProfile/>} />
          <Route path='/editProfile' element={<HomePage />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
