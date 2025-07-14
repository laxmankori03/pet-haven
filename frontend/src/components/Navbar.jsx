import React, { useState,useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import "../index.css"
import {Link} from 'react-router-dom';
import { useUser } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Navbar = () => {
  const navigate = useNavigate();
   const [user, setUser] = useState(null);
  const {logout, loading} = useUser();

 
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          'http://localhost:8080/api/auth/verify',
          {},
          { withCredentials: true }
        );
        if (data.status) {
          setUser(data.user); // Save user data from backend
        }
      } catch (err) {
        console.log("User not logged in", err);
      }
    };

    verifyUser();
  }, []);
   if (loading) return <p>Loading...</p>;
  const handleLogout = () =>{
    logout();
    navigate("/api/login");
  }
  return (
    <nav className="navbar navbar-expand-lg px-4 py-3" style={{backgroundColor:"var(--card-bg)",
        color:"var(--text)",
        transition: "background-color 0.3s ease"
    }}>
       <Link className="navbar-brand fw-bold text-decoration-none" to="/api/home" style={{ color: "var(--primary)" }}>
        🐾 Pet Haven
      </Link>

      <div className="ms-auto d-flex gap-3 align-items-center">
        <Link to="api/home" className='nav-link' style={{color:"var(--text)"}}>
        Home
        </Link>
{
  user ? (
  <>
        <Link to="api/user/dashboard" className='nav-link' style={{color:"var(--text)"}}>Dashboard</Link>
         <button onClick={handleLogout}>Logout</button>
        </>
  ):(
 <>
            <Link to="api/login"><button>Login</button></Link>
            <Link to="api/signup"><button>Signup</button></Link>
          </>
  )
}
      
  <ThemeToggle/>

       
      </div>
    </nav>
  )
}

export default Navbar
