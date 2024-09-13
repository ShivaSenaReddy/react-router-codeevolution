import React from 'react'
import { useAuth } from './auth'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function RequireAuth({ children }) {
    const auth = useAuth();
    console.log(auth.user);
    const location = useLocation()
    if (auth.user === null) {
        return <Navigate to='/login' state={{ path: location.pathname }} />
    }
    else {
        return (
            <div>
                {children}
            </div>
        )
    }
}

export default RequireAuth
