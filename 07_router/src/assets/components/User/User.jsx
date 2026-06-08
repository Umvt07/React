import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {id}=useParams();
  return (
    <div className='flex justify-center text-2xl text-amber-200'>User:{id}</div>
    // ya parameter is id so this id will get displayed
  )
}

export default User     