import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file
import jumbo from '../assets/jumbo.png'
import dina from '../assets/dina.png'

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const { data } = await axios.post('/login', {
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ email: '', password: '' });
        window.location.href = 'http://127.0.0.1:5501/client/interactive-play/index.html';
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className='image-div1'>
        <img src={jumbo} alt="" />
      </div>
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={loginUser}>
      <label>Email</label><br/>
        <input
          type="email"
          placeholder="Enter your email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <br />
        <label>Password</label><br />
        <input
          type="password"
          placeholder="Enter your password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <br />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
    <div className='image-div2'>
        <img src={dina} alt="" />
      </div>
    </div>
  );
}
