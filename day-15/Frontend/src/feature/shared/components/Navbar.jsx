import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className='nav-bar'>
        <p>Instagram</p>
        <button className='button primary-button' onClick={()=>navigate("/create-post")}>new post</button>
    </nav>
  )
}

export default Navbar