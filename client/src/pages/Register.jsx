import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file
import jumbo from '../assets/jumbo.png'
import dina from '../assets/dina.png'

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    try {
      const { data } = await axios.post('/register', {
        name,
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ name: '', email: '', password: '' });
        toast.success('Registration successful. You can now log in.');
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div className='image-div1'>
        <img src={jumbo} alt="" />
      </div>
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={registerUser}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name..."
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit" className="register-btn">
          Submit
        </button>
        <span>already have an account ? <Link to="/login" className="l-link">Login</Link></span>
      </form>
    </div>
    <div className='image-div2'>
        <img src={dina} alt="" />
      </div>
    </div>
  );
}
