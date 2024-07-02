import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Adminhome() {
  return (
    localStorage.getItem("adminlogin") ? 
    <div>Adminhome</div>
    : <Navigate to={'/adminlogin'} />
  )
}
