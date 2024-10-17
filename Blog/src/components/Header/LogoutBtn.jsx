import React from 'react'
import authService from '../../appwrite/config' 
import { logout } from '../../store/authSlice'
import { useDispatch } from'react-redux'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            console.log('Logged out')
        }).catch((error) => {
            console.log('Failed to log out', error.message)
        })
    }
  return (
      <button
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      >Logout</button>
  )
}

export default LogoutBtn