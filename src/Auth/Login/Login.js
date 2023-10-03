import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if (email === 'dilanetalom8@gmail.com' && password === 'dil20206@') {
      navigate('/Dashboard')
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };


  return (
    <div className='container'>
      <form className='content' onSubmit={handleLogin}>
        <div>
        <div className='title_login'>
          Welcome back!
         </div>
         <div className='subtitle_login'>Please sign in to continue </div>
         {error && <p className='error'>{error}</p>}
        </div>
      
              <div className='input_container'>
                <label>Email</label>
                <input type="email" 
                name={email}
                placeholder="exx: john@deo.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
              
              </div>
              <div className='input_container'>
                <label>Password</label>
                <input type="password" 
                name={password}
                placeholder="********"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
              
              </div>
         
        <div className='container_button'>
          <button type='submit'>LOGIN</button>
        </div>
      </form>
    </div>
  )
}

export default Login