import React, { useState } from 'react'
import { useAuth } from './auth'
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState('');
    const navigate = useNavigate()
    const location = useLocation();
    const redirectPath = location.state?.path || '/'
    const auth = useAuth();
    function handleLogin(e) {
        auth.login(user)
        navigate(redirectPath, { replace: true })
    }
    console.log(auth.user)
    return (
        <div >
            <label>Username:
                <input type='text' onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
