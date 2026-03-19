import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from './feature/pages/LoginPage'
import { RegisterPage } from './feature/pages/RegisterPage'
import './feature/Style/style.scss'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/register' element={(<RegisterPage />)} />
        <Route path='/login' element={(<LoginPage />)} />
      </Routes>
    </BrowserRouter>

  )
}

