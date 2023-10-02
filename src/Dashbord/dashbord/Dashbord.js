import React from 'react'
import Layout from '../Layout/Layout'
import './dashbord.css'
import stud from '../../assets/images/stud.png'
import course from '../../assets/images/couse.png'

function Dashbord() {
  const element = [
    {
        id: 1,
        matricule: "SE0001",
        name: "Mary Doe",
        town: "Yaounde",
        date: "1998/02/02"
    },
    {
        id: 2,
        matricule: "SE0002",
        name: "John Doe",
        town: "Bafoussam ",
        date: "1998/02/02"
    },
    {
        id: 3,
        matricule: "SE0003",
        name: "Jean Doe",
        town: "Bamenda",
        date: "1998/02/02"
    },
]
  return (
    <Layout>
      <div className='container_element'>
        <div className='pathname'>{window.location.pathname}</div>
        <div className='container_element_second'>
          <div className='content_statis'>
              <div className='card'>
              <div className='card_second_title'>Students</div>
                 <div className='card_second_img'>
                   <div>
                     <img src={stud}alt=''/>
                   </div>
                  <span>280</span>
                 </div>
              </div>
              <div className='card_second'>
                 <div className='card_second_title'>Courses</div>
                 <div className='card_second_img'>
                  <div><img src={course}alt=''/></div>
                  <span>98</span>
                 </div>
              </div>
          </div>
          <div className='content_table'>
          <div className='title_table'>Recent  students</div>
          <table>
            
    <thead>
      <tr>
        <th>Matricule</th>
        <th>Name</th>
        <th>Town</th>
        <th>Date of Birth</th>
      </tr>
    </thead>
    <tbody>
      <div className='space'></div>
      {
                                element.map((item) => {
                                    return (

                                        <tr>
                                            <td><div className='heades'> {item.matricule}</div> </td>                                       
                                            <td><div className='heades'>{item.name}</div></td>
                                            <td><div className='heades'>{item.town}</div></td>
                                            <td><div className='heades'>{item.date}</div></td>
                                            </tr>
      )})}
      <div className='space'></div>
  
    </tbody>
  </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashbord