import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParams, setSearchParams] = useSearchParams();
    const isActive = searchParams.get('filter') === 'active' ? 'showing active users' : 'showing all users'
    return (
        <>
            <div className='users'>
                <Link to='1'>User 1</Link>
                <Link to='2'>User 2</Link>
                <Link to='3'>User 3</Link>
                <Link to='admin'>Admin user</Link>
                <Outlet />
            </div>
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset filter</button>
            </div>
            <h3>{isActive}</h3>
        </>
    )
}

export default Users
