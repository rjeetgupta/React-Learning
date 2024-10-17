import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './Store/authSlice'
import { Header, Footer } from './components/index.js'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  const [loding, setLoding] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoding(false))
  }, [])
  return !loding ? (
    <div className='min-h-screen flex flex-wrap content-between bg-slate-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO:<Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
