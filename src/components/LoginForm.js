import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let { username, password } = input;
    if ((username === 'admin') & (password === 'admin')) {
      let token = 12345;
      localStorage.setItem('token', token);
      localStorage.setItem('isAdmin', true);

      navigate('/home');
    } else {
      axios
        .post(`https://fakestoreapi.com/auth/login`, { username, password })
        .then((res) => {
          let { token } = res.data;

          localStorage.setItem('token', token);
          console.log('login berhasil dengan token: ', token);
          navigate('/home');
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <p>Klik the button to login</p>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <br />
        <input
          value={input.username}
          onChange={handleInput}
          type={'text'}
          name='username'
        />
        <br />
        <label>Password</label>
        <br />
        <input
          value={input.password}
          onChange={handleInput}
          type={'password'}
          name='password'
        />
        <br />
        <br />

        <input type={'submit'} />
      </form>
    </div>
  );
};

export default LoginForm;
