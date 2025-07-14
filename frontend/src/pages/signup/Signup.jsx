import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
const Signup = () => {
    const navigate = useNavigate();
    const [isShowPassword,setIsShowPassword] = useState(false);
    const [inputValue, setInputValue] = useState({
        name:"",
        email:"",
        password:"",
        role:"user"
    })
     const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        try {
            const {data} = await axios.post(
                "http://localhost:8080/api/auth/signup",
                {
                    ...inputValue
                },
                { withCredentials: true }
            );
            const {success, message} = data;
            if (success) {
                handleSuccess(message);
                setTimeout(()=>{
                    navigate("/api/user/dashboard");
                },1000);
            }else{
                handleError(message);
            }

            setInputValue({
                ...inputValue,
                name:"",
                email:"",
                password:"",
                role:"user",
            })
            console.log(success);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const {name, email, password, role} = inputValue;
    const handleOnChange = (e)=>{
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]:value,
        });
    }

    const handleIsShowPassword = ()=>{
        isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true);
    }

  return (
  <div className="container">
    <h1 className='text-center mt-5 fw-bold'>Sign Up</h1>
 <form onSubmit={handleFormSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input value={name} onChange={handleOnChange} type="text" className="form-control" id="exampleInputName1" style={{backgroundColor:"var(--card-bg)",color:"var(--text)"}} name='name'/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input value={email} onChange={handleOnChange} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{backgroundColor:"var(--card-bg)",color:"var(--text)"}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value={password} onChange={handleOnChange} name='password' type={isShowPassword ? "text" : "password"} className="form-control" id="exampleInputPassword1"  style={{backgroundColor:"var(--card-bg)",color:"var(--text)"}}/>
    <button type='button' className='mt-3' onClick={handleIsShowPassword}>{isShowPassword ? "Hide Password" : "See Password"}</button>
  </div>
    <label className="form-label" htmlFor='role'>Select Role</label>
  <select value={role} name='role' onChange={handleOnChange}  id='role' className="form-select" aria-label="Default select example" style={{backgroundColor:"var(--card-bg)",color:"var(--text)"}}>
  <option defaultValue="user" >User</option>
  <option value="admin"> Admin</option>
</select>
  <button type="submit" className='my-3'>Submit</button>
    <div>
    <Link>
  <button> Or sign in with Google </button>
    </Link>
    </div>
</form>
<ToastContainer/>
  </div>
  )
}

export default Signup
