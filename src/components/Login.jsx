import React, { useRef, useState } from 'react';
import { useGlobalContext } from '../context/GlobalStateContext';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Login() {

    const [err,setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const { setCurrentUser } = useGlobalContext();
    // const { login } = useGlobalContext();
    const navigate = useNavigate();

    const checkLogin = (e) => {

        e.preventDefault();

        setLoading(true);
        setErr('');

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(email === 'admin@getwork.com' && password === '1234'){
            setSuccess('Logged in');
            setCurrentUser({
                email: email,
                password: password
            });
            navigate("/");
        } else {
            setSuccess('');
            setErr("Failed to Login");
        }

        setLoading(false);
    }


    const emailRef = useRef('');
    const passwordRef = useRef('');


  return (
    
    <div className='login d-flex-col'>
      
        <div className='d-flex-col'>
            <h2 className='mb-4 text-center'>welcome</h2>
            <img src={logo} alt="" className='logo' />
            <form onSubmit={
                checkLogin
            } className='d-flex-col'>
                {err && <div className='error'>{err}</div>}
                {success && <div className='success'>{success}</div>}
                <input type="email" id="email" required ref={emailRef} placeholder='Email'/>
                <input type="password" id="password" required ref={passwordRef} placeholder='Password'/>
                <button disabled={loading} type="submit">LOGIN</button>
            </form>
        </div>
  
 
    </div>
  )
}
