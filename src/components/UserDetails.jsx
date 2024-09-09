import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const params = useParams();
    console.log(params)
    return (
        <div>
            Details about the User {params.userid}
        </div>
    )
}

export default UserDetails
