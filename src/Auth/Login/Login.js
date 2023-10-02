import React, { useState } from 'react';
import './login.css';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const input_element = [

    {
      id: 1,
      title:"Email",
      name: "email",
      values: "",
      type: "email",
      placeholder:"exx: john@deo.com"
    },
    {
      id: 2,
      title:"Password",
      name: "password",
      values: "",
      type: "password",
      placeholder:"********"
    },
  ]

  const handleLogin = () => {
    if (email === 'dilanetalom8@gmail.com' && password === 'dil20206@') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };


  return (
    <div className='container'>
      <div className='content'>
        <div>
        <div className='title_login'>
          Welcome back!
         </div>
         <div className='subtitle_login'>Please sign in to continue </div>
         {error && <p className='error'>{error}</p>}
        </div>
        {
          input_element.map((item) => {
            return (
              <div className='input_container'key={item.id}>
                <label>{item.title}</label>
                <input type={item.type} 
                name={item.name}
                placeholder={item.placeholder} />
              </div>
            )
          })
        }
        <div className='container_button'>
          <button onClick={handleLogin}>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Login