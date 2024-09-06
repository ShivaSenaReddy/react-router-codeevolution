import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
    return (
        <div className='products'>
            <div>
                <h3>Products</h3>
                <input type='text' placeholder='search for products' />
            </div>
            <Link to='new'>New</Link>
            <Link to='featured'>Featured</Link>
            <Outlet />
        </div>
    )
}

export default Products
