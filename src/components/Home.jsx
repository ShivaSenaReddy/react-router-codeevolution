import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return (
        <>
            <div>
                HomePage
            </div>
            <button onClick={() => navigate('order-summary')}>Place Order</button>
        </>
    )
}

export default Home
