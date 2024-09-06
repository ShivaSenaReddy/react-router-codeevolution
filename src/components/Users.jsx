import React from 'react'
import { Outlet } from 'react-router-dom'

function Users() {
    return (
        <div>
            <p>User 1</p>
            <p>User 2</p>
            <p>User 3</p>
            <Outlet />
        </div>
    )
}

export default Users
