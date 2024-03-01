import './App.css'
import SignInPage from './components/SignInSignUp'
import HomePage from './components/HomePage'
import AdminDashBoard from './components/AdminDashBoard'
import AdminPage from './pages/AdminPage'
import userLoginAuth from './authentication/userLoginAuth'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserProfile from './components/UserProfile'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/user' element={<UserProfile/>} />
          <Route path='/editProfile' element={<HomePage />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
