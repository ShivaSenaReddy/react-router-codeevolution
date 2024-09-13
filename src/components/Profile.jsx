import React, { useContext } from 'react'
import { useAuth } from './auth'

// import { AuthContext } from './auth'

function Profile() {
    // const { user, login, logout } = useContext(AuthContext)
    // console.log(login)
    // login('jssr')
    // console.log(user)
    // const auth = useAuth();
    // console.log(auth)

    const auth = useAuth();
    return (
        <div>
            Welcome {auth.user}
            <button onClick={auth.logout}>Log out</button>
        </div>
    )
}

export default Profile
