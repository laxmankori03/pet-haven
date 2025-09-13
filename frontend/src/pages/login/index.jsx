import { loginUser } from '@/config/redux/action/authAction';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Login = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const authState = useSelector((state) => state.auth);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

     const handleSubmit = async(e) => {
        e.preventDefault();
       dispatch(loginUser({ email, password }));
    }

    useEffect(()=>{
        if(authState.isLoggedIn && localStorage.getItem('token')){
          toast.success(authState.message || "Login successful");

          if (authState.user?.role === 'admin') {
            router.push('/admin/dashboard');
          }else{
            router.push('/user/dashboard');
          }
        }
    },[authState.isLoggedIn, authState.user, authState.token, router]);

   useEffect(() => {
     if (authState.error) {
       toast.error(authState.error);
     }
   }, [authState.error]);
   
    
  return (
     <div class="container d-flex justify-content-center align-items-center text-light" style={{height: "90vh"}}>
  <form class="bg-darkcard p-4 rounded shadow" style={{width: "100%", maxWidth: "450px"}} onSubmit={handleSubmit}>
    <h2 class="mb-4 text-center" style={{color:"#4DD0E1"}}>Welcome Back 🐾</h2>

    <div class="mb-3">
      <label class="form-label">Email address</label>
      <input type="email" class="form-control" placeholder="name@example.com" name='email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
    </div>


    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" placeholder="********" name='password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
    </div>

    {authState.loading ? (
      <button class="btn btn-primary w-100 mt-2" type="button" disabled>
  <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
  Loading...
</button>
    ):(<button type="submit" class="btn btn-primary w-100 mt-2">Login</button>)}

    <p class="text-center mt-3 text-white">Don't have an account? <Link href="/signup">Register</Link></p>
  </form>
</div>
  )
}

export default Login
