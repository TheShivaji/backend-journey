import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from './feature/auth/pages/LoginPage'
import { RegisterPage } from './feature/auth/pages/RegisterPage'
import CreatePost from './feature/post/pages/CreatePost'
import Feed from './feature/post/pages/Feed'


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/register' element={(<RegisterPage />)} />
        <Route path='/login' element={(<LoginPage />)} />
        <Route path='/create-post' element={(<CreatePost />)} />
      </Routes>
    </BrowserRouter>

  )
}

