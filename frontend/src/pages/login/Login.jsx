import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useCookies } from 'react-cookie';
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email:"",
    password:"",
  });

 

   const {email, password} = inputValue;

  const handleOnChange = (e)=>{
    const {name,value} = e.target;
    setInputValue({
      ...inputValue,
      [name]:value
    })
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

     const handleOnSubmit = async(e)=>{
    e.preventDefault();

    try {
        const {data} = await axios.post("http://localhost:8080/api/auth/login",{
          ...inputValue,
        },{withCredentials:true});

        const {success,message} = data;
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            navigate("/api/user/dashboard",{replace:true})
          }, 1000);
        }else{
          handleError(message);
        }
        
    } catch (error) {
      console.log(error);
      
    }

    setInputValue({
      ...inputValue,
      email:"",
      password:"",
    })
  };

  
  return (
  <div className="container">
    <h1 className='text-center mt-5 fw-bold'>Login</h1>
 <form onSubmit={handleOnSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input value={email} name='email' onChange={handleOnChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{backgroundColor:"var(--card-bg)",color:"var(--text)"}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value={password} name='password' onChange={handleOnChange}  type="password" className="form-control" id="exampleInputPassword1"  style={{backgroundColor:"var(--card-bg)",color:"var(--text)"}}/>
  </div>
  <button type="submit" className='mb-3'>Submit</button>
    <div>
    <Link>
  <button> Or sign in with Google </button>
    </Link>
    </div>
    <ToastContainer/>
</form>
  </div>
  )
}

export default Login
