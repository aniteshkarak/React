import React, {useState, useContext} from 'react';
import { UserContext } from '../Context/UserContext';

function Profile() {
    const {user} = useContext(UserContext);

    if(!user)  return <p>Please login to view your profile.</p>
    return(
        <div>
            <h2>Profile</h2>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <br />
            <h5>Welcome, {user.username}</h5>
        </div>
    )
}

export default Profile;