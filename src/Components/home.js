import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {


    const navigate = useNavigate();

    const handleLogout
        = () => {
            // Xóa dữ liệu khỏi localStorage
            localStorage.removeItem('user');
            // Điều hướng về trang Login
            navigate('/');
        };

    return (
        <div>
            <h1>Trang chủ</h1>
            <h1>Hãy nhấn đăng xuất</h1>
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
}

export default Home;