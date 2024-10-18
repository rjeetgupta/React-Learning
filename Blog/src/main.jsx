import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'

import Home from "./pages/Home.jsx"
import SignUp from './pages/Signup.jsx'
import AddPost from "./pages/AddPost.jsx"
import EditPost from "./pages/EditPost.jsx"
import Post from "./pages/Post.jsx"
import AllPosts from "./pages/AllPost.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      <Route path='' element={<Home />} />
      
      <Route path='/login' element={
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      } />

      <Route path='/signup' element={
        <AuthLayout authentication={false}>
          <SignUp />
        </AuthLayout>
      } />

      <Route path='/my-posts' element={
        <AuthLayout authentication={""}>
          <AllPosts />
        </AuthLayout>
      } />

      <Route path='/all-post' element={
        <AuthLayout authentication={""}>
          <AddPost />
        </AuthLayout>
      } />

      <Route path='/edit-post/:slug' element={
        <AuthLayout authentication={""}>
          <EditPost />
        </AuthLayout>
      } />

      <Route path='/post/:slug' element={<Post />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
