import React from 'react'
import './navbar.css'
import profil from '../../assets/images/profil.png'

import { useState } from 'react'

function Navbar() {

  return (
    <div className='container_navbar'>
      <div className='content_menu_open'>
        <span>logo</span>
      </div>
      <div>
        <img src={profil} alt='' />
      </div>
    </div>
  )
}

export default Navbar