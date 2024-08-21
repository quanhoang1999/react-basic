import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(" ");
    const navigate = useNavigate(); // Khởi tạo hàm điều hướng
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lưu dữ liệu vào localStorage
        localStorage.setItem('email', JSON.stringify({ email, password }));
        // Điều hướng đến trang Home
        navigate('/home');
    };
    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username or Email' value={email} onChange={(even) => setEmail(even.target.value)} required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' value={password} onChange={(even) => setPassword(even.target.value)} required />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button className={email && password ? "active" : ""} disabled={email && password ? false : true} type='submit'>Login</button>

                <div className="register-link">
                    <p>Don't have an acount? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login