import React from 'react'
import './navbar.css'
import profil from '../../assets/images/profil.png'
import log from '../../assets/images/log.png'

import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
const [change, setChange]=useState(false)
  return (
    <div className='container_navbar'>
      <div className='content_menu_open'>
        <span>LAWAL</span>
      </div>
      <div>
        <img src={profil} className='img' alt='' onClick={()=>setChange(!change)} />
        {
          change?
          <div className='content_img_modal'>
           
          <img src={log} alt=''className='img_modal' />
          <div  className='text'>Logout</div>
        </div>:null
        }
      </div>
    </div>
  )
}

export default Navbar