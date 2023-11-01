import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
// import { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
import { Result } from 'postcss';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  // const{signIn}=useContext(AuthContext)
  const {signIn}=useAuth()
  const location =useLocation()
  const navigate =useNavigate()
  console.log(location.pathname)
  const handleLogin =e=>{
    e.preventDefault()
    const form =e.target 
    const email =form.email.value 
    const password =form.password.value 
    
    console.log(email,password)
    signIn(email,password)
    .then(result=>{
      console.log(result.user)    
    })
    .catch(error=>{
      console.error(error)
    })
  }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left w-1/2">
      
      <img src={loginImg} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl text-center font-bold">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
     
      <div className="text-center py-5">
   <h2>Don't  have a Account <Link to='/signup'><span className="font-bold">SignUp</span></Link></h2>
            </div>
    </div>
  </div>
</div>
    );
};

export default Login;