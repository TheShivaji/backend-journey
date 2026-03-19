import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const LoginPage = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      'http://localhost:3000/api/auth/login',
      formData,
      { withCredentials: true }
    );

    console.log("FULL RESPONSE:", response);
    console.log("DATA:", response.data);

    //Safe access
    const user = response.data?.user;

    if (!user) {
      console.log("No user in response");
      return;
    }

    console.log("USER:", user);

  } catch (error) {
    console.log("LOGIN ERROR:", error.response?.data?.message);
  }
};

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
              autoComplete="current-password"
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