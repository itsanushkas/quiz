import React from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'


const Navbar = () => {
  let navigate = useNavigate();

  const highscore = (() => {
    navigate("Highscore")
})
  return (
    <div className='navbar'>
       <div className="logo-cont">
        <h3><Link className='logo' to="/">
            Quiz
        </Link></h3>
       </div>
       <div className='highscore-cont'>
        <div className='score' onClick={highscore}>
            <h4>Scores</h4>
        </div>
       </div>
    </div>
  )
}

export default Navbar