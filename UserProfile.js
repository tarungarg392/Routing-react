import React from 'react'
import { useParams } from "react-router";


function UserProfile() {
    const { username,age } = useParams();

  return (
    <div>
      User profile {username} {age}
    </div>
  )
}

export default UserProfile
