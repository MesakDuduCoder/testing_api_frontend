import React from 'react'
import { Link } from 'react-router-dom';

function Home() {

   async function handleLogout(e) {
      e.preventDefault();
      window.localStorage.removeItem("token");
      alert("logged out")
       console.log("token removed");

  }
  return (
    <div>Home
        <Link to='/' style={{textDecoration: 'none'}}>
        <div className='logout' onClick={(e)=>handleLogout(e)}>Logout</div>
        </Link> 
    </div>
  )
}

export default Home