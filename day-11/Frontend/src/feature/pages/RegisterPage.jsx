import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useAuth } from '../hook/useauth'
export const RegisterPage = () => {

  const {user , loading , handleRegister} = useAuth()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    await handleRegister(formData.username , formData.email , formData.password)

    
      navigate("/")
    
    if(loading){
      return <div>Loading...</div>
    }

  
  }

  return (
    <main>
      <section>
        <div className="form-container">
          <h2>Register</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <button type="submit">Submit</button>

          </form>
          <p>Already have an account? <Link
           className='toggleAuthForm' to="/login">Login</Link></p>
        </div>
      </section>
    </main>
  )
}

export default RegisterPage