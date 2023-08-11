import React from 'react'
import './UserHomme.css'
import mosque from '../../assets/images/mosque.png'
import UserNavbar from '../UserNavbar/UserNavbar'


function UserHome() {
  return (
    <div className='user-home'>
    <UserNavbar/>
    <section>
    <div className="mosque">
    <div className="mosque-desc">
    
    </div>
    <div className="mosque-img"></div>
    <img src={mosque} alt="" srcset="" />
    </div>
    </section>
    </div>
  )
}

export default UserHome