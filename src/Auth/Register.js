import React from 'react'
import './Login/login.css';
import { useForm } from 'react-hook-form';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const emailvalid = /^[\w-.]+@(gmail|yahoo|outlook)\.(com|net|org)$/i;
  const passwordvalid  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  return (
    <div className='container'>
      <form className='content' onSubmit={handleSubmit(onSubmit)}>
        <div className='title'>Create an account </div>
        {errors.name && <span className='error'>This field is required</span>}
        {errors.name && errors.name.type === 'minLength' && (
          <span className='error'>name must be at least 3 characters long</span>
        )}
        {errors.email && <span className='error'>{errors.email.message}</span>}
        {errors.password && <span className='error'>{errors.password.message}</span>}
       

        <div className='input_container'>
          <label>Name</label>
          <input type="text"
            name='name'
            id='name'
            placeholder="exx: john doe"
            {...register('name', { required: true, minLength: 3 })}
          />

        </div>

        <div className='input_container'>
          <label>Email</label>
          <input type="email"
            name='email'
            placeholder="exx: john@deo.com"
            {...register('email', {
              required: true,
              pattern: {
                value: emailvalid,
                message: 'Please enter a valid email address',
              },

            })}
          />

        </div>

        <div className='input_container'>
          <label>Password</label>
          <input type="password"
            name='password'
            placeholder="********"
            {...register('password', {
              required: true,
              pattern: {
                value: passwordvalid,
                message:
                  'Password should be 8 to 16 characters long, alphanumeric, and contain at least one uppercase letter, one lowercase letter, and one special character.',
              },

            })}
          />

        </div>

        <div className='container_button'>
          <button type="submit">REGISTER</button>
        </div>
      </form>
    </div>

  )
}

export default Register