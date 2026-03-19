import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useAuth } from '../hook/useauth'
import { useNavigate } from 'react-router-dom'
export const LoginPage = () => {

  const {user , loading , handleLogin} = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
  e.preventDefault();

  const sucess = await handleLogin(formData.email , formData.password)

  
    navigate("/")
  

    if(loading){
      return <div>Loading...</div>
  }
}

  return (
    <main>
      <section>
        <div className="form-container">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>

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
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <button type="submit">Submit</button>

          </form>
          <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
        </div>
      </section>
    </main>
  )
}

export default LoginPage