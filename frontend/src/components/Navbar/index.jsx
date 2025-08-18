import { fetchUser } from '@/config/redux/action/authAction';
import { clearAuthMessage, logout, setIsNotTokenThere } from '@/config/redux/reducer/authReducer';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Navbar = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    dispatch(fetchUser());
    dispatch(clearAuthMessage())
  }, []);

  const handleLogOut = () => {
    if (authState.isTokenThere) {
      dispatch(logout());
      localStorage.removeItem('token');
      toast.success("Logged out successfully");
      router.push('/login');
    }
  }
   if (!hasMounted) return null;
  return (
   <nav className="navbar navbar-expand-lg bg-darkcard" >
  <div className="container d-flex justify-content-between">
 <a className="navbar-brand fw-semibold" href="#" style={{color:"#4DD0E1"}}>
      Pet Haven
    </a>
    
      <div className='d-flex'>
      {(authState.isLoggedIn && localStorage.getItem("token")) ?
      (<><ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href="/" className='nav-link text-white'>
          Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href={authState.user?.role === "user" ? "/user/dashboard":"/admin/dashboard"} className='nav-link text-white'>
          DashBoard
          </Link>
        </li>
      </ul>
       <button className='btn btn-primary' onClick={handleLogOut}>Log Out</button></>) :
      (
        <>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href="/" className='nav-link text-white'>
          Home
          </Link>
        </li>
      </ul>
      <div className='d-flex gap-2'>
         <Link href="/login">
      <button className='btn btn-primary'>
        Login
        </button>
        </Link>
     <Link href='/signup'>
      <button className='btn btn-primary'>Sing Up</button>
     </Link> 
      </div>
      </>)
      }
      
      </div>
    </div>
</nav>

  )
}

export default Navbar
