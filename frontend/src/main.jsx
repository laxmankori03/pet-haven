import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter , Route, Routes } from "react-router-dom";
import HomeWrap from './pages/home/HomeWrap.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import { CookiesProvider } from 'react-cookie';
import { UserProvider } from './context/userContext.jsx';
import UserDashboard from './pages/userDashboard/UserDashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
    <UserProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/api/home' element={ <HomeWrap/>}/>
    <Route path='api/login' element={<Login/>}/>
    <Route path='api/signup' element={<Signup/>}/>
    <Route path='api/user/dashboard' element={<UserDashboard/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </UserProvider>
    </CookiesProvider>
  </StrictMode>,
)
