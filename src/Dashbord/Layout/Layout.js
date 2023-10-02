import React, {  useState } from 'react'
import './layout.css'
import Navbar from '../Navbar/Navbar'
import close from '../../assets/images/close.png'
import men from '../../assets/images/menu.png'
import { Link } from 'react-router-dom';


function Layout({children}) {
  const [change, setChange] = useState(false);
  const handleClick = () => {
    setChange(!change);
  };
  const menu = [
    {
      id: 1,
      text: " DASHBOARD",
      lien:"/dashbord"
    },
    {
      id: 2,
      text: "STUDENTS",
      lien:"/dashbord/student"
    },
    {
      id: 3,
      text: "COURSES",
      lien:"/dashbord/course"
    },
    {
      id: 4,
      text: "Asigned students",
      lien:"/dashbord/asigned"
    },
  ]
  return (
    <div className='container_layout'>
      <div className={!change ? 'content_navbar' : 'content_navbar_second'}>
       {
        !change? <div className='open'onClick={handleClick}>
        <img src={men} alt='' />
      </div>:null
       }
        <Navbar changer={change} />
      </div>
      <div className={!change ? 'sidebar_close' : "sidebar_open"}>
        <div className='content_close'>
          <img src={close} onClick={handleClick} alt='' />
        </div>
        <div className='content_menu'>
          {
            menu.map((item) => {
              return (
                <Link to={item.lien} className={`menu_text ${window.location.pathname === item.lien?"menu_text_back":null}`}key={item.id}>
                      {item.text}
                </Link>
              )
            })
          }
        </div>
      </div>
      <div className={!change ? 'container_component_close' : "container_component_open"}>
              {children}  
      </div>
    </div>
  )
}

export default Layout