import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const NavStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',

        }
    }
    return (
        <nav>
            <NavLink style={NavStyles}
                to='/'>Home</NavLink>
            <NavLink style={NavStyles} to='about'>About</NavLink>
            <NavLink style={NavStyles} to='products'>Products</NavLink>
            <NavLink style={NavStyles} to='users'>Users</NavLink>
         </nav>
    )
}

export default Navbar
